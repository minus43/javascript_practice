const winners=[];
const total = document.querySelector('#total');
const seed = document.querySelector('#seed');
const raffle = document.querySelector('#raffle');
const clear = document.querySelector('#clear');
const result = document.querySelector('#result');


raffle.addEventListener('click', (e) => {
    e.preventDefault();
    for(let i=0; i<total.value; i++){
        const result = Math.floor(Math.random() * seed.value)+1;
        winners.push(result+"번");
    }
    result.setAttribute('class', 'show');
    result.innerHTML = "당첨자 : "+winners.join(', ');

});

clear.addEventListener('click', (e) => {
    e.preventDefault();
    result.removeAttribute('class');
    result.innerHTML = "";
    winners.length = 0;
    total.value = "";
    seed.value = "";
});