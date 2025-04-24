document.addEventListener('DOMContentLoaded', () => {
  // Initialize Masonry
  const initMasonry = () => {
    const grid = document.querySelector('.masonry-grid');
    if (grid) {
      imagesLoaded(grid, () => {
        new Masonry(grid, {
          itemSelector: '.masonry-item',
          columnWidth: '.masonry-item',
          percentPosition: true,
          gutter: 20
        });
      });
    }
  };
  initMasonry();

  // Like Button Functionality
  document.addEventListener('click', (e) => {
    const likeBtn = e.target.closest('.btn-like');
    if (likeBtn) {
      e.preventDefault();
      const postId = likeBtn.dataset.postId;
      const likeCount = likeBtn.querySelector('.like-count');
      const storageKey = `like_${postId}`;
      
      const isLiked = localStorage.getItem(storageKey) === 'true';
      localStorage.setItem(storageKey, !isLiked);
      
      likeBtn.classList.toggle('liked', !isLiked);
      likeBtn.querySelector('.fa-heart').classList.toggle('fas', !isLiked);
      likeBtn.querySelector('.fa-heart').classList.toggle('far', isLiked);
      
      likeCount.textContent = isLiked 
        ? parseInt(likeCount.textContent) - 1 
        : parseInt(likeCount.textContent) + 1;
      
      // Optional: Send data to analytics
      if (!isLiked) {
        console.log(`Liked post ${postId}`);
      }
    }
  });

  // Initialize like buttons
  document.querySelectorAll('.btn-like').forEach(btn => {
    const postId = btn.dataset.postId;
    if (localStorage.getItem(`like_${postId}`) === 'true') {
      btn.classList.add('liked');
      btn.querySelector('.fa-heart').classList.add('fas');
      btn.querySelector('.fa-heart').classList.remove('far');
    }
  });

  // Save Recipe Functionality
  document.addEventListener('click', (e) => {
    const saveBtn = e.target.closest('.save-recipe button');
    if (saveBtn) {
      e.preventDefault();
      const postId = window.location.pathname;
      const storageKey = `saved_${postId}`;
      
      const isSaved = localStorage.getItem(storageKey) === 'true';
      localStorage.setItem(storageKey, !isSaved);
      
      saveBtn.classList.toggle('active', !isSaved);
      saveBtn.querySelector('.fa-bookmark').classList.toggle('fas', !isSaved);
      saveBtn.querySelector('.fa-bookmark').classList.toggle('far', isSaved);
      
      saveBtn.innerHTML = isSaved 
        ? '<i class="far fa-bookmark me-2"></i>Save Recipe'
        : '<i class="fas fa-bookmark me-2"></i>Saved';
      
      // Show toast notification
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.textContent = isSaved ? 'Recipe removed from saved' : 'Recipe saved!';
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

  // Lazy load images
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('loading');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
});