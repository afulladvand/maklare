const firstMsg = document.querySelector(".first-message");
const closeBtn = document.querySelector(".close-btn");
const lightnees = document.querySelector("#lightness");

closeBtn.addEventListener("click", () => {
    firstMsg.classList.add("msg-upp");
    firstMsg.classList.remove("msg-down");
    lightnees.classList.remove("lightness");
    lightnees.classList.add("display-none");
    setTimeout(() => {
        firstMsg.classList.add("display-none")
    }, "400")
})
lightnees.addEventListener("click", () => {
    firstMsg.classList.add("msg-upp");
    firstMsg.classList.remove("msg-down");
    lightnees.classList.remove("lightness");
    lightnees.classList.add("display-none");
    setTimeout(() => {
        firstMsg.classList.add("display-none")
    }, "400")
})
