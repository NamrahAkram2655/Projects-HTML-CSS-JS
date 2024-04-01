const btn = document.getElementById("btn");
const container = document.querySelector(".container");
btn.addEventListener("click", function () {
    container.style.display = "none";
});

const namevalue = document.getElementById("input");
const button = document.getElementById("btn2");
const data = document.getElementById("data");
const error = document.getElementById("error");

function genderCheck() {
    let val = namevalue.value;
    const response = fetch(`https://api.genderize.io?name=${val}`);

    if (val === "") {
        
        error.style.display = "flex";     
        setTimeout(() => {
            error.style.display = "none"; 
        }, 3000);
    }
    else {
        response.then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);

            if (res.gender === "female") {
                document.getElementById("image").innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUt57i1LIo_yAlSG-kNFwPe69JEAvSv4tvgw&usqp=CAU'>`;
                data.innerText = `Total people in the world with this name are : ${res.count}`;
            }
            else if(res.gender === "male"){ 
                document.getElementById("image").innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8e2Y6WhKucBWkG81EziP8yvjxK3QOZC5vg&usqp=CAU'>`;
                data.innerText = `Total people in the world with this name are : ${res.count}`;
            }
            else
            {
                document.getElementById("image").innerHTML=`<p>It is not a name!!</p>`; 
            }
        });
    }
}

button.addEventListener("click", genderCheck);