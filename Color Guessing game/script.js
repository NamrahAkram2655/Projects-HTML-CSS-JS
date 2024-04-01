const box = document.querySelectorAll(".box");
const rgbColor = document.getElementById("rgb");
const newcolor = document.getElementById("new");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const statusCheck = document.getElementById("status");
const allboxese = document.querySelector(".allboxes")

var colors = generateRandom(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
// console.log(pickedColor);
rgbColor.textContent = pickedColor;
let boxcount = 6;


for (let i = 0; i < colors.length; i++) {
    box[i].style.backgroundColor = colors[i];

    box[i].addEventListener("click", function (e) {
        let selected = this.style.backgroundColor;
        console.log((pickedColor),e.target.style.backgroundColor);
        if (pickedColor === selected) {
            win();
        }
        else if (selected !== pickedColor) {
            loose(this);
        }
    })
}

function win() {
    console.log(colors.length);
    for (let i = 0; i < colors.length; i++) {
        box[i].style.backgroundColor = pickedColor;
    }
    statusCheck.innerText = "Correct!!";
}
function loose(a) {
    a.style.backgroundColor = 'black';
    statusCheck.innerText = "Try again!!";
}

function generateRandom(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


easy.addEventListener("click", function () {
    boxcount = 3;
    statusCheck.innerText="Let's play";

    easy.style.color = "white";
    easy.style.backgroundColor = "pink";
    hard.style.backgroundColor = "white";
    hard.style.color = "pink";

    colors = generateRandom(boxcount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    rgbColor.textContent = pickedColor;

    for (let i = 0; i < box.length; i++) {
        if (colors[i]) {
            box[i].style.backgroundColor = colors[i];
        }
        else {
            box[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function () {
    boxcount = 6;
    statusCheck.innerText="Let's play";
    
    hard.style.color = "white";
    hard.style.backgroundColor = "pink";
    easy.style.backgroundColor = "white";
    easy.style.color = "pink";
    
    colors = generateRandom(boxcount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    rgbColor.textContent = pickedColor;

    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = colors[i];
        box[i].style.display = "flex";
    }
    console.log(box.length);

});

newcolor.addEventListener("click", function () {
    // easy.style.backgroundColor = "pink";

    colors = generateRandom(boxcount);
    pickedColor = colors[Math.floor(Math.random() * boxcount)];
    rgbColor.textContent = pickedColor;

    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = colors[i];
    }
    console.log(box.length);

});

statusCheck.addEventListener("click", function(){
    statusCheck.innerText="Let's play";

    colors = generateRandom(boxcount);
    pickedColor = colors[Math.floor(Math.random() * boxcount)];
    rgbColor.textContent = pickedColor;

    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = colors[i];
    }
});