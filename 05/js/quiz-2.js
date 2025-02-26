function getGreatestCommonDivisor(num1, num2) {
    let smallNum = parseInt(num1);
    let bigNum = parseInt(num2);

    if(smallNum > bigNum) {
        smallNum, bigNum = bigNum, smallNum;
    }

    while(bigNum % smallNum !== 0) {
        let temp = bigNum % smallNum;
        bigNum = smallNum;
        smallNum = temp;
    }
    return smallNum;
}

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.getElementById('result');

const calc = document.getElementById('calc');

calc.addEventListener('click', function() {
    result.innerHTML = getGreatestCommonDivisor(number1.value, number2.value);
});