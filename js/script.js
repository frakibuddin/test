$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });

  //slider 2
  var Kochi = $("#owl-Kochi");

  Kochi.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });

  // Custom Navigation Events
  $(".next").click(function () {
    Kochi.trigger("owl.next");
  });
  $(".prev").click(function () {
    Kochi.trigger("owl.prev");
  });

  //slider 3
  var madurai = $("#owl-madurai");

  madurai.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });
  // Custom Navigation Events
  $(".next3").click(function () {
    madurai.trigger("owl.next");
  });
  $(".prev3").click(function () {
    madurai.trigger("owl.prev");
  });

  //thrissur 4
  var thrissur = $("#owl-thrissur");

  thrissur.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });
  // Custom Navigation Events
  $(".thrissur-n").click(function () {
    thrissur.trigger("owl.next");
  });
  $(".thrissur").click(function () {
    thrissur.trigger("owl.prev");
  });

  //erode 5
  var erode = $("#owl-erode");

  erode.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: true,
  });
  // Custom Navigation Events
  $(".erode-n").click(function () {
    erode.trigger("owl.next");
  });
  $(".erode").click(function () {
    erode.trigger("owl.prev");
  });

  //erode 5
  var trichy = $("#owl-trichy");

  trichy.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });
  // Custom Navigation Events
  $(".trichy-n").click(function () {
    trichy.trigger("owl.next");
  });
  $(".trichy").click(function () {
    trichy.trigger("owl.prev");
  });

  //erode 5
  var tirupur = $("#owl-tirupur");
  tirupur;
  tirupur.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });
  // Custom Navigation Events
  $(".tirupur-n").click(function () {
    tirupur.trigger("owl.next");
  });
  $(".tirupur").click(function () {
    tirupur.trigger("owl.prev");
  });
});
