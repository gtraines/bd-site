---
title: Basket Devil
permalink: /how-it-works/
layout: default-intro
lead: How it works
content_wide: true
content_focus: false
banner_cta: true
gridless: true
---

<div class="usa-grid">
  <section class="usa-section">
    <div class="usa-section-bottom">
      <h3>We’ve worked with more than 50 offices and agencies on more than 200 engagements.</h3>
      <p>All our projects support agencies in transforming how they deliver digital services and technology products. Here are a few of the projects we’ve worked on.</p>
    </div>
    <div class="usa-flex usa-flex-wrap">
      {% assign features_list = site | find_collection: 'how-it-works' | weighted_sort: 'project_weight', 'title' %}
      {% for feature in features_list %}
        {% include card.html
         image_src=feature.image
         image_alt=feature.image_accessibility
         image_icon=feature.image_icon
         tagline=feature.title
         description=feature.excerpt
         link=feature.permalink
        %}
      {% endfor %}
    </div>
  </section>
</div>

