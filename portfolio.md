---
layout: default
title: Our Work | Automation Case Studies & Success Stories
description: Real-world automation projects that transformed operations, saved time, and delivered measurable business impact.
permalink: /portfolio/
---

<div class="max-w-6xl mx-auto px-4 py-16">
  <!-- Hero -->
  <div class="text-center mb-16">
    <a href="/" class="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Back to Home
    </a>
    
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
      Real results from real businesses. See how we've helped companies automate, save time, and scale.
    </p>
    
    <!-- Results Counter -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
      <div class="bg-gradient-to-b from-teal-50 to-white p-6 rounded-2xl">
        <div class="text-3xl font-bold text-teal-600">50+</div>
        <div class="text-sm text-gray-600">Processes Automated</div>
      </div>
      <div class="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl">
        <div class="text-3xl font-bold text-blue-600">1,200+</div>
        <div class="text-sm text-gray-600">Hours Saved Monthly</div>
      </div>
      <div class="bg-gradient-to-b from-orange-50 to-white p-6 rounded-2xl">
        <div class="text-3xl font-bold text-orange-600">100%</div>
        <div class="text-sm text-gray-600">Error Reduction</div>
      </div>
      <div class="bg-gradient-to-b from-purple-50 to-white p-6 rounded-2xl">
        <div class="text-3xl font-bold text-purple-600">10+</div>
        <div class="text-sm text-gray-600">Enterprise Clients</div>
      </div>
    </div>
    
    <!-- Filter Buttons -->
    <div class="flex flex-wrap gap-3 justify-center" id="filter-group">
      <button class="filter-btn active px-6 py-3 rounded-full bg-teal-600 text-white text-sm font-bold shadow-md transition-all" data-filter="all">
        All Stories
      </button>
      <button class="filter-btn px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Finance">
        Finance
      </button>
      <button class="filter-btn px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Contact Center Operation">
        Contact Center
      </button>
      <button class="filter-btn px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Quality">
        Quality Assurance
      </button>
      <button class="filter-btn px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="Reporting">
        Reporting & BI
      </button>
      <button class="filter-btn px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-600 text-sm font-bold hover:border-teal-600 hover:text-teal-600 transition-all" data-filter="AWS">
        Cloud Solutions
      </button>
    </div>
  </div>

  <!-- Projects Grid - Story Cards -->
  <div class="space-y-16 mb-20" id="projects-grid">
    {% for project in site.data.projects %}
    <!-- Story Card -->
    <div class="project-card bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
         data-category="{{ project.categories | join: ',' }}">
      
      <!-- Story Header with Category -->
      <div class="relative h-48 bg-gradient-to-r from-teal-600 to-blue-600 flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
        <div class="relative z-10 text-center">
          <div class="inline-flex gap-2 mb-3">
            {% for cat in project.categories %}
            <span class="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
              {{ cat }}
            </span>
            {% endfor %}
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white px-4">{{ project.title }}</h2>
        </div>
      </div>
      
      <!-- Story Body -->
      <div class="p-8 md:p-10">
        <!-- Quick Impact Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {% for result in project.results %}
          <div class="text-center p-4 bg-gray-50 rounded-xl">
            <div class="text-2xl font-bold text-teal-600">{{ result.value }}</div>
            <div class="text-xs text-gray-600">{{ result.label }}</div>
          </div>
          {% endfor %}
        </div>
        
        <!-- Story Narrative -->
        <div class="grid md:grid-cols-2 gap-10 mb-10">
          <!-- The Challenge -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">The Challenge</h3>
            </div>
            <p class="text-gray-700 leading-relaxed pl-13">{{ project.challenge }}</p>
          </div>
          
          <!-- The Solution -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">The Solution</h3>
            </div>
            <p class="text-gray-700 leading-relaxed pl-13">{{ project.solution }}</p>
          </div>
        </div>
        
        <!-- Key Results Highlight -->
        <div class="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-8 border border-teal-100">
          <h4 class="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg class="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z M10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
            </svg>
            Measurable Impact
          </h4>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            {% for result in project.results %}
            <div class="text-center">
              <div class="text-3xl font-black text-teal-600">{{ result.value }}</div>
              <div class="text-sm font-medium text-gray-700">{{ result.label }}</div>
            </div>
            {% endfor %}
            <div class="text-center">
              <div class="text-3xl font-black text-teal-600">{{ project.year }}</div>
              <div class="text-sm font-medium text-gray-700">Year</div>
            </div>
          </div>
        </div>
        
        <!-- Technologies Used -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span class="text-sm font-medium text-gray-500 mr-2">Technologies:</span>
          {% if project.title contains "Sales Email" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">RPA</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Excel</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Automate</span>
          {% elsif project.title contains "Master Data" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Query</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Excel</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">ETL</span>
          {% elsif project.title contains "Zalo" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AWS</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Chatbot</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Cloud</span>
          {% elsif project.title contains "eLeave" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Apps</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">SharePoint</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Automate</span>
          {% elsif project.title contains "Quality" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Apps</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power BI</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">SharePoint</span>
          {% elsif project.title contains "Case Management" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Apps</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Dataverse</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Automate</span>
          {% elsif project.title contains "Detractor" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Teams Bot</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Automate</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CRM Integration</span>
          {% elsif project.title contains "callback" %}
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Teams Bot</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Power Automate</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">SharePoint</span>
          {% endif %}
        </div>
        
        <!-- CTA -->
        <div class="flex items-center justify-between pt-6 border-t border-gray-200">
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Delivered {{ project.year }}
          </div>
          <a href="/contact/?project={{ project.title | slugify }}" class="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Discuss Similar Project
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <!-- Final CTA -->
  <div class="relative bg-gray-900 rounded-3xl p-12 text-center text-white overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
    
    <div class="relative z-10 max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
      <p class="text-xl text-gray-300 mb-10">
        Let's discuss how we can help you automate manual work, reduce errors, and save time.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact/" class="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 transition shadow-xl">
          Schedule Free Consultation
        </a>
        <a href="/services/" class="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition">
          Explore All Services
        </a>
      </div>
      
      <p class="mt-8 text-sm text-gray-400">
        Typical response time: within 24 hours
      </p>
    </div>
  </div>
</div>

<!-- Add this JavaScript for filtering -->
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
        b.classList.add('bg-white', 'text-gray-600', 'border-2', 'border-gray-200');
      });
      btn.classList.add('active', 'bg-teal-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-gray-600', 'border-2', 'border-gray-200');

      // Filter Cards with animation
      cards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Initialize first button as active
  document.querySelector('.filter-btn.active').click();
});
</script>

<style>
.project-card {
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 1;
  transform: translateY(0);
}

.filter-btn {
  transition: all 0.2s ease;
}

/* Gradient animations */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-animate {
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}
</style>