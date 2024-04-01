const quote=document.querySelector('.quote');
const person=document.querySelector('.person');
const btn=document.getElementById('btn');

const data=[
    {
        quotation : "I get a lot of letters from people. They say, \"I want to be a writer. What should I do?\" I tell them to stop writing to me and get on with it.",
        author : 'Jack London' 
    },
    {
        quotation :  "I have never started a poem yet whose end I knew. Writing a poem is discovering.",
        author : ' Douglas Adams' 
    },
    {
        quotation : "Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way.",
        author : 'Erica Jong' 
    },
    {
        quotation : "Close the door. Write with no one looking over your shoulder. Don't try to figure out what other people want to hear from you; figure out what you have to say. It's the one and only thing you have",
        author : 'Norman Vincent Peale' 
    },
    {
        quotation :"Anyone and everyone taking a writing class knows that the secret of good writing is to cut it back, pare it down, winnow, chop, hack, prune, and trim, remove every superfluous word, compress, compress, compress...",
        author : 'Wally Lamb' 
    },
    {
        quotation :"I love deadlines. I like the whooshing sound they make as they fly by.",
        author : 'Jack London' 
    }
];


btn.addEventListener('click', function(){

    let index = Math.round(Math.random()*data.length);

    quote.innerText=data[index].quotation;
    person.innerText=data[index].author;
})

//we can also do  
// document.getElementById('btn').onclick=function(){}
