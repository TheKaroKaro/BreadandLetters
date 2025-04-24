---
layout: default
title: "Bread & Letters"
description: "Crafting Stories Like Sourdough – Slow, Rich, and Worth the Wait"
---

<section class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1>Where Warm Loaves <br>Meet Woven Words</h1>
      <p class="lead mb-4">From flour to folklore—explore bread’s rich tapestry through recipes and tales.</p>
      
      <div class="breadcrumb-nav">
        <a href="#featured" class="breadcrumb-link active">Fresh</a>
        <span class="breadcrumb-divider">/</span>
        <a href="#popular" class="breadcrumb-link">Toasty Favorites</a>
        <span class="breadcrumb-divider">/</span>
        <a href="#newsletter" class="breadcrumb-link">The Breadline</a>
      </div>
    </div>
  </div>
</section>

<div class="my-5"></div>

<section id="featured" class="py-6">
  <div class="container">
    <div class="section-header mb-5">
      <h2 class="section-title">Oven-Fresh Reads</h2>
      <p class="section-subtitle">Our latest recipes and stories</p>
    </div>
    
    <div class="row g-4">
      {% assign latest_post = site.posts.first %}
      <div class="col-lg-6">
        <div class="featured-card card h-100">
          <img src="{{ latest_post.image }}" class="card-img-top" alt="{{ latest_post.title }}" loading="lazy">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <span class="badge bg-primary">{{ latest_post.category }}</span>
              <span class="text-muted">{{ latest_post.date | date: "%b %d, %Y" }}</span>
            </div>
            <h3 class="card-title">{{ latest_post.title }}</h3>
            <p class="card-text">{{ latest_post.excerpt | strip_html | truncate: 200 }}</p>
            <a href="{{ latest_post.url }}" class="btn btn-primary mt-3">Read More</a>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <div class="row g-4">
          {% for post in site.posts limit:4 offset:1 %}
          <div class="col-md-6">
            <div class="card h-100">
              <img src="{{ post.thumbnail }}" class="card-img-top" alt="{{ post.title }}" loading="lazy">
              <div class="card-body">
                <h4 class="card-title h5">{{ post.title }}</h4>
                <small class="text-muted">{{ post.date | date: "%b %d" }}</small>
                <a href="{{ post.url }}" class="stretched-link"></a>
              </div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<div class="my-5"></div>

<section id="popular" class="py-6 mb-5">
  <div class="container">
    <div class="section-header mb-5">
      <h2 class="section-title">Toasty Favorites</h2>
      <p class="section-subtitle">Community favorites</p>
    </div>
    
    <div class="row g-4">
      {% assign popular_posts = site.posts | sort: 'likes' | reverse %}
      {% for post in popular_posts limit:3 %}
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-img-top position-relative">
            <img src="{{ post.thumbnail }}" class="img-fluid" alt="{{ post.title }}" loading="lazy">
            <div class="popular-badge position-absolute top-0 start-0 m-3">
              <i class="fas fa-heart text-danger me-1"></i>
              <span>{{ post.likes | default: 0 }}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="h5">{{ post.title }}</h3>
            <p class="text-muted small">{{ post.excerpt | strip_html | truncate: 100 }}</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="badge bg-secondary">{{ post.category }}</span>
              <a href="{{ post.url }}" class="btn btn-sm btn-outline-primary">View Recipe</a>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section id="newsletter" class="newsletter-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="newsletter-card bg-secondary text-white rounded-4">
          <div class="text-center mb-4">
            <h3 class="mb-3">Join Our Baking Community</h3>
            <p class="mb-0">Rise Every Week With Recipes, Tips & Stories Worth Savoring</p>
          </div>
          <form class="mt-4">
            <div class="input-group">
              <input type="email" class="form-control form-control-lg" placeholder="Your email address" required>
              <button class="btn btn-accent px-4" type="submit">
                Subscribe <i class="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </form>
          <small class="d-block mt-3 text-center opacity-75">
            We respect your privacy. Unsubscribe at any time.
          </small>
        </div>
      </div>
    </div>
  </div>
</section>