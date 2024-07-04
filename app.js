var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    markers: true,
    scrub: 1,
    pin: true,
  },
});

tl.to("#circle #circle-bottom img", {
  rotate: "-180deg",
  duration: 1.5,
  stagger: 0.1,
  // scale: 0,
  ease: "Power1.easeInOut",
}).to("#circle #circle-top img", {
  scale: 0,
  ease: "Power1.easeInOut",
  duration: 1,
  stagger: 0.1,
});

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
