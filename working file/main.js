document.addEventListener('DOMContentLoaded', () => {
  // Masonry Layout
  const initMasonry = () => {
    const grid = document.querySelector('.masonry-grid');
    if (grid) {
      imagesLoaded(grid, () => {
        new Masonry(grid, {
          itemSelector: '.masonry-item',
          columnWidth: '.masonry-item',
          percentPosition: true
        });
      });
    }
  };
  initMasonry();

  // Like Button Functionality
  document.addEventListener('click', (e) => {
    const likeBtn = e.target.closest('.btn-like');
    if (likeBtn) {
      const postId = likeBtn.dataset.postId;
      const likeCount = likeBtn.querySelector('.like-count');
      const storageKey = `like_${postId}`;
      
      const isLiked = localStorage.getItem(storageKey) === 'true';
      localStorage.setItem(storageKey, !isLiked);
      
      likeBtn.classList.toggle('liked', !isLiked);
      likeCount.textContent = isLiked 
        ? parseInt(likeCount.textContent) - 1 
        : parseInt(likeCount.textContent) + 1;
    }
  });

  // Initialize like buttons
  document.querySelectorAll('.btn-like').forEach(btn => {
    if (localStorage.getItem(`like_${btn.dataset.postId}`) === 'true') {
      btn.classList.add('liked');
    }
  });
});