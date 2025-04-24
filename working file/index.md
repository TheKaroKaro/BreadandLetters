---
layout: default
title: "Bread & Letters"
description: "Where culinary art meets written craft - explore artisan recipes and food stories"
---

<section class="hero-section py-6" style="background: linear-gradient(rgba(179, 179, 168, 0.8), rgba(179, 179, 168, 0.8)), url('/assets/images/hero-bg.jpg');">
  <div class="container text-center">
    <div class="hero-content mx-auto" style="max-width: 800px;">
      <h1 class="display-3 fw-bold mb-4 text-white">
        Crafting Stories <br>One Loaf at a Time
      </h1>
      <div class="breadcrumb-nav mt-5">
        <a href="#featured" class="breadcrumb-link active">Fresh</a>
        <span class="breadcrumb-divider">/</span>
        <a href="#popular" class="breadcrumb-link">Popular</a>
        <span class="breadcrumb-divider">/</span>
        <a href="#categories" class="breadcrumb-link">Categories</a>
      </div>
    </div>
  </div>
</section>

<section id="featured" class="py-6">
  <div class="container-lg">
    <h2 class="section-title display-5 fw-bold mb-5 text-center">Fresh from the Oven</h2>
    
    <div class="row">
      <!-- Featured Post (Latest) -->
      {% assign latest_post = site.posts.first %}
      <div class="col-lg-6 mb-4">
        <div class="featured-card card border-0 h-100 shadow">
          <div class="card-img-top position-relative">
            <img src="{{ latest_post.image }}" class="img-fluid" alt="{{ latest_post.title }}">
            <div class="card-overlay"></div>
            <span class="badge bg-primary position-absolute top-0 end-0 m-3">New</span>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <span class="text-accent">{{ latest_post.date | date: "%b %d, %Y" }}</span>
              <span class="text-muted">{{ latest_post.category }}</span>
            </div>
            <h3 class="card-title">{{ latest_post.title }}</h3>
            <p class="card-text">{{ latest_post.excerpt | strip_html | truncate: 200 }}</p>
          </div>
          <div class="card-footer bg-transparent">
            <a href="{{ latest_post.url }}" class="btn btn-primary stretched-link">Read Recipe</a>
          </div>
        </div>
      </div>
      
      <!-- Recent Posts Grid -->
      <div class="col-lg-6">
        <div class="row g-4">
          {% for post in site.posts limit:4 offset:1 %}
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <img src="{{ post.thumbnail }}" class="card-img-top" alt="{{ post.title }}">
              <div class="card-body">
                <h4 class="h5">{{ post.title }}</h4>
                <small class="text-muted">{{ post.date | date: "%b %d" }}</small>
              </div>
              <a href="{{ post.url }}" class="stretched-link"></a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<section id="popular" class="py-6 bg-light">
  <div class="container-lg">
    <h2 class="section-title display-5 fw-bold mb-5 text-center">Most Loved Recipes</h2>
    
    <div class="row g-4">
      {% assign popular_posts = site.posts | sort: 'likes' | reverse %}
      {% for post in popular_posts limit:3 %}
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow-sm hover-card">
          <div class="card-img-top position-relative">
            <img src="{{ post.thumbnail }}" class="img-fluid" alt="{{ post.title }}">
            <div class="popular-badge position-absolute top-0 start-0 m-3">
              <i class="fas fa-heart text-danger me-1"></i>
              <span>{{ post.likes | default: 0 }}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="h5">{{ post.title }}</h3>
            <p class="text-muted small">{{ post.excerpt | strip_html | truncate: 100 }}</p>
          </div>
          <div class="card-footer bg-transparent">
            <a href="{{ post.url }}" class="btn btn-sm btn-outline-primary stretched-link">View Recipe</a>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Add newsletter section from original -->