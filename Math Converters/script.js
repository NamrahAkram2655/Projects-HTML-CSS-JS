console.log('Hello world');

document.getElementById('btn').onclick = function () {
    alert('Hello  world');
    prompt('Enter number');
}

// document.getElementById('add').onclick = function addElements() {
//     let r = prompt('How many number you want to add?');
//     let sum=0;
//     for (let i = 0; i < r; i++) {
//         let value  = prompt('Enter number ' + i + 1);
//         sum= sum+value;
//     }
//     return sum;
// }

document.getElementById('add').onclick = function addElements() {
    let value = document.getElementById('inputed').value;
    let value2 = document.getElementById('inputed2').value;
    document.getElementById('p1').innerHTML = parseInt(value) + parseInt(value2);
    //Number bhi likh saktay thay oarseint ki jaga 
}


document.getElementById('square-root').onclick = function squareRoot() {
    let r = document.getElementById('sqr').value;
    let result = Math.sqrt(r);

    document.getElementById('p2').innerText = result;
}

document.getElementById('Area').onclick = function area() {
    let result = ((document.getElementById('base').value) * document.getElementById('height').value) / 2;
    document.getElementById('p3').innerText = result;
}

document.getElementById('Kilometers-into-miles').onclick = function ktom() {
    let val = document.getElementById('Kilometers').value;
    let onek = 0.621371;

    document.getElementById('p4').innerText = onek * val;
}

let chance = 5;
document.getElementById('check').onclick = function gaming() {
    let r = Math.round(Math.random() * 10);
    console.log(r);
    let value = document.getElementById('play').value;
    if (r == value) {
        document.getElementById('p5').innerText = 'You are the winner';
    }
    if (chance == 0) {
        document.getElementById('p5').innerText = 'You loose';
    }
    else {
        if (value < r) {
            document.getElementById('p5').innerText = 'Too low';
            chance--;
            document.getElementById('chances').innerText = chance + 'are left';
        } else if (value > r) {
            document.getElementById('p5').innerText = 'Too high';
            chance--;
            document.getElementById('chances').innerText = chance + 'are left';
        }
    }
}