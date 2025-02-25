function showData(age, name) {
    alert(`안녕하세요 ${name}님, 나이가 ${age}이군요`);
}

function getData(callback){
    let age = prompt("나이를 입력하세요");
    let name = prompt("이름을 입력하세요");
    callback(age, name);
}

getData(showData);