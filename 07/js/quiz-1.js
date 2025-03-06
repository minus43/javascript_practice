const btn = document.querySelector('button');
const nameInput = document.querySelector('#username');
const majorInput = document.querySelector('#major');
const attendant = document.querySelector('#attendant');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const major = majorInput.value;
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const majorCell = document.createElement('td');
    nameCell.textContent = name;
    majorCell.textContent = major;
    row.appendChild(nameCell);
    row.appendChild(majorCell);
    attendant.appendChild(row);
    nameInput.value = '';
    majorInput.value = '';
});
