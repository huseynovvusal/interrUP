class Reveal {
  static reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
      let windowheight = window.innerHeight;
      let revealtop = reveal.getBoundingClientRect().top;
      let revealpoint = 100;

      if (revealtop < windowheight - revealpoint) {
        reveal.classList.add("reveal-active");
      }
    });
  }
}
