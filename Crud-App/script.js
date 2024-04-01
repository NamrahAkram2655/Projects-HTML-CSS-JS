const whole = document.querySelector(".data");
const table = document.getElementById("table")
const namee = document.getElementById("name");
const email = document.getElementById("email");
const serialno = document.getElementById("serialNo");
const submit = document.getElementById("btn");

submit.addEventListener("click", function(e){

    let tablerow = document.createElement("tr");
    let tabledataforname = document.createElement("td");
    let tabledataforEmail = document.createElement("td");
    let tabledataforSerialNo = document.createElement("td");
    let btn2 = document.createElement("button");

    btn2.classList.add("removebtn2");

    tabledataforname.innerText = namee.value;
    tabledataforEmail.innerText = email.value;
    tabledataforSerialNo.innerText= serialno.value;
    btn2.innerHTML = "<i class='bx bxs-message-square-x'></i>";
    
    // tablerow.classList.add("");
    tablerow.appendChild(tabledataforname);
    tablerow.appendChild(tabledataforEmail);
    tablerow.appendChild(tabledataforSerialNo);
    tablerow.appendChild(btn2);
    
    table.appendChild(tablerow);
    
    if (tabledataforname.innerText==="" || tabledataforEmail.innerText==="" || tabledataforSerialNo.innerText==="") {
        alert("First fill your form");
        tablerow.style.display="none";
    }
    btn2.addEventListener("click" , function(){
        tablerow.style.display="none";
        setTimeout(() => {
            alert("your data has been deleted");
        }, 500);
    });

    e.preventDefault();
});