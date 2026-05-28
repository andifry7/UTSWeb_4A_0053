console.log("Pixel++ Website Loaded");
const sections = $("section");
const navLinks = $(".nav-link");

// Navbar Scroll Effect
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".navbar").addClass("navbar-scrolled");
  } else {
    $(".navbar").removeClass("navbar-scrolled");
  }
});

// Reveal on Scroll
function revealOnScroll() {
  $(".reveal").each(function () {
    let windowHeight = $(window).height();
    let elementTop = $(this).offset().top;
    let revealPoint = 120;

    if (elementTop < window.scrollY + windowHeight - revealPoint) {
      $(this).addClass("active");
    }
  });
}

$(window).on("scroll", revealOnScroll);
revealOnScroll();

// Active Navbar Menu
$(window).on("scroll", function () {
  let current = "";

  sections.each(function () {
    const sectionTop = $(this).offset().top - 150;

    if ($(window).scrollTop() >= sectionTop) {
      current = $(this).attr("id");
    }
  });

  navLinks.removeClass("active");

  navLinks.each(function () {
    if ($(this).attr("href") === "#" + current) {
      $(this).addClass("active");
    }
  });
});
