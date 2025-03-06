const bttn = document.querySelector('#bttn');
const year = document.querySelector('#year');
const month = document.querySelector('#month');
const date = document.querySelector('#date');
const result = document.querySelector('#result');


bttn.addEventListener('click', (e) => {
    e.preventDefault();
    const now = new Date();
    const birth = new Date(year.value, month.value, date.value);
    const diff = now.getTime() - birth.getTime();
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    result.innerHTML = `현재 날짜 : ${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일<br>
    살아온 날짜 : ${diffDay}일<br>
    살아온 시간 : ${diffHour}시간`;
});