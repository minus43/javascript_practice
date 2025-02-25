function checkNumber(userInput) {
    userInput = parseInt(userInput);

    if(userInput > 0) {
        alert(`${userInput}은 양수입니다.`);
    } else if(userInput < 0) {
        alert(`${userInput}은 음수입니다.`);
    } else if(userInput === 0) {
        alert(`${userInput}은 0입니다.`);
    } 
}

function getNumber() {
    let userInput = prompt("숫자를 입력하세요");
    userInput = parseInt(userInput);
    return userInput;
}

checkNumber(getNumber());