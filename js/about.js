const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menu.classList.add("close");
    } else {
        menu.classList.remove("close");
        menu.classList.add("open");
    }
})

const contentObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".item")[0].classList.add("from-left");
            document.querySelectorAll(".item")[1].classList.add("scale-upp");
            document.querySelectorAll(".item")[2].classList.add("from-right");
        }
    })
})
contentObserver.observe(document.querySelector(".content-counter"));


const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.CDATA_SECTION_NODE.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})