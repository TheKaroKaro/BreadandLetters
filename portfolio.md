---
layout: default
title: My Automation Projects | Power Platform Solutions
permalink: /portfolio/
---

<div class="max-w-7xl mx-auto px-4 py-16">
  <div class="text-center mb-16">
    <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">Automation Portfolio</h1>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
      Real-world solutions built to bridge the gap between operations and technology.
    </p>
    
    <div class="flex flex-wrap gap-2 justify-center" id="filter-group">
      <button class="filter-btn active px-5 py-2 rounded-lg bg-teal-600 text-white font-bold text-sm shadow-lg transition-all" data-filter="all">All</button>
      <button class="filter-btn px-5 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm hover:border-teal-400 transition-all" data-filter="Finance">Finance</button>
      <button class="filter-btn px-5 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm hover:border-teal-400 transition-all" data-filter="Contact Center Operation">Operations</button>
    </div>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="project-grid">
    {% for project in site.data.projects %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // UI Update
      buttons.forEach(b => {
        b.classList.remove('bg-teal-600', 'text-white', 'shadow-lg');
        b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
      });
      btn.classList.add('bg-teal-600', 'text-white', 'shadow-lg');
      btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');

      // Filter logic
      cards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
</script>