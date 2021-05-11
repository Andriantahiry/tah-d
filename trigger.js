let loader = document.querySelector('.loader');

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader").style.visibility = "visible";
    } else {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


let tl = gsap.timeline();
tl.from('.logo', {
    duration: 1,
    y: 100,

})

tl.to('.logo', {
    duration: 1,
    x: 50,

})
tl.from('.hero-title', {
    duration: 1,
    x: -200,
    opacity: 0
}, "-=1")
tl.from('.hero-p', {
    duration: 1,
    x: -200,
    opacity: 0
}, "-=0.5")

tl.from('.input-field', {
    duration: 1,
    x: -200,
    opacity: 0
}, "-=1.5")
tl.from('.button-container', {
    duration: 1,
    x: -200,
    opacity: 0
})

tl.from('#fb', {
    duration: 1,
    x: -400,
    opacity: 0
}, "-=1.5")

tl.from('#lk', {
    duration: 1,
    x: -400,
    opacity: 0
}, "-=1")

tl.from('#sk', {
    duration: 1,
    x: -400,
    opacity: 0
}, "-=1")




let tr = gsap.timeline({
    scrollTrigger: {
        trigger: ".image-design-container img",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none reverse reverse",

    }
});
