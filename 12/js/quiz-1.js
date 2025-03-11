const url = 'https://reqres.in/api/products/10';
const result = document.getElementById('result');

let request = new XMLHttpRequest();

request.open('GET', url);
request.send();
function onReadyStateChange(){
    if(request.readyState === 4 && request.status === 200){
        let data = JSON.parse(request.responseText);
        console.log(data);
        result.innerHTML = `<p>상품명: ${data.data.name}</p>
        <p>생산년도: ${data.data.year}</p>`;
    }
}
request.onreadystatechange = onReadyStateChange;