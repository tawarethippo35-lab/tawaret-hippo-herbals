---
layout: default
title: Traditional Herbal Wellness Products in Trinidad and Tobago
description: "Tawaret Hippo Herbals offers traditional herbal wellness products by prepaid pre-order in Trinidad and Tobago. View current prices and order through WhatsApp."
permalink: /
---

<section class="hero">
  <div class="wrap">
    <h1>Tawaret Hippo Herbals</h1>
    <p class="tagline">"Remember that the healer is in you"</p>
    <p class="lead">Traditional herbal wellness products made in Trinidad and Tobago, rooted in practices passed down through generations. Browse the catalog, read the FAQ, or message us on WhatsApp for help choosing your next step.</p>
    {% include whatsapp-cta.html label="Message us on WhatsApp" %}
  </div>
</section>

<section class="wrap">
  <h2 class="section-title">Shop the catalog</h2>
  <p class="section-sub">All products are currently available by pre-order. Prepayment secures your order.</p>
  <div class="grid grid-3">
    {% assign featured = site.products | sort: "price_numeric" %}
    {% for product in featured %}
    <div class="card">
      {% if product.image %}
        <a href="{{ product.url | relative_url }}" aria-label="View {{ product.title }}"><img src="{{ product.image | relative_url }}" alt="{{ product.title }}" loading="lazy"></a>
      {% else %}
        <div class="card-photo-placeholder">Photo coming soon</div>
      {% endif %}
      <h3><a href="{{ product.url | relative_url }}">{{ product.title }}</a></h3>
      <p class="product-meta"><strong>{{ product.availability }}</strong> &middot; {{ product.size }}</p>
      {% include product-price.html product=product %}
    </div>
    {% endfor %}
  </div>
  <p style="margin-top:1.4rem;"><a class="btn btn-outline" href="{{ '/products/' | relative_url }}">See all products</a></p>
</section>

<section class="wrap">
  <h2 class="section-title">Not sure what to choose?</h2>
  <p class="section-sub">Use the free form for a general product recommendation. Personalized guidance based on your health history, several concerns, medications, reports, or test results requires the TT$250 consultation.</p>
  <a class="btn btn-whatsapp" href="{{ '/find-your-match/' | relative_url }}">Get a Product Recommendation</a>
</section>

<section class="wrap">
  <div class="card">
    <h2 class="section-title">WhatsApp 1-on-1 Consultation</h2>
    <p class="price-tag">Consultation Fee: TT$250</p>
    <p>Need personal guidance before choosing a product? Book a WhatsApp 1-on-1 consultation with Tawaret Hippo Herbals.</p>
    <p>Payment is required first. After payment is confirmed, you will receive the consultation intake form. Once the completed form is received, your consultation will be booked within 24–48 hours.</p>
    <p>Personalized product selection, wellness guidance, health-history review, and medical-report review belong in the paid consultation.</p>
    <a
      class="btn btn-whatsapp"
      href="{{ site.business.whatsapp_link }}?text={{ 'Hi Tawaret Hippo Herbals, I would like to book a WhatsApp 1-on-1 consultation.' | url_encode }}"
      target="_blank"
      rel="noopener"
    >Book a WhatsApp Consultation</a>
  </div>
</section>

<section class="wrap">
  <h2 class="section-title">From the blog</h2>
  <p class="section-sub">Wellness routines and traditions, explained.</p>
  <div class="grid grid-3">
    {% for post in site.posts limit:3 %}
    <div class="card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
      <p>{{ post.description | truncate: 110 }}</p>
    </div>
    {% endfor %}
  </div>
  <p style="margin-top:1.4rem;"><a class="btn btn-outline" href="{{ '/blog/' | relative_url }}">Read the blog</a></p>
</section>

<section class="wrap">
  <h2 class="section-title">How ordering works</h2>
  <div class="grid grid-3">
    <div class="card">
      <h3>1. Send your pre-order</h3>
      <p>Send a WhatsApp message to {{ site.business.phone_display }} with the product and quantity you want.</p>
    </div>
    <div class="card">
      <h3>2. Secure your order</h3>
      <p>We'll confirm the total and bank-transfer details. Your pre-order is secured after your payment screenshot is received.</p>
    </div>
    <div class="card">
      <h3>3. Arrange pickup</h3>
      <p>Pickup is arranged when your order is ready. Free pickup is available at Chinapoo Road, Morvant. Extra Foods, Aranguez is also a free pickup option until August 31, 2026.</p>
    </div>
  </div>
</section>
