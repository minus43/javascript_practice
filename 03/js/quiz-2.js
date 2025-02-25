let userNumber = prompt("1보다 큰 수를 입력하세요.");

let sum = 0;

if(userNumber !== null){
    console.log(userNumber);
    for(let i = 1; i <= userNumber; i++){
        if(i % 2 === 0){
            sum += i;
            document.write(`${i}-----${sum}<br>`);
        }
    }
}