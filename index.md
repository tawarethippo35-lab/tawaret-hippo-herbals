---
layout: default
title: Traditional Herbal Wellness Products in Trinidad and Tobago
description: "Tawaret Hippo Herbals offers traditional herbal wellness products in Trinidad and Tobago, including chlorophyll water, castor oil, colloidal silver, and kidney and liver flushes. Order by WhatsApp."
permalink: /
---

<section class="hero">
  <div class="wrap">
    <h1>Tawaret Hippo Herbals</h1>
    <p class="tagline">"Remember that the healer is in you"</p>
    <p class="lead">Traditional herbal wellness products made in Trinidad and Tobago, rooted in routines passed down through generations. Browse the catalog, read the FAQ, or message us on WhatsApp for a personalized product match.</p>
    {% include whatsapp-cta.html label="Message us on WhatsApp" %}
  </div>
</section>

<section class="wrap">
  <h2 class="section-title">Shop the catalog</h2>
  <p class="section-sub">A full range of traditional wellness products, priced in TT$.</p>
  <div class="grid grid-3">
    {% assign featured = site.products | sort: "price_numeric" %}
    {% for product in featured %}
    <div class="card">
      {% if product.image %}
        <img src="{{ product.image | relative_url }}" alt="{{ product.title }}">
      {% else %}
        <div class="card-photo-placeholder">Photo coming soon</div>
      {% endif %}
      <h3><a href="{{ product.url | relative_url }}">{{ product.title }}</a></h3>
      <p class="product-meta">{{ product.size }}</p>
      <span class="price-tag">TT${{ product.price_numeric }}</span>
    </div>
    {% endfor %}
  </div>
  <p style="margin-top:1.4rem;"><a class="btn btn-outline" href="{{ '/products/' | relative_url }}">See all products</a></p>
</section>

<section class="wrap">
  <h2 class="section-title">Not sure where to start?</h2>
  <p class="section-sub">Tell us what wellness concern brought you here, and we'll follow up personally on WhatsApp with a recommendation suited to you.</p>
  <a class="btn btn-whatsapp" href="{{ '/find-your-match/' | relative_url }}">Find your match</a>
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
      <h3>1. Message us</h3>
      <p>Send a WhatsApp message to {{ site.business.phone_display }} with the product or concern you're asking about.</p>
    </div>
    <div class="card">
      <h3>2. Confirm your order</h3>
      <p>We'll confirm product, price, and pickup details with you directly over WhatsApp.</p>
    </div>
    <div class="card">
      <h3>3. Pickup or TTPost</h3>
      <p>Collect by pickup, or ask about TTPost delivery if pickup isn't possible for you.</p>
    </div>
  </div>
</section>
