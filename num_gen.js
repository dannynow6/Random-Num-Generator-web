const lt = document.getElementById("lefttile");
const rt = document.getElementById("righttile");

const num1 = Math.floor(Math.random() * 10);

const num2 = Math.floor(Math.random() * 10);

function modText(new_text, new_text2) {
    lt.firstChild.nodeValue = new_text;
    rt.firstChild.nodeValue = new_text2;

}
function changeColor(x, y) {
    lt.style.background = x;
    rt.style.background = y; 
}
function timeIt(a, b, c, d, g, h, e, f) {
    setTimeout(() => {modText(a, b);}, 1500);
    setTimeout(() => {modText(c, d);}, 2500);
    setTimeout(() => {modText(g, h);}, 3500);
    setTimeout(() => {modText(e, f);}, 4500);
    setTimeout(() => {changeColor('lightyellow', 'lightyellow');}, 1500);
    setTimeout(() => {changeColor('lightyellow', 'white');}, 2500);
    setTimeout(() => {changeColor('white', 'white');}, 3500);
    setTimeout(() => {changeColor('white', 'steelblue');}, 4500);     
}

const el = document.getElementById("mainpage");
el.addEventListener("click", function() {timeIt('...', '...', '..', '..', '.', '.', num1, num2)}, false);