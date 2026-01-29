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

  $(".ourLeadersCard").on("click", function () {
    // remove active from all
    $(".ourLeadersCard").removeClass("active");

    // add active to clicked one
    $(this).addClass("active");
  });

  const $popup = $("#mapPopup");
  const $title = $popup.find(".popup-title");

  const rows = {
    distillery: $popup.find(".row-distillery"),
    brewery: $popup.find(".row-brewery"),
    office: $popup.find(".row-office"),
  };

  const values = {
    distillery: $popup.find(".distillery"),
    brewery: $popup.find(".brewery"),
    office: $popup.find(".office"),
  };

  $(".stateMarker").on({
    mouseenter: function () {
      const $marker = $(this);
      $title.text($marker.data("name"));

      let hasAnyData = false;

      $.each(rows, function (key, $row) {
        const value = $marker.data(key);

        if (value && value !== "0") {
          $row.css("display", "flex");
          values[key].text(value);
          hasAnyData = true;
        } else {
          $row.hide();
        }
      });

      // If no data at all, don't show popup
      if (hasAnyData) {
        $popup.addClass("show");
      } else {
        $popup.removeClass("show");
      }
    },

    mousemove: function (e) {
      if (!$popup.hasClass("show")) return;

      $popup.css({
        left: (e.clientX - $popup.outerWidth() / 2) + "px",
        top: (e.clientY - $popup.outerHeight() - 15) + "px",
      });
    },

    mouseleave: function () {
      $popup.removeClass("show");
    }
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

  $('.brewingCards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.beveragesFutureSlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1800,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    arrows: false,
    // centerMode: true,
    centerPadding: '200px',
    pauseOnHover: false,
    cssEase: 'linear',
    rtl: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  var $slider = $('.spiritedOriginSlider');
  var $navWrap = $('.spiritedOriginSliderNav');
  var $navItems = $navWrap.find('.spiritedOriginSlideNav');

  var navCount = $navItems.length;
  var navShow = 5;

  // Main slider
  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: false,
    dots: false,
  });

  // If more than 5, make nav a slider
  if (navCount > navShow) {
    $navWrap.slick({
      slidesToShow: navShow,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      focusOnSelect: true,
    });
  } else {
    // normal flex mode
    $navWrap.addClass("no-slider");
  }

  // Initial active
  $navItems.eq(0).addClass('active');

  // Sync from main slider → nav
$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $navItems.removeClass('active');
  $navItems.eq(nextSlide).addClass('active');

  // Move nav instantly
  if (navCount > navShow) {
    $navWrap.slick('slickGoTo', nextSlide, true); // true = no animation
  }
});


  // Click on nav → go to slide
  $navItems.on('click', function () {
    var index = $(this).index();
    $slider.slick('slickGoTo', index);
  });




});
