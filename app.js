function timeLineOne() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      // markers: true,
      scrub: 1,
      pin: true,
      end: "bottom -150%",
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
      "#nav-bar #brand-name",
      {
        color: "#fff",
        fontWeight: 600,
        duration: 1.5,
        ease: "Power.easeInOut",
      },
      "hello"
    )
    .to(
      "#colors #color-6",
      {
        /* Object 6: Most Visible (100% opacity) */

        backgroundColor: "#fff",
        duration: 1.5,
        ease: "Power.easeInOut",
      },
      "hello"
    )
    .to(
      "#colors #color-5",
      {
        /* Object 5: Very Visible (75% opacity) */

        backgroundColor: "#ffffffef",
        duration: 1.5,
        ease: "Power.easeInOut",
      },
      "hello"
    )
    .to(
      "#colors #color-4",
      {
        /* Object 4: Somewhat Visible (50% opacity) */

        backgroundColor: "#ffffffdd",
        duration: 1.5,
        ease: "Power.easeInOut",
      },
      "hello"
    )
    .to(
      "#colors #color-3",
      {
        /* Object 3: Quite Transparent (15% opacity) */
        backgroundColor: "#ffffffcb",
        duration: 1.5,
        ease: "Power.easeInOut",
      },
      "hello"
    )
    .to(
      "#colors #color-2",
      {
        /* Object 2: Quite Transparent (15% opacity) */
        backgroundColor: "#ffffffb9",
        duration: 1.5,
        ease: "Power.easeInOut",
      },
      "hello"
    )
    .to(
      "#colors #color-1",
      {
        /* Object 1: Very Transparent (5% opacity) */
        backgroundColor: "#ffffff9a",
        // fontWeight: 600,
        duration: 1.5,
        ease: "Power.easeInOut",
      },
      "hello"
    )
    .to(
      "#text h4",
      {
        color: "#fff",
        duration: 1.5,
        ease: "Power1.easeInOut",
      },
      "hello"
    )
    .to(
      "#semi-circle",
      {
        scale: 0.4,
        duration: 4,
        ease: "Power1.easeInOut",
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
        scale: 0,
        duration: 2.5,
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
      "#left-bottom-nav h5, #icon",
      {
        color: "#fff",
        duration: 1.5,
        ease: "Power1.easeInOut",
      },
      "hello"
    )
    .to(
      "#left-bottom-nav #iso",
      {
        backgroundColor: "#fff",
        color: "transparent",
        duration: 1.5,
        ease: "Power1.easeInOut",
      },
      "hello"
    )
    .to(
      "#left-bottom-nav #iso h4",
      {
        // backgroundColor: "#fff",
        color: "#000",
        duration: 1.5,
        ease: "Power1.easeInOut",
      },
      "hello"
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
}

timeLineOne();

function timeLineTwo() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-2",
      start: "top top",
      markers: true,
      scrub: 1,
      pin: true,
      end: "bottom -150%",
    },
  });

  tl.to(
    "#nav-bar #brand-name",
    {
      color: "#000",
      ease: "Power.easeInOut",
    },
    "hi"
  )
    .to(
      "#colors #color-6",
      {
        backgroundColor: "rgb(0, 0, 0)",
        ease: "Power.easeInOut",
      },
      "hi"
    )
    .to(
      "#colors #color-5",
      {
        backgroundColor: "rgba(38, 38, 38, 0.89)",
        ease: "Power.easeInOut",
      },
      "hi"
    )
    .to(
      "#colors #color-4",
      {
        backgroundColor: "rgba(75, 75, 75, 0.874)",
        ease: "Power.easeInOut",
      },
      "hi"
    )
    .to(
      "#colors #color-3",
      {
        backgroundColor: "rgba(113, 113, 113, 0.901)",
        ease: "Power.easeInOut",
      },
      "hi"
    )
    .to(
      "#colors #color-2",
      {
        backgroundColor: "rgba(150, 150, 150, 0.901)",
        ease: "Power.easeInOut",
      },
      "hi"
    )
    .to(
      "#colors #color-1",
      {
        backgroundColor: "rgba(188, 188, 188, 0.786)",
        ease: "Power.easeInOut",
      },
      "hi"
    )
    .to(
      "#text h4",
      {
        color: "#000",
        duration: 1,
        ease: "Power1.easeInOut",
      },
      "hi"
    )
    .to(
      "#left-bottom-nav h5, #icon",
      {
        color: "#000",
        duration: 1,
        ease: "Power1.easeInOut",
      },
      "hi"
    )
    .to(
      "#left-bottom-nav #iso",
      {
        backgroundColor: "#000000cd",
        duration: 1,
        ease: "Power1.easeInOut",
      },
      "hi"
    )
    .to(
      "#left-bottom-nav #iso h4",
      {
        color: "#fff",
        duration: 1,
        ease: "Power1.easeInOut",
      },
      "hi"
    );

  // .to(".circle-1", {
  //   top: "50%",
  //   duration: 1,
  //   ease: "Power1",
  // });
}

timeLineTwo();
