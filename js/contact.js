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




