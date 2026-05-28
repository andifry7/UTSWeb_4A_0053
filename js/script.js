console.log("Pixel++ Website Loaded");

// Navbar Scroll Effect
$(window).scroll(function () {
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
