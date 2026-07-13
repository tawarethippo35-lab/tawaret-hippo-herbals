---
layout: default
title: "Product Catalog"
description: "The full Tawaret Hippo Herbals pre-order catalog with current TT$ prices, product sizes, and WhatsApp ordering information."
permalink: /products/
---

<section class="wrap">
  <h1 class="section-title">Product Catalog</h1>
  <p class="section-sub">All products are currently available by pre-order. Prices are in TT$. Prepayment secures your order.</p>

  <div class="grid grid-3">
    {% assign sorted_products = site.products | sort: "price_numeric" %}
    {% for product in sorted_products %}
    <div class="card">
      {% if product.image %}
        <img src="{{ product.image | relative_url }}" alt="{{ product.title }}">
      {% else %}
        <div class="card-photo-placeholder">Photo coming soon</div>
      {% endif %}
      <h3><a href="{{ product.url | relative_url }}">{{ product.title }}</a></h3>
      <p class="product-meta"><strong>{{ product.availability }}</strong> &middot; {{ product.size }} &middot; {{ product.product_type }}</p>
      {% include product-price.html product=product %}
    </div>
    {% endfor %}
  </div>

  <p style="margin-top:2rem;">{% include whatsapp-cta.html label="Message us on WhatsApp to pre-order" %}</p>
</section>
