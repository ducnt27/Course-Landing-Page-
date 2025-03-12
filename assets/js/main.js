console.log("hihi");

document.addEventListener("click", function (event) {
  // if (event.target.classList.contains("menu-btn")) {
  //   event.target.classList.toggle("menu-btn--active");
  // }
  // const navbar = document.querySelector(".navbar");
  // if (navbar) {
  //   navbar.classList.toggle("navbar--active");
  // }
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");
  const overlay = document.querySelector(".overlay");
  if (!menuBtn || !navbar) return; // Đảm bảo cả hai phần tử tồn tại

  if (event.target.classList.contains("menu-btn")) {
    // Toggle class khi click vào menu button
    menuBtn.classList.toggle("menu-btn--active");
    navbar.classList.toggle("navbar--active");
    overlay.classList.toggle("overlay--active");
  } else if (!navbar.contains(event.target)) {
    // Nếu click ra ngoài navbar thì xóa cả hai class
    menuBtn.classList.remove("menu-btn--active");
    navbar.classList.remove("navbar--active");
    overlay.classList.remove("overlay--active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabs = document.querySelectorAll(".tabs__item");
  const featureSections = [
    document.getElementById("recorded-class"),
    document.getElementById("live-class"),
    document.getElementById("lifetime-support"),
  ];

  // Initially show only the first section
  featureSections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = "none";
    }
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Update active tab
      tabs.forEach((t) => t.classList.remove("tabs__item--active"));
      tab.classList.add("tabs__item--active");

      // Show corresponding section
      featureSections.forEach((section, sectionIndex) => {
        if (sectionIndex === index) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  loop: true,
  slidesPreview: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPreView: 1,
    },
    992: {
      slidesPreView: 2,
    },
    1200: {
      slidesPreView: 3,
    },
  },
  // And if we need scrollbar
});
