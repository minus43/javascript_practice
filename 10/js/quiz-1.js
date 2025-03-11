const origin = document.getElementById('origin');
const result = document.getElementById('result');

const arr = [2, 4, 6, 8, 10];
const resultArr = arr;
let arrSum = 0;
for(let i = 0; i < arr.length; i++){
    arrSum += arr[i];
}
resultArr.push(arrSum);
function printArray(element, arr){
    element.innerHTML = `<table><tr><td>${arr.join('</td><td>')}</td></tr></table>`;
}

printArray(origin, arr);
printArray(result, resultArr);