// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// ==========================================
// PAGE LOAD ANIMATION
// ==========================================

// Headline letter animation

gsap.to(".headline span", {
    opacity: 1,
    y: 0,

    duration: 0.8,

    stagger: 0.08,

    ease: "power3.out"
});


// Subtitle

gsap.to(".subtitle", {
    opacity: 1,

    y: 0,

    duration: 1,

    delay: 0.8,

    ease: "power2.out"
});


// Statistics animation

gsap.to(".stat", {
    opacity: 1,

    y: 0,

    duration: 0.8,

    stagger: 0.2,

    delay: 1.1,

    ease: "power3.out"
});


// ==========================================
// BOTTLE INTRO
// ==========================================

gsap.from("#bottle", {

    opacity: 0,

    scale: 0.6,

    rotation: -15,

    duration: 1.4,

    delay: 0.5,

    ease: "power3.out"

});


// ==========================================
// SCROLL-BASED HERO ANIMATION
// ==========================================

gsap.to("#bottle", {

    y: 250,

    x: 300,

    rotation: 25,

    scale: 1.15,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1.5,

        // markers: true

    }

});


// ==========================================
// BOTTLE SECOND MOVEMENT
// ==========================================

gsap.to(".visual-container", {

    scale: 0.75,

    opacity: 0.3,

    scrollTrigger: {

        trigger: ".hero",

        start: "30% top",

        end: "100% top",

        scrub: 1.5

    }

});


// ==========================================
// HEADLINE SCROLL MOVEMENT
// ==========================================

gsap.to(".headline", {

    y: -100,

    opacity: 0,

    scrollTrigger: {

        trigger: ".hero",

        start: "10% top",

        end: "50% top",

        scrub: 1

    }

});


// ==========================================
// STATS SCROLL MOVEMENT
// ==========================================

gsap.to(".stats", {

    y: 100,

    opacity: 0,

    scrollTrigger: {

        trigger: ".hero",

        start: "20% top",

        end: "70% top",

        scrub: 1

    }

});


// ==========================================
// GLOW MOVEMENT
// ==========================================

gsap.to(".glow", {

    scale: 1.8,

    opacity: 0.05,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 2

    }

});