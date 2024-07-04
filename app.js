var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    // markers: true,
    scrub: 1,
    pin: true,
  },
});

tl.to("#center-img ", {
  right: "21%",
  top: "45%",
  transform: "translate(-50%, -50%)",
  ease: "Power1.easeInOut",
  duration: 2,
  stagger: 0.1,
  end: "-150%",
})
  .to(
    "#circle #circle-bottom img",
    {
      rotate: "-180deg",
      duration: 3,
      stagger: 0.1,
      scale: 0,
      ease: "Power1.easeInOut",
      end: "-150%",
    },
    "hello"
  )
  .to(
    "#circle #circle-top img",
    {
      scale: 0,
      ease: "Power1.easeInOut",
      duration: 3,
      stagger: 0.1,
    },
    "hello"
  )
  .to(
    "#center-img #c-img img",
    {
      scale: 0,
      ease: "Power1.easeInOut",
      duration: 3.5,
      stagger: 0.1,
    },
    "hello"
  )
  .to(
    "#center-img h5",
    {
      opacity: 0,
      stagger: 0.1,
      ease: "Power1.easeInOut",
    },
    "hello"
  )
  .to(
    "#circle",
    {
      scale: 0.6,
      duration: 3,
      ease: "Power1.easeInOut",
    },
    "hello"
  )
  .to(
    "#gallery",
    {
      bottom: "-50%",
      ease: "Power1.easeInOut",
      duration: 2,
    },
    "hello"
  )
  .to(
    "#pinkflare",
    {
      bottom: "1%",
      rotate: 0,
      ease: "Power1.easeInOut",
      duration: 1.5,
    },
    "hello2"
  )
  .to(
    "#layout #pink-dot",
    {
      top: "50%",
      scale: 2,
      duration: 2,
      transform: "translate(-50%, -50%)",
      ease: "Power.easeInOut",
    },
    "hello"
  )
  .to(
    "#semi-circle",
    {
      scale: 0,
      duration: 2,
      ease: "Power1.easeInOut",
    },
    "hello2"
  )
  .to(
    "#circle",
    {
      scale: 0,
      duration: 2,
      ease: "Power1.easeInOut",
    },
    "hello2"
  )
  .to(
    "#layout #pink-dot",
    {
      opacity: 0,
      scale: 1,
      duration: 2,
      ease: "Power.easeInOut",
    },
    "hello2"
  )
  .to(
    "#slider-div",
    {
      bottom: "100%",
      ease: "Power1.easeInOut",
      duration: 10,
    },
    "hello2"
  )
  .to(
    "#slider-div",
    {
      bottom: "150%",
      ease: "Power1.easeInOut",
      duration: 5,
      delay: 1,
    },
    "hello3"
  );

// let img = document.querySelector("#semi-circle");
// img.addEventListener("mousemove", () => {
//   console.log("what the hack is happening");
// });

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "#home",
//       start: "top top",
//       markers: true, // Enable markers for debugging
//       scrub: 1,
//       pin: true,
//     },
//   })
//   .to("#circle #bottom img", {
//     rotate: "-180deg",
//     duration: 1,
//     stagger: 0.1,
//     ease: "Power1",
//   });
