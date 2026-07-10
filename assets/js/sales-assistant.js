(function (global) {
  'use strict';

  var CATEGORY_PRIORITY = [
    'Paid Consultation',
    'Re-order',
    'Order',
    'Pickup',
    'Product Recommendation',
    'General Question'
  ];

  var RECOMMENDATION_FORM_URL = 'https://tawarethippo35-lab.github.io/tawaret-hippo-herbals/find-your-match/';
  var WEBHOOK_STORAGE_KEY = 'tawaretMakeWebhookUrl';

  var CATEGORY_RULES = {
    'Paid Consultation': [
      { pattern: /\b(?:medical|lab) (?:report|reports|result|results)\b|\btest results?\b|\bblood work\b/i, weight: 7, reason: 'medical report or test-result review requested' },
      { pattern: /\bhealth history\b|\bpersonal health history\b/i, weight: 6, reason: 'personal health history mentioned' },
      { pattern: /\bdetailed (?:personal )?(?:plan|recommendation|guidance)\b|\bextensive personal guidance\b/i, weight: 6, reason: 'detailed personal guidance requested' },
      { pattern: /\b(?:combine|combining|combination of)\b.{0,45}\bproducts?\b|\bproducts?\b.{0,45}\b(?:combine|combining)\b/i, weight: 7, reason: 'detailed product-combination guidance requested' },
      { pattern: /\b(?:several|multiple)\b.{0,35}\b(?:health concerns?|conditions?|symptoms?)\b/i, weight: 6, reason: 'several personal health concerns mentioned' },
      { pattern: /\bpersonal assessment\b|\bassess (?:me|my)\b|\bassessment of what I (?:should|can) use\b/i, weight: 6, reason: 'personal assessment requested' },
      { pattern: /\bbased on my (?:condition|symptoms?|history|results?)\b|\bdetailed follow-up\b/i, weight: 6, reason: 'condition-specific follow-up requested' }
    ],
    'Re-order': [
      { pattern: /\b(?:reorder|re-order|refill)\b/i, weight: 7, reason: 'customer explicitly requested a re-order' },
      { pattern: /\b(?:bought|purchased|ordered|had)\b.{0,35}\bbefore\b/i, weight: 6, reason: 'customer indicated a previous purchase' },
      { pattern: /\b(?:want|need|would like)\b.{0,25}\b(?:it|this|that|one|another bottle)\b.{0,20}\bagain\b|\bwant it again\b|\bneed another bottle\b/i, weight: 6, reason: 'customer asked for the product again' },
      { pattern: /\bsame order as before\b|\border again\b|\bget (?:it|this) again\b/i, weight: 7, reason: 'repeat order language detected' }
    ],
    'Order': [
      { pattern: /\b(?:buy|purchase|reserve)\b/i, weight: 6, reason: 'purchase intent detected' },
      { pattern: /\bplace (?:an |the |my )?order\b|\bhow do I place (?:an |the )?order\b/i, weight: 7, reason: 'customer asked to place an order' },
      { pattern: /\b(?:want|need|would like)\b.{0,40}\b(?:bottle|bottles|product|products)\b/i, weight: 5, reason: 'customer requested one or more products' },
      { pattern: /\bpayment details?\b.{0,30}\border\b|\border\b.{0,30}\bpayment details?\b/i, weight: 5, reason: 'payment details requested for an order' }
    ],
    'Pickup': [
      { pattern: /\b(?:pickup|pick-up|pick up|collect|collection)\b/i, weight: 6, reason: 'pickup or collection inquiry detected' },
      { pattern: /\b(?:Morvant|Aranguez|Chinapoo Road|Extra Foods)\b/i, weight: 5, reason: 'approved pickup location mentioned' },
      { pattern: /\bwhere (?:can|do) I (?:collect|pick up)\b|\bpickup locations?\b/i, weight: 7, reason: 'pickup location requested' }
    ],
    'Product Recommendation': [
      { pattern: /\bnot sure (?:what|which) (?:to choose|product)\b|\bnot sure which product\b/i, weight: 7, reason: 'customer is unsure which product to choose' },
      { pattern: /\bwhich product should I start with\b|\bwhat product do you recommend\b|\bwhat should I buy\b/i, weight: 7, reason: 'basic starting-product recommendation requested' },
      { pattern: /\bhelp (?:me )?(?:choose|choosing) (?:a )?product\b|\bproduct recommendation\b/i, weight: 6, reason: 'product-choice help requested' }
    ],
    'General Question': [
      { pattern: /\b(?:price|prices|cost|how much)\b/i, weight: 4, reason: 'brief price question detected' },
      { pattern: /\b(?:size|sizes|how (?:big|large)|millilitres?|litres?|ounces?)\b/i, weight: 4, reason: 'brief product-size question detected' },
      { pattern: /\b(?:available|availability|in stock|stock)\b/i, weight: 4, reason: 'availability question detected' },
      { pattern: /\bhow (?:do|can) I pay\b|\bpayment process\b|\bbank transfer\b/i, weight: 4, reason: 'payment-process question detected' },
      { pattern: /\bhow (?:ordering|the order process) works\b/i, weight: 4, reason: 'ordering-process question detected' }
    ]
  };

  var PRODUCT_RULES = [
    { pattern: /\bkidney and liver flush (?:combo|package)\b/i, name: 'Kidney and Liver Flush' },
    { pattern: /\bchlorophyll water\b/i, name: 'Chlorophyll Water' },
    { pattern: /\bcastor oil\b/i, name: 'Castor Oil' },
    { pattern: /\bcolloidal silver(?: solution)?\b/i, name: 'Colloidal Silver Solution' },
    { pattern: /\bdaily balance tonic\b/i, name: 'Daily Balance Tonic' },
    { pattern: /\bhealing oil\b/i, name: 'Healing Oil' },
    { pattern: /\bkidney flush\b/i, name: 'Kidney Flush' },
    { pattern: /\bliver flush\b/i, name: 'Liver Flush' },
    { pattern: /\bmagnesium spray\b/i, name: 'Magnesium Spray' },
    { pattern: /\b(?:T\.E\. cr[eè]me|tumou?r eliminator cr[eè]me)\b/i, name: 'T.E. Crème' },
    { pattern: /\bHSV wellness protocol\b/i, name: 'HSV Wellness Protocol' }
  ];

  var TOPIC_RULES = [
    { pattern: /\b(?:pickup|pick-up|pick up|collect|collection|Morvant|Aranguez)\b/i, name: 'Pickup' },
    { pattern: /\b(?:payment|pay|bank transfer)\b/i, name: 'Payment process' },
    { pattern: /\b(?:available|availability|in stock|stock)\b/i, name: 'Availability' },
    { pattern: /\b(?:price|prices|cost|how much)\b/i, name: 'Price' },
    { pattern: /\b(?:size|sizes|millilitres?|litres?|ounces?)\b/i, name: 'Product size' }
  ];

  function collectEvidence(inquiry) {
    var evidence = {};
    CATEGORY_PRIORITY.forEach(function (category) {
      evidence[category] = { score: 0, reasons: [] };
      CATEGORY_RULES[category].forEach(function (rule) {
        if (rule.pattern.test(inquiry)) {
          evidence[category].score += rule.weight;
          evidence[category].reasons.push(rule.reason);
        }
      });
    });
    return evidence;
  }

  function detectTopic(inquiry, category) {
    var products = PRODUCT_RULES.filter(function (rule) {
      return rule.pattern.test(inquiry);
    }).map(function (rule) {
      return rule.name;
    });

    if (products.length) return products.join(', ');

    var topics = TOPIC_RULES.filter(function (rule) {
      return rule.pattern.test(inquiry);
    }).map(function (rule) {
      return rule.name;
    });

    if (topics.length) return topics.join(', ');

    var defaults = {
      'Paid Consultation': 'Personal wellness guidance',
      'Re-order': 'Previous purchase',
      'Order': 'Product order',
      'Pickup': 'Pickup arrangements',
      'Product Recommendation': 'Starting-product match',
      'General Question': 'General inquiry'
    };
    return defaults[category];
  }

  function getConfidence(category, evidence, isFallback) {
    if (isFallback) return 62;
    return Math.min(98, 78 + (evidence[category].score * 2));
  }

  function getHumanReview(inquiry, category, confidence, evidence, isFallback) {
    var reasons = [];
    var personalHealth = /\b(?:my diagnosis|diagnosed|my symptoms?|my condition|health history|medical reports?|medical results?|test results?|blood work|lab results?)\b/i.test(inquiry);
    var reports = /\b(?:medical|lab) (?:report|reports|result|results)\b|\btest results?\b|\bblood work\b/i.test(inquiry);
    var combinations = /\b(?:combine|combining|combination of)\b.{0,45}\bproducts?\b|\bproducts?\b.{0,45}\b(?:combine|combining)\b/i.test(inquiry);
    var stock = /\b(?:available|availability|in stock|stock)\b/i.test(inquiry);
    var price = /\b(?:price|prices|cost|how much)\b/i.test(inquiry);
    var scored = CATEGORY_PRIORITY.map(function (name) {
      return { name: name, score: evidence[name].score };
    }).filter(function (item) {
      return item.score > 0;
    }).sort(function (a, b) {
      return b.score - a.score;
    });
    var similarScores = scored.length > 1 && Math.abs(scored[0].score - scored[1].score) <= 2;

    if (confidence < 75) reasons.push('confidence below 75%');
    if (personalHealth) reasons.push('personal health information detected');
    if (reports) reasons.push('medical report or test results mentioned');
    if (combinations) reasons.push('several-product combination requested');
    if (stock) reasons.push('stock or availability must be confirmed');
    if (price) reasons.push('price question requires confirmation before replying');
    if (similarScores) reasons.push('multiple categories have similar evidence');
    if (isFallback || !inquiry.trim()) reasons.push('inquiry is unclear');
    if (category === 'General Question' && !evidence['General Question'].score) reasons.push('factual answer cannot be safely confirmed automatically');

    return {
      required: reasons.length > 0,
      reasons: reasons
    };
  }

  function getFollowUp(category) {
    if (category === 'Paid Consultation') return '24–48 hours after payment and the completed intake form';
    if (category === 'Product Recommendation') return 'After the free Product Recommendation Form is reviewed';
    return 'After human review of the prepared response';
  }

  function getPreparedResponse(category, customerName) {
    var name = customerName && customerName.trim() ? customerName.trim() : 'there';
    var responses = {
      'Order': 'Hello ' + name + ', thank you for messaging Tawaret Hippo Herbals. Please confirm the product name and quantity you would like. I will check availability and confirm the total cost. Orders are secured by online bank transfer, and pickup arrangements are confirmed after the payment screenshot is received.',
      'Re-order': 'Hello ' + name + ', welcome back. Please confirm the product and quantity you would like to reorder, along with your preferred pickup option. Pickup can be arranged at Chinapoo Road, Morvant, or Extra Foods, Aranguez. I will confirm availability and the total cost before payment.',
      'Pickup': 'Hello ' + name + '. Pickup can be arranged at Chinapoo Road, Morvant, or Extra Foods, Aranguez. Please confirm the product or order and your preferred pickup location. The pickup time will be arranged after payment is confirmed.',
      'Product Recommendation': 'Hello ' + name + '. You can complete the free Product Recommendation Form here:\n\n' + RECOMMENDATION_FORM_URL + '\n\nAfter you submit the form, I will review your answers and follow up with you on WhatsApp. This basic product match is separate from the TT$250 personal consultation.',
      'General Question': 'Hello ' + name + '. Thank you for your question. I will confirm the correct information for you. General questions about products, listed prices, sizes, payment, pickup, and how to order are answered free of charge. Personal guidance based on health history, medical reports, or a detailed plan requires the TT$250 consultation.',
      'Paid Consultation': 'Hello ' + name + '. Personal guidance is provided through the TT$250 WhatsApp 1-on-1 consultation. After payment is confirmed, I will send the consultation intake form. Once the form is completed, your consultation time will be arranged within 24–48 hours. Please let me know when you are ready for the payment details.'
    };
    return responses[category];
  }

  function classifyInquiry(inquiry, customerName) {
    var text = String(inquiry || '').trim();
    var evidence = collectEvidence(text);
    var category = CATEGORY_PRIORITY.find(function (name) {
      return evidence[name].score > 0;
    }) || 'General Question';
    var isFallback = CATEGORY_PRIORITY.every(function (name) {
      return evidence[name].score === 0;
    });
    var confidence = getConfidence(category, evidence, isFallback);
    var humanReview = getHumanReview(text, category, confidence, evidence, isFallback);
    var reason = evidence[category].reasons.length
      ? evidence[category].reasons.join('; ')
      : 'No specific sales intent was detected, so the inquiry is treated as a general question for manual confirmation.';

    return {
      classification: category,
      confidence: confidence,
      topic: detectTopic(text, category),
      reason: reason.charAt(0).toUpperCase() + reason.slice(1) + '.',
      humanReviewRequired: humanReview.required ? 'Yes' : 'No',
      humanReviewReasons: humanReview.reasons,
      followUp: getFollowUp(category),
      response: getPreparedResponse(category, customerName)
    };
  }

  function cleanWhatsAppNumber(value) {
    var digits = String(value || '').replace(/\D/g, '');
    if (digits.length === 7) return '1868' + digits;
    if (digits.length === 10 && digits.indexOf('868') === 0) return '1' + digits;
    return digits;
  }

  function buildWhatsAppUrl(number, response) {
    var cleanNumber = cleanWhatsAppNumber(number);
    if (cleanNumber.length < 7) return '';
    return 'https://wa.me/' + cleanNumber + '?text=' + encodeURIComponent(String(response || ''));
  }

  function formatLeadRecord(data) {
    return [
      'Date Received: ' + data.dateReceived,
      'Customer Name: ' + data.customerName,
      'WhatsApp Number: ' + data.whatsappNumber,
      'Lead Source: ' + data.leadSource,
      'Inquiry: ' + data.inquiry,
      'Classification: ' + data.classification,
      'Confidence: ' + data.confidence + '%',
      'Product or Topic: ' + data.topic,
      'Suggested Response: ' + data.response,
      'Human Review Required: ' + data.humanReviewRequired,
      'Follow-up Days: ' + data.followUp,
      'Status: Response Prepared'
    ].join('\n');
  }

  function isValidWebhookUrl(value) {
    try {
      var parsed = new URL(String(value || '').trim());
      return parsed.protocol === 'https:';
    } catch (error) {
      return false;
    }
  }

  function buildLeadPayload(data) {
    return {
      received_at: data.receivedAt,
      customer_name: data.customerName,
      whatsapp_number: data.whatsappNumber,
      source: data.leadSource,
      inquiry_text: data.inquiry,
      classification: data.classification,
      confidence: data.confidence,
      product_or_topic: data.topic,
      suggested_response: data.response,
      follow_up_period: data.followUp,
      requires_human_review: data.humanReviewRequired === 'Yes',
      status: 'Response Prepared'
    };
  }

  function submitLead(webhookUrl, payload, fetchImplementation) {
    return fetchImplementation(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (response) {
      if (!response.ok) throw new Error('Webhook request failed with status ' + response.status + '.');
      return response;
    });
  }

  global.TawaretSalesAssistant = {
    classifyInquiry: classifyInquiry,
    cleanWhatsAppNumber: cleanWhatsAppNumber,
    buildWhatsAppUrl: buildWhatsAppUrl,
    formatLeadRecord: formatLeadRecord,
    isValidWebhookUrl: isValidWebhookUrl,
    buildLeadPayload: buildLeadPayload,
    submitLead: submitLead
  };

  if (typeof document === 'undefined') return;

  function initialize() {
    var root = document.querySelector('[data-sales-assistant]');
    if (!root) return;

    var form = document.getElementById('sales-assistant-form');
    var results = document.getElementById('sales-assistant-results');
    var preparedResponse = document.getElementById('prepared-response');
    var status = document.getElementById('sales-assistant-status');
    var webhookUrl = document.getElementById('make-webhook-url');
    var webhookStatus = document.getElementById('webhook-settings-status');
    var sendLeadButton = document.getElementById('send-lead-sheet');
    var latestResult = null;

    webhookUrl.value = global.localStorage.getItem(WEBHOOK_STORAGE_KEY) || '';

    function setText(id, value) {
      var element = document.getElementById(id);
      if (element) element.textContent = value;
    }

    function getFormData() {
      return {
        customerName: document.getElementById('customer-name').value.trim(),
        whatsappNumber: document.getElementById('whatsapp-number').value.trim(),
        leadSource: document.getElementById('lead-source').value,
        inquiry: document.getElementById('customer-inquiry').value.trim()
      };
    }

    function announce(message) {
      status.textContent = message;
    }

    function announceWebhook(message) {
      webhookStatus.textContent = message;
    }

    function copyText(text, successMessage) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).then(function () {
          announce(successMessage);
        }).catch(function () {
          fallbackCopy(text, successMessage);
        });
      }
      fallbackCopy(text, successMessage);
      return Promise.resolve();
    }

    function fallbackCopy(text, successMessage) {
      var helper = document.createElement('textarea');
      helper.value = text;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      document.body.removeChild(helper);
      announce(successMessage);
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = getFormData();
      if (!data.inquiry) {
        announce('Enter the customer inquiry before classifying it.');
        document.getElementById('customer-inquiry').focus();
        return;
      }

      latestResult = classifyInquiry(data.inquiry, data.customerName);
      setText('result-classification', latestResult.classification);
      setText('detail-classification', latestResult.classification);
      setText('detail-confidence', latestResult.confidence + '%');
      setText('detail-topic', latestResult.topic);
      setText('detail-reason', latestResult.reason);
      setText('detail-human-review', latestResult.humanReviewRequired);
      setText('detail-follow-up', latestResult.followUp);
      preparedResponse.value = latestResult.response;
      results.hidden = false;
      announce('Response prepared. Review it before copying or opening WhatsApp.');
      results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.getElementById('save-webhook-url').addEventListener('click', function () {
      var value = webhookUrl.value.trim();
      if (!value) {
        announceWebhook('Webhook not entered. Paste a Make custom webhook URL before saving.');
        webhookUrl.focus();
        return;
      }
      if (!isValidWebhookUrl(value)) {
        announceWebhook(/^http:\/\//i.test(value)
          ? 'Webhook must use HTTPS. HTTP URLs are not accepted.'
          : 'Webhook not entered correctly. Use a complete HTTPS URL.');
        webhookUrl.focus();
        return;
      }
      global.localStorage.setItem(WEBHOOK_STORAGE_KEY, value);
      announceWebhook('Webhook URL saved in this browser.');
    });

    sendLeadButton.addEventListener('click', function () {
      if (!latestResult) {
        announce('Prepare a response before sending it to the lead sheet.');
        return;
      }

      var savedWebhookUrl = global.localStorage.getItem(WEBHOOK_STORAGE_KEY) || '';
      if (!savedWebhookUrl) {
        announce('Webhook not entered. Save a Make custom webhook URL before sending.');
        webhookUrl.focus();
        return;
      }

      var data = getFormData();
      var payload = buildLeadPayload({
        receivedAt: new Date().toISOString(),
        customerName: data.customerName,
        whatsappNumber: data.whatsappNumber,
        leadSource: data.leadSource,
        inquiry: data.inquiry,
        classification: latestResult.classification,
        confidence: latestResult.confidence,
        topic: latestResult.topic,
        response: preparedResponse.value,
        followUp: latestResult.followUp,
        humanReviewRequired: latestResult.humanReviewRequired
      });

      sendLeadButton.disabled = true;
      announce('Sending to lead sheet...');
      submitLead(savedWebhookUrl, payload, global.fetch.bind(global)).then(function () {
        announce('Lead submitted successfully.');
      }).catch(function () {
        announce('Lead submission failed. Check the webhook URL and try again.');
      }).then(function () {
        sendLeadButton.disabled = false;
      });
    });

    document.getElementById('copy-response').addEventListener('click', function () {
      if (!latestResult) return;
      copyText(preparedResponse.value, 'Response copied.');
    });

    document.getElementById('copy-lead-record').addEventListener('click', function () {
      if (!latestResult) return;
      var data = getFormData();
      var record = formatLeadRecord({
        dateReceived: new Date().toISOString().slice(0, 10),
        customerName: data.customerName,
        whatsappNumber: data.whatsappNumber,
        leadSource: data.leadSource,
        inquiry: data.inquiry,
        classification: latestResult.classification,
        confidence: latestResult.confidence,
        topic: latestResult.topic,
        response: preparedResponse.value,
        humanReviewRequired: latestResult.humanReviewRequired,
        followUp: latestResult.followUp
      });
      copyText(record, 'Lead record copied.');
    });

    document.getElementById('open-whatsapp').addEventListener('click', function () {
      if (!latestResult) return;
      var data = getFormData();
      var url = buildWhatsAppUrl(data.whatsappNumber, preparedResponse.value);
      if (!url) {
        announce('Enter a valid WhatsApp number before opening WhatsApp.');
        document.getElementById('whatsapp-number').focus();
        return;
      }
      global.open(url, '_blank', 'noopener');
      announce('WhatsApp opened with the prepared message. Review it before sending.');
    });

    document.getElementById('clear-form').addEventListener('click', function () {
      form.reset();
      preparedResponse.value = '';
      latestResult = null;
      results.hidden = true;
      status.textContent = '';
      document.getElementById('customer-name').focus();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})(typeof window !== 'undefined' ? window : globalThis);
