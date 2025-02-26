const btn = document.querySelector('#view');
const detail = document.querySelector('#detail');

btn.addEventListener('click', function() {
  detail.classList.toggle('hidden');
});
