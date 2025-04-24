---
layout: default
title: About Us
description: Learn about our passion for artisan baking and food storytelling
image: /assets/images/about-hero.jpg
---

<section class="about-hero py-6" style="background: linear-gradient(rgba(100, 182, 172, 0.8), rgba(100, 182, 172, 0.8)), url('{{ page.image }}');">
  <div class="container text-center text-white">
    <h1 class="display-3 fw-bold mb-3">{{ page.title }}</h1>
    <p class="lead">{{ page.description }}</p>
  </div>
</section>

<section class="py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <img src="/assets/images/about-story.jpg" alt="Our story" class="img-fluid rounded-4 shadow">
      </div>
      <div class="col-lg-6">
        <h2 class="mb-4">Our Story</h2>
        <p>Founded in 2018 by {{ site.author.name }}, we started as a small blog documenting sourdough experiments...</p>
      </div>
    </div>
  </div>
</section>