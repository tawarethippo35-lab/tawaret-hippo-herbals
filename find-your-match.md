---
layout: default
title: "Help Us Recommend the Right Product"
description: "Tell us your wellness concern and get a personalized product recommendation by WhatsApp from Tawaret Hippo Herbals, Trinidad and Tobago."
permalink: /find-your-match/
---

<section class="wrap">
  <h1 class="section-title">Help Us Recommend the Right Product</h1>
  <p class="section-sub">Not sure what to choose? Tell us what brought you here, and we'll follow up personally on WhatsApp with a product recommendation suited to you.</p>

  <p>Fill out the short form below with your wellness concern. This form does not generate an instant answer on this page. A team member reviews every response personally and follows up with you directly on WhatsApp with a recommendation suited to your situation, usually within a day.</p>

  <div class="form-embed-wrap">
    {% if site.find_your_match_form_url and site.find_your_match_form_url != "" %}
    <iframe src="{{ site.find_your_match_form_url }}" title="Product recommendation form">Loading form...</iframe>
    {% else %}
    <div class="placeholder-note">
      <strong>Form not connected yet.</strong> Set <code>find_your_match_form_url</code> in <code>_config.yml</code> to your published Google Form's embed URL (in Google Forms: Send &rarr; the <code>&lt;&gt;</code> embed icon &rarr; copy the URL from the <code>src</code> attribute). Until then, use the WhatsApp button below.
    </div>
    {% endif %}
  </div>

  <p style="margin-top:1.5rem;">Prefer to skip the form? {% include whatsapp-cta.html label="Message us on WhatsApp directly" %}</p>
</section>
