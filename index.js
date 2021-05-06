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


let menu = document.querySelector('.button-container');
let trait = document.querySelector('.close');
let items = document.querySelector('nav ul');
trait.addEventListener('click', function () {
    items.classList.add('hidden')
})
menu.addEventListener('click', function () {
    if (items.classList.contains('hidden')) {
        items.classList.remove('hidden')
        gsap.from(items, {
            autoAlpha: 1,
            duration: 1,

        });
        gsap.to(menu, {
            duration: 1,

        })
    }
    else {
        items.classList.add('hidden')
    }
});

document.querySelector('.hero').addEventListener('click', function () {
    items.classList.add('hidden')
})
