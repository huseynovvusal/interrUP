window.addEventListener("load", () => {
  scrollTo(0, 0);

  // Owl Carousel

  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 50,
    nav: false,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  window.addEventListener("scroll", () => {
    Reveal.reveal();
  });
});
