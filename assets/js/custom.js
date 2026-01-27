$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".headSec").addClass("stickyHead");
    } else {
      $(".headSec").removeClass("stickyHead");
    }
  });

  // Hamburger menu
  $(".hamburger").on("click", function () {
    $(this).toggleClass("active");
    $(".siteNav").toggleClass("active");
    $("body").toggleClass("menuOpen");

    if ($(this).hasClass("active")) {
      // menu opening → add overlay if not already present
      if (!$(".menuOverlay").length) {
        $(".headSec").append('<div class="menuOverlay"></div>');
      }
    } else {
      // menu closing → remove overlay
      $(".menuOverlay").remove();
    }
  });

  $(document).on("click", ".menuOverlay", function () {
    $(".siteNav").removeClass("active");
    $(".hamburger").removeClass("active");
    $("body").removeClass("menuOpen");
    $(this).remove();
  });

  // Close menu when clicking a link
  $(".siteNav a").on("click", function () {
    $(".siteNav").removeClass("active");
    $(".hamburger").removeClass("active");
    $("body").removeClass("menuOpen"); // enable body scroll
    $(".menuOverlay").remove();
  });

  // Footer scroll to top button
  $('.footToTopBtn').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  // Sliders
  $('.hmBannerSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false
  });

  $('.commBannerSec').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
  });

  $('.beveragesFutureSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1800,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    // centerMode: true,
    centerPadding: '200px',
    pauseOnHover: false,
    cssEase: 'linear',
    rtl: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

});
