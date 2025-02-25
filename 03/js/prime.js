// 소수는 1과 자기 자신만으로 나누어 지는 수
// 합성수는 1과 자기 자신 외에도 다른 수로 나누어 지는 수

const number = parseInt(prompt("숫자를 입력하세요."));

let isPrime;

if(number === 1){
    document.write("1은 소수도 합성수도 아닙니다.");
}else if(number < 1){
    document.write("소수는 1보다 큰 자연수입니다.");
}else{
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    document.write(`${number}은 소수입니다.`);
}else{
    document.write(`${number}은 합성수입니다.`);
}
