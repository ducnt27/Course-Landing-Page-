function load(selector, path) {
  const cached = localStorage.getItem(path);
  if (cached) {
    document.querySelector(selector).innerHTML = cached;
  }
  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      if (html !== cached) {
        document.querySelector(selector).innerHTML = html;
        localStorage.setItem(path, html);
      }
    });
}
console.log("hihi");

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
menu - mobile;
const menuBtn = document.querySelector(".btn--banner");
menuBtn.addEventListener("click", () => {
  console.log("meum");
  menuBtn.classList.toggle("active");
});
