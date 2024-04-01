const container = document.querySelector('.maindata');
const data = document.querySelector('.data');
const button = document.getElementById('btn');
const cut = document.getElementById('cut');

//is se button ko click krnay se dabba nazar aa jayai gaa per document ko click krnay se bhi dabba ghayab ho jana chayai 

button.addEventListener('click', function () {
    data.style.display = 'flex';
});

// document k liyai
cut.addEventListener('click', function () {
    data.style.display = 'none';
});

window.addEventListener('click', function (e) {

    if (e.target === container) {
        data.style.display = 'none';
    }
});