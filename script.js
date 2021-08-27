let display = document.querySelector(".display");

let equal = document.querySelector(".equal");
equal.addEventListener("click", equals);

let clr = document.querySelector(".clear");
clr.addEventListener("click", () => clear());

document.querySelectorAll(".key").forEach(item => {
    item.addEventListener('click', calc)
})

document.onkeydown = function (e) {
    if (e.key === 'Backspace')
        clear();
};

document.onkeypress = function (e) {
    if (e.key === 'Enter')
        equals();
    else if (display.textContent == '0')
        display.textContent = e.key;
    else
        display.textContent += e.key;
}

function clear() {
    display.textContent = "0";
}
function calc() {
    if (display.textContent == "0") {
        display.textContent = this.textContent;
    }
    else display.textContent += this.textContent;
}

function equals() {
    display.textContent = eval(display.textContent);
}
