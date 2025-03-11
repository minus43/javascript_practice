const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

// 함수 작성할 부분
function tail(arr){
    if(arr.length > 1){
        return arr.slice(1);
    } else if(arr.length === 1){
        return arr;
    }
}

origin.innerText = numbers;
result.innerText = tail(numbers);

