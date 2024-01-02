---
layout: base
permalink: /newsletter
title: Newsletter
---

<section class="section">
  <div class="columns">
    <div class="column is-8 is-offset-2">
      {% for post in site.posts limit: 15 %}
      <div class="box">
        <a href="{{ post.url | relative_url }}">
          <p class="title is-5 aocam-blue">{{ post.title }} 
            <span class="tag is-white is-pulled-right">
              <small class="has-text-grey">{{ post.date | date: '%B %d, %Y'}}
              </small>
            </span>
          </p>
          <p class="subtitle has-text-grey">
            <small>{{ post.subtitle }}</small>
          </p>
        </a>
      </div>
      {% endfor %}
     </div>
   </div>
</section>


