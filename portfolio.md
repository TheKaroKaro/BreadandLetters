---
layout: default
title: My Automation Projects | Power Platform Solutions
description: Real-world Power Platform projects I've built to solve business problems.
permalink: /portfolio/
---

<div class="max-w-6xl mx-auto px-4 py-16">
  <div class="text-center mb-16">
    <a href="/" class="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Back to Home
    </a>
    
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Automation Projects</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Practical solutions built to transform operations, improve efficiency, and drive data-led decisions.
    </p>
    
    <div class="flex flex-wrap gap-3 justify-center mt-10" id="filter-group">
      <button class="filter-btn active px-6 py-2 rounded-full bg-teal-600 text-white text-sm font-bold shadow-md transition-all" data-filter="all">
        All Projects
      </button>
      <button class="filter-btn px-6 py-2 rounded-full bg-white text-gray-600 border border-gray-200 text-sm font-bold transition-all" data-filter="Finance">
        Finance
      </button>
      <button class="filter-btn px-6 py-2 rounded-full bg-white text-gray-600 border border-gray-200 text-sm font-bold transition-all" data-filter="Contact Center Operation">
        Operations
      </button>
    </div>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="project-grid">
    {% for project in site.data.projects %}
      {% include project-card.html %}
    {% endfor %}
  </div>

  <div class="mt-20 text-center">
    <h2 class="text-2xl font-bold mb-4">Have a similar business challenge?</h2>
    <a href="/contact/" class="inline-block px-10 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 transition-all shadow-xl">
      Start a Project Discussion
    </a>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      buttons.forEach(b => {
        b.classList.remove('active', 'bg-teal-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
      });
      btn.classList.add('active', 'bg-teal-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');

      cards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
</script>