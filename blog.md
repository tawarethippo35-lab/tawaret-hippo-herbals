---
layout: default
title: "Blog"
description: "Wellness routines and traditions explained: articles on castor oil, kidney and liver flushes, colloidal silver, and traditional herbal wellness in Trinidad and Tobago."
permalink: /blog/
---

<section class="wrap">
  <h1 class="section-title">Blog</h1>
  <p class="section-sub">Traditional wellness routines, explained plainly.</p>

  {% for post in site.posts %}
  <div class="post-list-item">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description }}</p>
    <p><a href="{{ post.url | relative_url }}">Read more &rarr;</a></p>
  </div>
  {% endfor %}
</section>
