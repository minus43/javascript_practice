const result = document.getElementById('result');
const button = document.querySelector('button');
function getLottoNumbers(){
    const numbers = new Set();
    while(numbers.size < 6){
        const number = Math.floor(Math.random() * 45) + 1;
        numbers.add(number);
    }
    return numbers;
}

function printLottoNumbers(){
    const numbers = getLottoNumbers();
    console.log(numbers);
    result.innerHTML = `<p>${[...numbers].join(', ')}</p>`;
}

button.addEventListener('click', printLottoNumbers);