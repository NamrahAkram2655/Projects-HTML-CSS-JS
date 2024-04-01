const count = document.getElementById("count");
const button = document.querySelectorAll(".buttons");

// for(let i=0; i<buttons.length)
let time=0;
button.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(btn.classList.contains("add"))
        {
            time++;
            count.innerText =time;
        }
        else if(btn.classList.contains("lower"))
        {
            time--;
            count.innerText =time;
        }

        if(time===0){count.style.color="black";}
        if(time>0){count.style.color="green";}
        if(time<0){count.style.color="red";}
    });
});