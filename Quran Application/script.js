const submit = document.getElementById("submit");
const ayah = document.getElementById("ayah");
const input = document.getElementById("input");

submit.addEventListener("click", function () {
    ayah.style.display = "flex";
});

const start = document.getElementById("start");
const end = document.getElementById("end");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const sound = document.getElementById("aud");
const recitebtn = document.getElementById("voice");

let arr = [];
let aud = [];
function gettingayaahs() {
    val = input.value;
    console.log(val);
    const response = fetch(`http://api.alquran.cloud/v1/surah/${val}/ar.alafasy`);

    first = start.value;
    last = end.value;
    console.log(first, last);
    
    response.then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res);

        const { data } = res;

        for (let i = first; i < last; i++) {
            arr.push(data.ayahs[i].text);
            let audio = new Audio(data.ayahs[i].audio);
            aud.push(new Audio(data.ayahs[i].audio));

        }
        result.innerText = arr;

        arr=[];
        console.log(aud);
        let index = 0;

        function Recitation() {

            sound.innerHTML = `<audio src="${aud[index].src}" id="play"></audio>"`;

            let audio = document.getElementById("play");

            audio.play();
        }

        recitebtn.addEventListener("click", function () {
            if (index < Number(aud.length)) {
                Recitation();
                index += 1;
            }
        });


    }).catch((error) => {
        console.log(error);
    })
}

btn.addEventListener("click", gettingayaahs);


// for translation

const traslationofayaahs = document.getElementById("tran");
const btn2 = document.getElementById("btn2");
trans = [];
function Translation()
{
    let val = input.value;
    const response2 = fetch(`http://api.alquran.cloud/v1/surah/${val}/en.asad`);

    first = start.value;
    last = end.value;
    console.log(first, last);

    response2.then((res2)=>{
        return res2.json();
    }).then((res2)=>{
        console.log(res2);
        
        const {data} = res2;

        for(let i=first; i<last; i++)
        {
            trans.push(data.ayahs[i].text);
        }
        traslationofayaahs.innerText = trans;
        
        trans=[];
    })

}


btn2.addEventListener("click", Translation);









