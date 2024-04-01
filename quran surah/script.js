// For getting a complete surah
const input = document.getElementById("input");
const result = document.getElementById("result");
const btn2 = document.getElementById("btn2");

let arr = [];
function selectingSurah() {

    let val = Number(input.value);

    const response = fetch(`http://api.alquran.cloud/v1/surah/${val}`);

    response.then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res);
        const { data } = res;
        console.log(data.ayahs.length);
        for (let i = 0; i < data.ayahs.length; i++) {
            arr.push(data.ayahs[i].text);
        }
        result.innerHTML = arr;
        arr = []
    }).catch((error) => {
        console.log(error);
    });
}

btn2.addEventListener("click", selectingSurah);
