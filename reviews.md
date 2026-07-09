---
layout: default
title: "Reviews and Testimonials"
description: "What Tawaret Hippo Herbals customers say about ordering and their wellness routine, in Trinidad and Tobago."
permalink: /reviews/
---

<section class="wrap">
  <h1 class="section-title">Reviews and Testimonials</h1>
  <p class="section-sub">Real feedback from real customers.</p>

  {% if site.data.testimonials and site.data.testimonials.size > 0 %}
    {% for t in site.data.testimonials %}
    <div class="testimonial">
      <p>&ldquo;{{ t.quote }}&rdquo;</p>
      <p class="name">{{ t.name }}{% if t.product %} &middot; {{ t.product }}{% endif %}</p>
    </div>
    {% endfor %}
  {% else %}
    <div class="placeholder-note">
      Customer reviews are being collected. Check back soon, or message us on WhatsApp if you'd like to share your own experience.
    </div>
  {% endif %}

  <p style="margin-top:1.5rem;">Tried a Tawaret Hippo Herbals product? {% include whatsapp-cta.html label="Share your feedback on WhatsApp" %}</p>
</section>
