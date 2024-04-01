const btn = document.getElementById("btn");
const container =document.querySelector(".cont");

let colors = ["grey","purple","blue","aqua","black","pink","yellow","orange","green","red","aqua"]

btn.addEventListener("click", function(){
    let index = Math.floor(Math.random()*colors.length)
    console.log(index);

    container.style.backgroundColor = colors[index];
});