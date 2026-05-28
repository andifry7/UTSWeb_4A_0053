console.log("Pixel++ Website Loaded");

// Navbar Scroll Effect
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".navbar").addClass("navbar-scrolled");
  } else {
    $(".navbar").removeClass("navbar-scrolled");
  }
});
