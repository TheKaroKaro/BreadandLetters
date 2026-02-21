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
      <button class="filter-btn px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Contact Center Operation">
        Contact Center Operation
      </button>
      <button class="filter-btn px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Quality">
        Quality
      </button>
      <button class="filter-btn px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Reporting">
        Reporting
      </button>
      <button class="filter-btn px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Finance">
        Finance
      </button>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-8 mb-20" id="projects-grid">
    {% for project in site.data.projects %}
    <div class="project-card border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform" 
         data-category="{{ project.categories | join: ',' }}">
      <div class="p-8">
        <div class="flex flex-wrap gap-2 mb-4">
          {% for cat in project.categories %}
          <span class="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-teal-50 text-teal-700 border border-teal-100">
            {{ cat }}
          </span>
          {% endfor %}
        </div>
        
        <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ project.title }}</h3>
        <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>
        
        <div class="space-y-3 mb-8">
          <div class="flex gap-3">
            <span class="text-red-500 font-bold text-sm">Challenge:</span>
            <span class="text-sm text-gray-700">{{ project.challenge }}</span>
          </div>
          <div class="flex gap-3">
            <span class="text-teal-600 font-bold text-sm">Solution:</span>
            <span class="text-sm text-gray-700">{{ project.solution }}</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-teal-600 to-blue-700 rounded-xl p-5 text-white flex items-center justify-between shadow-lg">
          <div>
            <div class="text-xs opacity-80 uppercase font-bold tracking-tight">{{ project.result_label }}</div>
            <div class="text-3xl font-black">{{ project.result_value }}</div>
          </div>
          <div class="text-right">
            <div class="text-[10px] opacity-70 mb-1">Status</div>
            <div class="text-xs font-bold bg-white/20 px-2 py-1 rounded">Live / Production</div>
          </div>
        </div>
        
        <div class="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <div class="text-sm text-gray-400 font-medium">
            <i class="far fa-calendar-alt mr-1"></i> {{ project.year }}
          </div>
          <a href="/contact/" class="text-teal-600 hover:text-teal-800 font-bold text-sm flex items-center gap-1 group">
            Discuss Similar Project
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="bg-gray-900 rounded-3xl p-12 text-center text-white overflow-hidden relative">
    <div class="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
    <h2 class="text-3xl font-bold mb-6 relative z-10">Have a Business Challenge?</h2>
    <p class="text-xl mb-8 text-gray-400 max-w-2xl mx-auto relative z-10">
      I can help you automate workflows, build custom Power Apps, or visualize your data for better decision making.
    </p>
    <a href="/contact/" class="inline-block px-10 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 transition-all shadow-xl hover:shadow-teal-600/20 relative z-10">
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

      // Update Button UI
      buttons.forEach(b => {
        b.classList.remove('active', 'bg-teal-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
      });
      btn.classList.add('active', 'bg-teal-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');

      // Filter Cards
      cards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
});
</script>

<style>
  .project-card { transition: opacity 0.3s ease, transform 0.3s ease; }
</style>