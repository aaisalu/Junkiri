const newbtnel = document.querySelector(".nav-menu");
const headerEl = document.querySelector(".header");

newbtnel.addEventListener("click", function () {
  headerEl.classList.toggle("nav-toggle");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("header-nav-link"))
      headerEl.classList.toggle("nav-toggle");
  });
});
