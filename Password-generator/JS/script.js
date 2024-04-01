const result = document.getElementById("final");
const passLength = document.getElementById("Password-Length");
const upperEl = document.getElementById("Uppercase-Alphabets");
const lowerEL = document.getElementById("lowercase-Alphabets");
const symbolEL = document.getElementById("Special-Characters");
const digitEL = document.getElementById("Numbers");
const btn = document.getElementById("btn");
const lengthEL = document.getElementById("Password-Length");
const copy = document.getElementById("logo");


function generateUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function generateLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function generatedigits() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function generateSymbol() {
    let h = "!@#%^&*()_+={}[]\|\/><.,";

    return h[Math.floor(Math.random() * h.length)];
}

RandomFunction = {
    upper: generateUpper,
    lower: generateLower,
    number: generatedigits,
    symbol: generateSymbol,
};

btn.addEventListener("click", function () {
    let length = Number(lengthEL.value);
    let hasUpper = upperEl.checked;
    let hasLower = lowerEL.checked;
    let hassymbol = symbolEL.checked;
    let hasDigits = digitEL.checked;

    console.log(length, hasUpper, hasLower, hasDigits, hassymbol);

    result.innerText = generatePassword(length, hasUpper, hasLower, hasDigits, hassymbol);
});

function generatePassword(length, upper, lower, number, symbol) {
    generated = '';
    let check = upper + lower + number + symbol;

    let typear = [];
    if (upper) typear.push({ upper });
    if (lower) typear.push({ lower });
    if (number) typear.push({ number });
    if (symbol) typear.push({ symbol });

    console.log((typear));
    if (check === 0) {
        result.innerText = "";
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < typear.length; j++) {
            funcname = Object.keys(typear[j])[0];
            console.log(funcname);
            generated = generated + RandomFunction[funcname]();
        }
    }
    
    return generated.slice(0,length);

}


copy.addEventListener("click", function(){
    let pass = result.innerText;
});













