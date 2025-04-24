---
layout: default
title: Artisan
description: Explore our collection of creative fantasy
permalink: /artisan
---

# Artisan Bread Collection

Traditional techniques, modern methods, and the stories behind great loaves

<div class="my-5"></div>

<div class="row g-4">
  {% assign artisan_posts = site.categories.Artisan %}
  {% if artisan_posts.size > 0 %}
    {% for post in artisan_posts %}
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
        <h4>No artisan posts yet!</h4>
        <p class="mb-0">Check back soon for our artisan bread recipes and stories.</p>
      </div>
    </div>
  {% endif %}
</div>

{% if artisan_posts.size > 6 %}
<div class="text-center mt-5">
  <button class="btn btn-primary px-4 py-2" id="loadMore">
    Load More Recipes <i class="fas fa-arrow-down ms-2"></i>
  </button>
</div>
{% endif %}

<div class="my-5"></div>

## Want to dive deeper?

Rise Every Week With Recipes, Tips & Stories Worth Savoring.

<div class="row align-items-center mt-4">
  <div class="col-lg-6 mb-4 mb-lg-0">
    <form>
      <div class="input-group">
        <input type="email" class="form-control" placeholder="Your email address">
        <button class="btn btn-primary" type="submit">Subscribe</button>
      </div>
      <small class="text-muted">We'll never share your email. Unsubscribe anytime.</small>
    </form>
  </div>
  <div class="col-lg-6">
    <img src="/assets/images/artisan-baker.jpg" 
         alt="Artisan baker at work" 
         class="img-fluid rounded-3 shadow" 
         loading="lazy">
  </div>
</div>

<style>
/* Ensure consistent styling with the rest of the site */
.hero-section {
  background: linear-gradient(rgba(58, 74, 79, 0.85), rgba(58, 74, 79, 0.85)), 
              url('/assets/images/hero-bg.jpg') center/cover no-repeat;
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