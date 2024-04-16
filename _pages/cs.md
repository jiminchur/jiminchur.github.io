---
title: "야 너도 CS공부해!!"
permalink: /cs/
layout: archive
author_profile: true
feature_row:
  - image_path: assets/images/Mimchur2.png
    title: "임시"
    excerpt: "임시"
    url: "https://jiminchur.github.io/"
    btn_label: "Read More"
    btn_class: "btn--primary"
---
곧 추가될 예정입니다.


{% assign specific_category = "CS" %}

{% for category in site.categories %}
  {% if category[0] == specific_category %}
    <section id="{{ category[0] | slugify | downcase }}" class="taxonomy__section">
      <h2 class="archive__subtitle">{{ category[0] }}</h2>
      <div class="entries-{{ entries_layout }}">
        {% for post in category.last %}
          {% include archive-single.html type=entries_layout %}
        {% endfor %}
      </div>
      <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
    </section>
  {% endif %}
{% endfor %}

