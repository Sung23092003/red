document.addEventListener("DOMContentLoaded", () => {
  const upcitySwiper = new Swiper(".upcity-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".upcity-next",
      prevEl: ".upcity-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  const expertiseSwiper = new Swiper(".expertise-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000, // 3 seconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".expertise-next",
      prevEl: ".expertise-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  const swiper = new Swiper(".slider-rev", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000, // 5 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".carousel-next",
      prevEl: ".carousel-prev",
    },
  });
  const userNotification = document.getElementById("user-notification");
  const dismissNotificationBtn = document.getElementById(
    "user-notification-dismiss"
  );
  if (dismissNotificationBtn)
    dismissNotificationBtn.addEventListener(
      "click",
      () => (userNotification.style.display = "none")
    );

  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.querySelector(".video-player");
  const imageContainer = document.querySelector(".image-container");
  const closeButton = document.querySelector(".close-btn");
  const playBtn = document.getElementById("playButton"); // nút tam giác

  function playVideo() {
    // Mở modal
    videoModal.style.display = "flex";
    // document.body.style.overflow = "hidden";

    // Ẩn nút play
    if (playBtn) playBtn.style.display = "none";

    // Delay nhẹ để modal render xong rồi mới phát video
    setTimeout(() => {
      videoPlayer.play().catch((e) => {
        console.log("Auto-play prevented:", e);
      });
    }, 50);

    // Focus close button
    if (closeButton) closeButton.focus();
  }

  function closeVideo() {
    videoModal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    document.body.style.overflow = "auto"; // Explicitly set to auto
    // Hiện lại nút play
    if (playBtn) playBtn.style.display = "block";
    if (imageContainer) imageContainer.focus();
  }
  videoPlayer.addEventListener("play", () => {
    if (playBtn) playBtn.style.display = "none";
  });

  // Hiện lại nút play khi video tạm dừng
  videoPlayer.addEventListener("pause", () => {
    if (playBtn) playBtn.style.display = "block";
  });

  if (imageContainer) {
    imageContainer.addEventListener("click", playVideo);
  }

  // Sự kiện
  if (imageContainer) {
    imageContainer.addEventListener("click", playVideo);
  }
  if (playBtn) {
    playBtn.addEventListener("click", playVideo);
  }
  if (closeButton) {
    closeButton.addEventListener("click", closeVideo);
  }
  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      closeVideo();
    }
  });
  // Add click to pause functionality for the video player itself
  videoPlayer.addEventListener("click", () => {
    if (!videoPlayer.paused) {
      videoPlayer.pause();
    } else {
      videoPlayer.play();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal.style.display === "flex") {
      closeVideo();
    }
  });

  const carousel = document.getElementById("reviews-carousel");
  const prevBtn = document.getElementById("reviews-prev");
  const nextBtn = document.getElementById("reviews-next");
  if (carousel && prevBtn && nextBtn) {
    const itemWidth = carousel.querySelector(".slider-rev__item").clientWidth;
    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
    });
  }
  
});

