document.addEventListener("DOMContentLoaded", function () {
  // Service Worker Registration
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("serviceworker.js")
      .then(function (registration) {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch(function (error) {
        console.log("Service Worker registration failed:", error);
      });
  }

  // Sidebar
  const sidebar = document.getElementById("header-sidebar");
  const openSidebarBtn = document.getElementById("open-sidebar-btn");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");
  if (openSidebarBtn)
    openSidebarBtn.addEventListener("click", () =>
      sidebar.classList.add("active")
    );
  if (closeSidebarBtn)
    closeSidebarBtn.addEventListener("click", () =>
      sidebar.classList.remove("active")
    );

  // Lightbox
  const lightbox = document.getElementById("support-block-lightbox");
  const openLightboxBtn = document.getElementById("chat-button");
  if (openLightboxBtn)
    openLightboxBtn.addEventListener("click", () =>
      lightbox.classList.add("active")
    );
  if (lightbox)
    lightbox.addEventListener("click", (e) => {
      if (e.target.id === "support-block-lightbox")
        lightbox.classList.remove("active");
    });

  // Cookie Notification
  const userNotification = document.getElementById("user-notification");
  const dismissNotificationBtn = document.getElementById(
    "user-notification-dismiss"
  );
  if (dismissNotificationBtn)
    dismissNotificationBtn.addEventListener(
      "click",
      () => (userNotification.style.display = "none")
    );

  // Scroll to Top
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
      // Nếu cuộn xuống hơn 200px, thêm class để hiện nút
      if (window.pageYOffset > 200) {
        scrollToTopButton.classList.add("is-visible");
      } else {
        // Ngược lại, xóa class để ẩn nút đi
        scrollToTopButton.classList.remove("is-visible");
      }
    });
  }

  // Reviews Carousel
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
