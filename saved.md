---
layout: default
title: Your Saved Recipes
description: Your collection of saved bread recipes and articles
permalink: /saved
---

# Your Recipe Collection

All your saved recipes in one place

## Saved Recipes

<div class="d-flex justify-content-between align-items-center mb-5">
  <h2>Saved Recipes</h2>
  <button class="btn btn-outline-danger" id="clearSaved">
    <i class="far fa-trash-alt me-2"></i>Clear All
  </button>
</div>

<div class="row g-4" id="savedRecipesContainer">
  <!-- Recipes will be loaded dynamically via JavaScript -->
  <div class="col-12 text-center py-5" id="noRecipesMessage">
    <div class="alert alert-info">
      <h4>No saved recipes yet!</h4>
      <p class="mb-3">When you save recipes, they'll appear here for easy access.</p>
      <a href="/artisan" class="btn btn-primary">Browse Artisan Recipes</a>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Load saved recipes
  function loadSavedRecipes() {
    const container = document.getElementById('savedRecipesContainer');
    const noRecipesMsg = document.getElementById('noRecipesMessage');
    const savedPosts = [];
    
    // Get all saved posts from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('saved_') && localStorage.getItem(key) === 'true') {
        const postPath = key.replace('saved_', '');
        savedPosts.push(postPath);
      }
    }
    
    if (savedPosts.length === 0) {
      noRecipesMsg.style.display = 'block';
      return;
    }
    
    noRecipesMsg.style.display = 'none';
    container.innerHTML = '';
    
    // Fetch each saved post (in a real site, you'd use an API or pre-render)
    savedPosts.forEach(postPath => {
      fetch(postPath)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const title = doc.querySelector('title').textContent;
          const image = doc.querySelector('meta[property="og:image"]')?.content || '/assets/images/default-bread.jpg';
          const description = doc.querySelector('meta[name="description"]')?.content || 'No description available';
          
          const card = document.createElement('div');
          card.className = 'col-md-6 col-lg-4';
          card.innerHTML = `
            <div class="card h-100">
              <img src="${image}" class="card-img-top" alt="${title}" loading="lazy">
              <div class="card-body">
                <h3 class="h5">${title}</h3>
                <p class="card-text text-muted">${description}</p>
              </div>
              <div class="card-footer bg-transparent d-flex justify-content-between">
                <a href="${postPath}" class="btn btn-sm btn-outline-primary">View Recipe</a>
                <button class="btn btn-sm btn-outline-danger unsave-btn" data-path="${postPath}">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          `;
          container.appendChild(card);
        })
        .catch(error => {
          console.error('Error loading saved post:', error);
        });
    });
  }
  
  // Clear all saved recipes
  document.getElementById('clearSaved').addEventListener('click', function() {
    if (confirm('Are you sure you want to remove all saved recipes?')) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('saved_')) {
          localStorage.removeItem(key);
        }
      }
      loadSavedRecipes();
      
      // Show confirmation
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.textContent = 'All saved recipes have been removed';
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
          setTimeout(() => toast.remove(), 300);
        }, 2000);
      }, 10);
    }
  });
  
  // Handle individual recipe unsaving
  document.addEventListener('click', function(e) {
    if (e.target.closest('.unsave-btn')) {
      const btn = e.target.closest('.unsave-btn');
      const postPath = btn.dataset.path;
      localStorage.removeItem(`saved_${postPath}`);
      
      // Remove the card
      btn.closest('.col-md-6').remove();
      
      // Show toast
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.textContent = 'Recipe removed from saved';
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
          setTimeout(() => toast.remove(), 300);
        }, 2000);
      }, 10);
      
      // Show no recipes message if empty
      if (document.querySelectorAll('#savedRecipesContainer .col-md-6').length === 0) {
        document.getElementById('noRecipesMessage').style.display = 'block';
      }
    }
  });
  
  // Initial load
  loadSavedRecipes();
});
</script>

<style>
.toast-notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.toast-notification.show {
  opacity: 1;
}

.unsave-btn {
  transition: all 0.2s ease;
}

.unsave-btn:hover {
  color: #dc3545 !important;
  border-color: #dc3545 !important;
}

/* Hero section styling */
.hero-section {
  background: linear-gradient(rgba(58, 74, 79, 0.85), rgba(58, 74, 79, 0.85)), 
              url('/assets/images/hero-bg.jpg') center/cover no-repeat;
  padding: 6rem 0;
  color: white;
  text-align: center;
}

.hero-section h1 {
  font-size: 2.5rem;
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
    font-size: 2rem;
  }
}
</style>