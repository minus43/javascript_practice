function getNumber() {
    let userInput = prompt("숫자를 입력하세요");
    userInput = parseInt(userInput);
    return userInput;
}

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
    console.log(`${num1}과 ${num2}의 최대 공약수는 ${smallNum}입니다.`);
}

getGreatestCommonDivisor(getNumber(), getNumber());