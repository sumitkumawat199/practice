$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
    // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    // nextArrow: '<button class="slide-arrow next-arrow"></button>',
  });
});
$(document).ready(function () {
  $(".menu-bar").click(function () {
    $(".mobile-menu").show("slow");
  });
  $(".close").click(function () {
    $(".mobile-menu").hide("slow");
  });
});
