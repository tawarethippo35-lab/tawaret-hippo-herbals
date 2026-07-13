---
layout: default
title: "Help Us Recommend the Right Product"
description: "Tell us your wellness concern and get a product recommendation by WhatsApp from Tawaret Hippo Herbals, Trinidad and Tobago."
permalink: /find-your-match/
---

<section class="wrap">
  <h1 class="section-title">Help Us Recommend the Right Product</h1>
  <p class="section-sub">Not sure what to choose? Tell us what brought you here, and we'll follow up personally on WhatsApp with a general product recommendation.</p>
  <p>Fill out the short form below with your wellness concern. This form does not generate an instant answer. A team member reviews every response and usually follows up on WhatsApp within one day.</p>
  <div class="disclaimer-box">
    <strong>Recommendation and privacy notice:</strong> This free form is for a general product recommendation. Personalized guidance based on your health history, several concerns, medications, medical reports, or test results requires the TT$250 paid consultation. Do not upload medical reports or highly sensitive information here. Your response is used only to review your request and contact you on WhatsApp.
  </div>
  <div class="form-embed-wrap">
    {% if site.find_your_match_form_url and site.find_your_match_form_url != "" %}
    <iframe src="{{ site.find_your_match_form_url }}" title="Product recommendation form">Loading form...</iframe>
    {% else %}
    <div class="placeholder-note"><strong>Form not connected yet.</strong> Please use the WhatsApp button below for a general product-selection question.</div>
    {% endif %}
  </div>
  {% capture recommendation_message %}Hi Tawaret Hippo Herbals, I would like help choosing a product. Please tell me what information you need for a general recommendation.{% endcapture %}
  <p style="margin-top:1.5rem;">Prefer to skip the form? {% include whatsapp-cta.html label="Ask for help choosing a product" message=recommendation_message %}</p>
</section>
