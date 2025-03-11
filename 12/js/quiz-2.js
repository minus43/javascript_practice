const btn = document.querySelector('button');
let input = document.querySelector('#user-number');
const result = document.getElementById('result');

btn.addEventListener('click', (e)=>{	
	e.preventDefault();
	try{
		if(input.value >10){
			throw new Error("10보다 작은 숫자를 입력하세요")
		} else if(isNaN(input.value)){
			throw new Error("숫자를 입력하세요")
		} else {
			result.innerHTML = `<p>입력한 숫자는 ${input.value}입니다.</p>`;
		}
	} catch(error){
		alert(error.message);
	} finally {
		input.value = '';
	}

});


