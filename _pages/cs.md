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
        {% for post in category.last %}
          {% include archive-single.html type=entries_layout %}
        {% endfor %}
  {% endif %}
{% endfor %}

