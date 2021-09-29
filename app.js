const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');

button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
});
