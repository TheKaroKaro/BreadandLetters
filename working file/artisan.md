---
layout: default
title: Artisan Recipes
description: Mastercrafted baking recipes from experts
---

<section class="artisan-header py-6" style="background: linear-gradient(rgba(179, 179, 168, 0.7), rgba(179, 179, 168, 0.7)), url('/assets/images/artisan-bg.jpg');">
  <div class="container text-center text-white">
    <h1 class="display-3 fw-bold mb-3">{{ page.title }}</h1>
    <p class="lead">{{ page.description }}</p>
    <div class="artisan-breadcrumb mt-4">
      <span class="active">All</span>
      <span>Traditional</span>
      <span>Modern</span>
      <span>Seasonal</span>
    </div>
  </div>
</section>

<main class="container-fluid px-0">
  <div class="row g-0">
    {% for post in site.categories.artisan %}
    <div class="col-lg-4 col-md-6 artisan-card">
      <div class="card border-0 rounded-0 h-100">
        <div class="card-img-container">
          <img src="{{ post.thumbnail }}" class="card-img" alt="{{ post.title }}">
          <div class="card-img-overlay d-flex flex-column justify-content-end">
            <div class="artisan-card-content">
              <span class="badge bg-light text-dark mb-2">{{ post.category }}</span>
              <h3 class="h4 text-white">{{ post.title }}</h3>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-light">{{ post.date | date: "%b %d, %Y" }}</small>
                <a href="{{ post.url }}" class="btn btn-sm btn-outline-light">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</main>