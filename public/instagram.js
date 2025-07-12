// Desktop Instagram functionality

// Post interaction handlers
function initializePostInteractions() {
  // Like button interactions
  document.querySelectorAll('.action-btn').forEach(btn => {
    if (btn.textContent.includes('❤️')) {
      btn.addEventListener('click', function() {
        if (this.classList.contains('liked')) {
          this.classList.remove('liked');
          updateLikesCount(this, -1);
        } else {
          this.classList.add('liked');
          updateLikesCount(this, 1);
          // Add heart animation
          createHeartAnimation(this);
        }
      });
    }
  });

  // Follow button interactions
  document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.textContent === 'Follow') {
        this.textContent = 'Following';
        this.style.color = '#8e8e8e';
      } else {
        this.textContent = 'Follow';
        this.style.color = '#0095f6';
      }
    });
  });
}

// Update likes count
function updateLikesCount(likeBtn, change) {
  const post = likeBtn.closest('.post');
  const likesElement = post.querySelector('.likes-count');
  const currentCount = parseInt(likesElement.textContent.match(/\d+/)[0]);
  const newCount = currentCount + change;
  likesElement.textContent = `${newCount} like${newCount !== 1 ? 's' : ''}`;
}

// Create heart animation when liking
function createHeartAnimation(element) {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.cssText = `
    position: absolute;
    font-size: 20px;
    color: #ed4956;
    pointer-events: none;
    z-index: 1000;
    animation: heartFloat 1s ease-out forwards;
  `;
  
  const rect = element.getBoundingClientRect();
  heart.style.left = rect.left + 'px';
  heart.style.top = rect.top + 'px';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 1000);
}

// Add CSS for heart animation
const style = document.createElement('style');
style.textContent = `
  @keyframes heartFloat {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px) scale(1.5);
    }
  }
`;
document.head.appendChild(style);

// Story interactions
function initializeStoryInteractions() {
  document.querySelectorAll('.story-item').forEach(story => {
    story.addEventListener('click', function() {
      // Simulate story viewed
      const ring = this.querySelector('.story-ring');
      ring.style.background = 'linear-gradient(45deg, #c7c7c7, #8e8e8e)';
      
      // Create story viewer modal (simplified)
      showStoryViewer(this);
    });
  });
}

// Show story viewer (simplified version)
function showStoryViewer(storyElement) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;
  
  const storyContent = document.createElement('div');
  const storyText = storyElement.querySelector('.story-label').textContent;
  const storyEmoji = storyElement.querySelector('.story-avatar').textContent;
  
  storyContent.innerHTML = `
    <div style="
      width: 400px;
      height: 600px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      position: relative;
    ">
      <div style="font-size: 4rem; margin-bottom: 20px;">${storyEmoji}</div>
      <div style="font-size: 24px; font-weight: 600; margin-bottom: 10px;">milo_beats</div>
      <div style="font-size: 18px; opacity: 0.9;">${storyText}</div>
      <div style="position: absolute; top: 20px; right: 20px; font-size: 24px; cursor: pointer;">✕</div>
    </div>
  `;
  
  modal.appendChild(storyContent);
  document.body.appendChild(modal);
  
  // Close modal on click
  modal.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  // Auto close after 3 seconds
  setTimeout(() => {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
  }, 3000);
}

// Sidebar navigation
function initializeSidebarNavigation() {
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
      // Remove active from all items
      document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      // Add active to clicked item
      this.classList.add('active');
      
      // Simulate navigation (could extend with actual routing)
      const text = this.querySelector('.sidebar-text')?.textContent || '';
      console.log(`Navigating to: ${text}`);
    });
  });
}

// Search functionality
function initializeSearch() {
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      if (query.length > 2) {
        // Simulate search suggestions
        showSearchSuggestions(query);
      } else {
        hideSearchSuggestions();
      }
    });
    
    searchInput.addEventListener('blur', function() {
      setTimeout(hideSearchSuggestions, 200);
    });
  }
}

// Show search suggestions
function showSearchSuggestions(query) {
  let dropdown = document.querySelector('.search-dropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    dropdown.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #dbdbdb;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      max-height: 300px;
      overflow-y: auto;
    `;
    document.querySelector('.search-bar').appendChild(dropdown);
  }
  
  // Mock search results
  const suggestions = [
    { type: 'user', name: 'milo_beats', subtitle: 'Milo Dray • Following' },
    { type: 'user', name: 'guitar_zen', subtitle: 'Guitar enthusiast' },
    { type: 'hashtag', name: '#music', subtitle: '2.1M posts' },
    { type: 'hashtag', name: '#drums', subtitle: '845K posts' }
  ].filter(item => item.name.toLowerCase().includes(query));
  
  dropdown.innerHTML = suggestions.map(item => `
    <div style="
      padding: 12px 16px;
      cursor: pointer;
      border-bottom: 1px solid #efefef;
      display: flex;
      align-items: center;
      gap: 12px;
    " onmouseover="this.style.background='#fafafa'" onmouseout="this.style.background='white'">
      <div style="
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${item.type === 'user' ? 'linear-gradient(45deg, #f58529, #dd2a7b)' : '#efefef'};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
      ">${item.type === 'user' ? '👤' : '#'}</div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #262626;">${item.name}</div>
        <div style="font-size: 12px; color: #8e8e8e;">${item.subtitle}</div>
      </div>
    </div>
  `).join('');
}

// Hide search suggestions
function hideSearchSuggestions() {
  const dropdown = document.querySelector('.search-dropdown');
  if (dropdown) {
    dropdown.remove();
  }
}

// Secret highlight functionality
function initializeSecretHighlight() {
  const secretBtn = document.querySelector('.secret-highlight');
  if (secretBtn) {
    secretBtn.addEventListener('click', function() {
      this.style.animation = 'none';
      this.style.background = 'linear-gradient(135deg, #a8b8c8 0%, #8fa0b3 100%)';
      this.innerHTML = '🎵';

      // Create notification
      const notification = document.createElement('div');
      notification.innerHTML = '🦉 Secret instrumental unlocked - "Owl Beats at Midnight"';
      notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        color: #262626;
        padding: 20px 32px;
        border-radius: 12px;
        z-index: 10000;
        font-size: 16px;
        font-weight: 500;
        border: 1px solid #dbdbdb;
        text-align: center;
        max-width: 320px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
      `;

      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 3000);
    });
  }
}

// Infinite scroll simulation
function initializeInfiniteScroll() {
  let loading = false;
  
  window.addEventListener('scroll', function() {
    if (loading) return;
    
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 1000) {
      loading = true;
      loadMorePosts();
    }
  });
}

// Load more posts (simulation)
function loadMorePosts() {
  const feedContainer = document.querySelector('.feed-container');
  const posts = [
    {
      emoji: '🦉',
      title: 'Owl sketches',
      caption: 'Night inspiration strikes again 🌙',
      location: 'Home Studio',
      likes: 89
    },
    {
      emoji: '☕',
      title: 'Morning coffee routine',
      caption: 'Fuel for creativity ☀️',
      location: 'Kitchen',
      likes: 23
    }
  ];
  
  posts.forEach((postData, index) => {
    setTimeout(() => {
      const newPost = createPostElement(postData);
      feedContainer.appendChild(newPost);
      
      // Re-initialize interactions for new posts
      initializePostInteractions();
      
      if (index === posts.length - 1) {
        loading = false;
      }
    }, index * 500);
  });
}

// Create post element
function createPostElement(data) {
  const article = document.createElement('article');
  article.className = 'post';
  article.innerHTML = `
    <div class="post-header">
      <div class="post-author">
        <div class="author-avatar">🥁</div>
        <div class="author-info">
          <div class="author-name">milo_beats</div>
          <div class="post-location">${data.location}</div>
        </div>
      </div>
      <div class="post-menu">⋯</div>
    </div>
    <div class="post-media">
      <div class="media-placeholder">
        <span class="media-emoji">${data.emoji}</span>
        <div class="media-text">${data.title}</div>
        <div class="media-caption">"${data.caption}"</div>
      </div>
    </div>
    <div class="post-actions">
      <div class="action-buttons">
        <div class="action-btn">❤️</div>
        <div class="action-btn">💬</div>
        <div class="action-btn">📤</div>
      </div>
      <div class="bookmark-btn">🔖</div>
    </div>
    <div class="post-stats">
      <div class="likes-count">${data.likes} likes</div>
    </div>
    <div class="post-content">
      <div class="post-caption">
        <span class="username">milo_beats</span>
        ${data.caption}
      </div>
      <div class="post-time">Just now</div>
    </div>
  `;
  
  return article;
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Like post with 'L' key
    if (e.key === 'l' || e.key === 'L') {
      const firstPost = document.querySelector('.post');
      if (firstPost) {
        const likeBtn = firstPost.querySelector('.action-btn');
        if (likeBtn) {
          likeBtn.click();
        }
      }
    }
    
    // Focus search with '/' key
    if (e.key === '/') {
      e.preventDefault();
      const searchInput = document.querySelector('.search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializePostInteractions();
  initializeStoryInteractions();
  initializeSidebarNavigation();
  initializeSearch();
  initializeSecretHighlight();
  initializeInfiniteScroll();
  initializeKeyboardShortcuts();
  
  console.log('🎵 Desktop Instagram loaded - Press "/" to search, "L" to like!');
});

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation for initial posts
window.addEventListener('load', function() {
  const posts = document.querySelectorAll('.post');
  posts.forEach((post, index) => {
    post.style.opacity = '0';
    post.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      post.style.transition = 'all 0.6s ease';
      post.style.opacity = '1';
      post.style.transform = 'translateY(0)';
    }, index * 200);
  });
});