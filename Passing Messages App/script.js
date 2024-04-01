const data = document.getElementById("data");
const btn = document.getElementById("btn");
const error = document.getElementById("error");
const final = document.getElementById("final");

btn.addEventListener("click", function () {
    let message = data.value;

    if (message === "") {
        error.style.display = "flex";
    }
    else {
        error.style.display="none";
        final.innerText = message;
        data.value = "";
    }
});
