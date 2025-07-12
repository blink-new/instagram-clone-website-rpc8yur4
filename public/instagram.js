function showTab(tabName) {
  // Hide all sections
  document
    .querySelectorAll(".posts-section, .reels-section, .tagged-section")
    .forEach((section) => {
      section.classList.remove("active");
    });

  // Remove active class from all tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected section
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked tab
  event.target.closest(".tab").classList.add("active");
}

// Secret highlight functionality
document
  .querySelector(".secret-highlight")
  .addEventListener("click", function () {
    this.style.animation = "none";
    this.style.background =
      "linear-gradient(135deg, #a8b8c8 0%, #8fa0b3 100%)";
    this.innerHTML = "🎵";

    // Create a temporary notification
    const notification = document.createElement("div");
    notification.innerHTML =
      '🦉 Secret instrumental unlocked - "Owl Beats at Midnight"';
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #8fa0b3;
        padding: 16px 24px;
        border-radius: 12px;
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        border: 1px solid #8fa0b3;
        text-align: center;
        max-width: 280px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  });

// Add click effects to interactive elements
document
  .querySelectorAll(
    ".post-item, .reel-item, .highlight, .stat, .story-item"
  )
  .forEach((item) => {
    item.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

// Story highlight click effect with gentle animation
document.querySelectorAll(".highlight").forEach((highlight) => {
  highlight.addEventListener("click", function () {
    const circle = this.querySelector(".highlight-circle");
    circle.style.transform = "scale(1.1)";
    circle.style.boxShadow = "0 6px 16px rgba(143, 160, 179, 0.4)";
    setTimeout(() => {
      circle.style.transform = "scale(1)";
      circle.style.boxShadow = "0 4px 12px rgba(143, 160, 179, 0.3)";
    }, 200);
  });
});

// Gentle loading animation for posts
function addLoadingEffect() {
  const posts = document.querySelectorAll(".post-item");
  posts.forEach((post, index) => {
    setTimeout(() => {
      post.style.opacity = "0";
      post.classList.add("loading-shimmer");
      setTimeout(() => {
        post.style.opacity = "1";
        post.classList.remove("loading-shimmer");
      }, 300);
    }, index * 100);
  });
}

// Add subtle parallax effect to owl doodles
document.addEventListener("scroll", () => {
  const owlDoodles = document.querySelectorAll(".owl-doodle");
  const scrolled = window.pageYOffset;
  owlDoodles.forEach((doodle) => {
    const rate = scrolled * -0.1;
    doodle.style.transform = `translateY(${rate}px) rotate(${
      rate * 0.1
    }deg)`;
  });
});

// Simulate realistic interaction behaviors
const actions = document.querySelectorAll(".action-btn");
actions.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.textContent === "Following") {
      this.textContent = "Follow";
      this.style.background = "#0095f6";
    } else if (this.textContent === "Follow") {
      this.textContent = "Following";
      this.style.background = "#363636";
    }
  });
});

// Add realistic touch feedback for mobile
const touchElements = document.querySelectorAll(
  ".post-item, .highlight-circle, .story-ring"
);
touchElements.forEach((element) => {
  element.addEventListener("touchstart", function () {
    this.style.opacity = "0.8";
  });

  element.addEventListener("touchend", function () {
    this.style.opacity = "1";
  });
});

// Simulate story viewing
document.querySelectorAll(".story-item").forEach((story) => {
  story.addEventListener("click", function () {
    const ring = this.querySelector(".story-ring");
    ring.style.background = "linear-gradient(45d, #8e8e8e, #666)";
    setTimeout(() => {
      ring.style.background = "linear-gradient(45deg, #6b7c93, #8fa0b3)";
    }, 2000);
  });
});