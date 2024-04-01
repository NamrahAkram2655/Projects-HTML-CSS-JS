let btn = document.querySelectorAll(".btn");
let input = document.querySelector("#input");

let str = "";

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {


        // console.log(e.target);

        if (btn[i].innerHTML === "=") {
            str = eval(str);
            // console.log(str);
            input.innerText = str;
            // console.log(input.innerText);
        }
        else if (btn[i].innerHTML === "clr") {
            str = "";
            input.innerText = str;
        }
        else if (btn[i].innerHTML === "DEL") {
            str = str.slice(0, str.length - 1);
            input.innerText = str;
        }
        else if (btn[i].innerHTML === "M+" || btn[i].innerHTML === "R+") {
            input.innerText = str;
        }
        else {
            str = str + btn[i].innerHTML;
            input.innerText = str;
            console.log(input.innerText);
        }
    });
}