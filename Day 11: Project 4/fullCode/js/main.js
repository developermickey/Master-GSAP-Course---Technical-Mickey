gsap.registerPlugin(ScrollTrigger);

function preloadImg(selector = "img") {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
}

const gridItems = Array.from(document.querySelectorAll(".grids > .grid"));

preloadImg(".grid-img").then(() => {
  // --- Smooth scroll setup ---
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
  });

  // sync GSAP with Lenis scroll
  lenis.on('scroll', ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // --- Animate each grid image ---
  gridItems.forEach((item) => {
    const image = item.querySelector(".grid-img");

    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom", // when the item enters viewport
        end: "bottom top",   // when it leaves
        scrub: true,
      },
    })
      .fromTo(
        image,
        { scale: 0, opacity: 0, duration: 2, transformOrigin: "center center" },
        { scale: 1.4, opacity: 1, duration: 2, ease: "none" }
      )
      .to(image, { scale: 0, opacity: 0, duration: 2, ease: "none" });
  });
});