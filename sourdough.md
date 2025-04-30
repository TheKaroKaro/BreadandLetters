---
layout: default
title: Sourdough
description: Explore our collection of creative fantasy
permalink: /sourdough
---

<section id="cuisine">
#Cuisine

<div class="my-5"></div>
<div class="row g-4">
  {% assign Sourdough_posts = site.categories.Sourdough | where: "subcategory", "Cuisine" %}
  {% if Sourdough_posts.size > 0 %}
    {% for post in Sourdough_posts %}
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <img src="{{ post.thumbnail | default: site.baseurl | append: '/assets/images/default-bread.jpg' }}" 
             class="card-img-top" 
             alt="{{ post.title }}" 
             loading="lazy">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-2">
            <span class="badge bg-secondary">{{ post.category }}</span>
            <small class="text-muted">{{ post.date | date: "%b %d, %Y" }}</small>
          </div>
          <h3 class="h5">{{ post.title }}</h3>
          <p class="card-text text-muted">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        </div>
        <div class="card-footer bg-transparent border-top-0">
          <a href="{{ post.url | relative_url }}" class="btn btn-sm btn-outline-primary stretched-link">Read More</a>
        </div>
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="col-12 text-center py-5">
      <div class="alert alert-info">
        <h4>No Sourdough Cuisine posts found!</h4>
        <p class="mb-0">Found {{ site.categories.Sourdough.size }} Sourdough posts total.</p>
        <p class="mb-0">Subcategory value used: 'Cuisine'</p>
      </div>
    </div>
  {% endif %}
</div>

{% if Sourdough_posts.size > 6 %}
<div class="text-center mt-5">
  <button class="btn btn-primary px-4 py-2" id="loadMore">
    Load More Recipes <i class="fas fa-arrow-down ms-2"></i>
  </button>
</div>
{% endif %}

<div class="my-5"></div>
</section>

<section id="ethno-cultural">
#Ethno-cultural

<div class="my-5"></div>
<div class="row g-4">
  {% assign Sourdough_posts = site.categories.Sourdough | where: "subcategory", "Ethno-cultural" %}
  {% if Sourdough_posts.size > 0 %}
    {% for post in Sourdough_posts %}
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <img src="{{ post.thumbnail | default: '/assets/images/default-bread.jpg' }}" 
             class="card-img-top" 
             alt="{{ post.title }}" 
             loading="lazy">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-2">
            <span class="badge bg-secondary">{{ post.category }}</span>
            <small class="text-muted">{{ post.date | date: "%b %d, %Y" }}</small>
          </div>
          <h3 class="h5">{{ post.title }}</h3>
          <p class="card-text text-muted">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        </div>
        <div class="card-footer bg-transparent border-top-0">
          <a href="{{ post.url }}" class="btn btn-sm btn-outline-primary stretched-link">Read More</a>
        </div>
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="col-12 text-center py-5">
      <div class="alert alert-info">
        <h4>No Sourdough Ethno-cultural posts found!</h4>
        <p class="mb-0">Found {{ site.categories.Sourdough.size }} Sourdough posts total.</p>
        <p class="mb-0">Subcategory value used: 'Ethno-cultural'</p>
      </div>
    </div>
  {% endif %}
</div>

{% if Sourdough_posts.size > 6 %}
<div class="text-center mt-5">
  <button class="btn btn-primary px-4 py-2" id="loadMore">
    Load More Recipes <i class="fas fa-arrow-down ms-2"></i>
  </button>
</div>
{% endif %}

<div class="my-5"></div>
</section>

<section id="linguistic">
#Linguistic

<div class="my-5"></div>
<div class="row g-4">
  {% assign Sourdough_posts = site.categories.Sourdough | where: "subcategory", "Linguistic" %}
  {% if Sourdough_posts.size > 0 %}
    {% for post in Sourdough_posts %}
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <img src="{{ post.thumbnail | default: '/assets/images/default-bread.jpg' }}" 
             class="card-img-top" 
             alt="{{ post.title }}" 
             loading="lazy">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-2">
            <span class="badge bg-secondary">{{ post.category }}</span>
            <small class="text-muted">{{ post.date | date: "%b %d, %Y" }}</small>
          </div>
          <h3 class="h5">{{ post.title }}</h3>
          <p class="card-text text-muted">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        </div>
        <div class="card-footer bg-transparent border-top-0">
          <a href="{{ post.url }}" class="btn btn-sm btn-outline-primary stretched-link">Read More</a>
        </div>
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="col-12 text-center py-5">
      <div class="alert alert-info">
        <h4>No Sourdough Linguistic posts found!</h4>
        <p class="mb-0">Found {{ site.categories.Sourdough.size }} Sourdough posts total.</p>
        <p class="mb-0">Subcategory value used: 'Linguistic'</p>
      </div>
    </div>
  {% endif %}
</div>

{% if Sourdough_posts.size > 6 %}
<div class="text-center mt-5">
  <button class="btn btn-primary px-4 py-2" id="loadMore">
    Load More Recipes <i class="fas fa-arrow-down ms-2"></i>
  </button>
</div>
{% endif %}

<div class="my-5"></div>
</section>

<section id="technological">
#Technological

<div class="my-5"></div>
<div class="row g-4">
  {% assign Sourdough_posts = site.categories.Sourdough | where: "subcategory", "Technological" %}
  {% if Sourdough_posts.size > 0 %}
    {% for post in Sourdough_posts %}
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <img src="{{ post.thumbnail | default: '/assets/images/default-bread.jpg' }}" 
             class="card-img-top" 
             alt="{{ post.title }}" 
             loading="lazy">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-2">
            <span class="badge bg-secondary">{{ post.category }}</span>
            <small class="text-muted">{{ post.date | date: "%b %d, %Y" }}</small>
          </div>
          <h3 class="h5">{{ post.title }}</h3>
          <p class="card-text text-muted">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        </div>
        <div class="card-footer bg-transparent border-top-0">
          <a href="{{ post.url }}" class="btn btn-sm btn-outline-primary stretched-link">Read More</a>
        </div>
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="col-12 text-center py-5">
      <div class="alert alert-info">
        <h4>No Sourdough Technological posts found!</h4>
        <p class="mb-0">Found {{ site.categories.Sourdough.size }} Sourdough posts total.</p>
        <p class="mb-0">Subcategory value used: 'Technological'</p>
      </div>
    </div>
  {% endif %}
</div>

{% if Sourdough_posts.size > 6 %}
<div class="text-center mt-5">
  <button class="btn btn-primary px-4 py-2" id="loadMore">
    Load More Recipes <i class="fas fa-arrow-down ms-2"></i>
  </button>
</div>
{% endif %}

<div class="my-5"></div>
</section>


<section id="agricultural">
#Agricultural

<div class="my-5"></div>
<div class="row g-4">
  {% assign Sourdough_posts = site.categories.Sourdough | where: "subcategory", "Agricultural" %}
  {% if Sourdough_posts.size > 0 %}
    {% for post in Sourdough_posts %}
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <img src="{{ post.thumbnail | default: '/assets/images/default-bread.jpg' }}" 
             class="card-img-top" 
             alt="{{ post.title }}" 
             loading="lazy">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-2">
            <span class="badge bg-secondary">{{ post.category }}</span>
            <small class="text-muted">{{ post.date | date: "%b %d, %Y" }}</small>
          </div>
          <h3 class="h5">{{ post.title }}</h3>
          <p class="card-text text-muted">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        </div>
        <div class="card-footer bg-transparent border-top-0">
          <a href="{{ post.url }}" class="btn btn-sm btn-outline-primary stretched-link">Read More</a>
        </div>
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="col-12 text-center py-5">
      <div class="alert alert-info">
        <h4>No Sourdough Agricultural posts found!</h4>
        <p class="mb-0">Found {{ site.categories.Sourdough.size }} Sourdough posts total.</p>
        <p class="mb-0">Subcategory value used: 'Agricultural'</p>
      </div>
    </div>
  {% endif %}
</div>

{% if Sourdough_posts.size > 6 %}
<div class="text-center mt-5">
  <button class="btn btn-primary px-4 py-2" id="loadMore">
    Load More Recipes <i class="fas fa-arrow-down ms-2"></i>
  </button>
</div>
{% endif %}

<div class="my-5"></div>
</section>

<style>
/* Ensure consistent styling with the rest of the site */
.hero-section {
  background: linear-gradient(rgba(58, 74, 79, 0.85), rgba(58, 74, 79, 0.85)), 
              url('{{ site.baseurl }}/assets/images/hero-bg.jpg') center/cover no-repeat;
  padding: 6rem 0;
  color: white;
  text-align: center;
}


.hero-section h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }
  
  .hero-section h1 {
    font-size: 2.25rem;
  }
}
</style>