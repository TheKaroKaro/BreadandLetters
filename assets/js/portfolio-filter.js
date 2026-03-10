// assets/js/portfolio-filter.js
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const projectsGrid = document.getElementById('projects-grid');

  // Add smooth scroll to top when filtering
  const filterAndScroll = (filter) => {
    // Store current scroll position
    const scrollPos = window.scrollY;
    
    // Update URL with filter (optional)
    const url = new URL(window.location);
    if (filter === 'all') {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', filter);
    }
    window.history.replaceState({}, '', url);
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update Button UI with animation
      buttons.forEach(b => {
        b.classList.remove('active', 'bg-teal-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-gray-600', 'border-2', 'border-gray-200');
        b.style.transform = 'scale(1)';
      });
      
      btn.classList.add('active', 'bg-teal-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-gray-600', 'border-2', 'border-gray-200');
      btn.style.transform = 'scale(1.05)';
      setTimeout(() => btn.style.transform = 'scale(1)', 200);

      // Filter Cards with staggered animation
      let visibleCount = 0;
      cards.forEach((card, index) => {
        const categories = card.getAttribute('data-category');
        
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          // Stagger the fade-in
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, index * 50);
          visibleCount++;
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });

      // Show message if no results
      const noResultsMsg = document.getElementById('no-results');
      if (visibleCount === 0) {
        if (!noResultsMsg) {
          const msg = document.createElement('div');
          msg.id = 'no-results';
          msg.className = 'text-center py-12 col-span-2';
          msg.innerHTML = `
            <div class="text-6xl mb-4">🔍</div>
            <h3 class="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
            <p class="text-gray-500">Try selecting a different category</p>
          `;
          projectsGrid.appendChild(msg);
        }
      } else if (noResultsMsg) {
        noResultsMsg.remove();
      }

      filterAndScroll(filter);
    });
  });

  // Check URL for filter parameter on load
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    const matchingButton = Array.from(buttons).find(
      btn => btn.getAttribute('data-filter') === filterParam
    );
    if (matchingButton) {
      matchingButton.click();
    }
  } else {
    // Initialize first button
    document.querySelector('.filter-btn.active')?.click();
  }

  // Add hover animations
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});