$(document).ready(function () {
  // Mobile Navigation Toggle
  $(".fa-bars, #mobile-menu-toggle").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Mobile menu clicked"); // Debug log
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("active");
    $("body").toggleClass("nav-open");
    console.log("Menu active:", $(".navbar").hasClass("active")); // Debug log
  });

  // Close mobile menu when clicking on a link
  $(".navbar ul li a").click(function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("active");
    $("body").removeClass("nav-open");
  });

  // Close mobile menu when clicking outside
  $(document).click(function (e) {
    if (!$(e.target).closest('.header').length && !$(e.target).closest('.navbar').length) {
      $(".fa-bars").removeClass("fa-times");
      $(".navbar").removeClass("active");
      $("body").removeClass("nav-open");
    }
  });

  // Close mobile menu on window resize
  $(window).resize(function () {
    if ($(window).width() > 992) {
      $(".fa-bars").removeClass("fa-times");
      $(".navbar").removeClass("active");
      $("body").removeClass("nav-open");
    }
  });

  $(window).on("load scroll", function () {
    // Only close menu on scroll if it's open
    if ($(".navbar").hasClass("active")) {
      $(".fa-bars").removeClass("fa-times");
      $(".navbar").removeClass("active");
      $("body").removeClass("nav-open");
    }

    if ($(window).scrollTop() > 35) {
      $(".header").css({
        background: "#002e5f",
        "box-shadow": "0 .2rem .5rem rgba(0,0,0,.4)",
      });
    } else {
      $(".header").css({ background: "none", "box-shadow": "none" });
    }
  });

  const counters = document.querySelectorAll(".counter");
  const speed = 120;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  (function ($) {
    "use strict";

    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } },
    });

    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
      },
    });
  })(jQuery);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(".accordion-header").click(function () {
    $(".accordion .accordion-body").slideUp(500);
    $(this).next(".accordion-body").slideDown(500);
    $(".accordion .accordion-header span").text("+");
    $(this).children("span").text("-");
  });
});
