let userNumber = prompt("숫자를 입력하세요.");

if(userNumber !== null){
    userNumber = parseInt(userNumber);
    if(userNumber % 2 === 0){
        alert(`${userNumber}은 짝수입니다.`);
    }else{
        alert(`${userNumber}은 홀수입니다.`);
    }
}