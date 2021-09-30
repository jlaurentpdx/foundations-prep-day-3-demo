const nameTag = document.getElementById('name-tag');
const nameElement = document.getElementById('name');
const nameInput = document.getElementById('name-input');

const pronounsElement = document.getElementById('pronouns');
const pronounsInput = document.getElementById('pronouns-input');

const colorSelect = document.getElementById('color-select');
const fontSelect = document.getElementById('font-select');
const updateButton = document.getElementById('update-button');

const counterValue = document.getElementById('counter-value');
const counterRemark = document.getElementById('counter-remark');

let count = 0;

updateButton.addEventListener('click', () => {   
    const name = nameInput.value; 
    const pronouns = pronounsInput.value;

    if (name !== '') {
        nameElement.textContent = name;
    } 

    if (pronouns === '') {
        pronounsElement.style.display = 'none';
    } else {
        pronounsElement.style.display = 'grid';
    }

    nameTag.style.background = colorSelect.value;
    nameElement.style.fontFamily = fontSelect.value; 
    pronounsElement.style.fontFamily = fontSelect.value;
    pronounsElement.textContent = pronouns;

    count = count + 1;
    counterValue.textContent = count;

    if (count >= 500) {
        counterRemark.textContent = 'Ignominious. I hope it was worth it.';
    } else if (count >= 100) {
        counterRemark.textContent = 'Disgraceful.';
    } else if (count >= 50) {
        counterRemark.textContent = 'Distasteful.';
    } else if (count >= 10) {
        counterRemark.textContent = 'Shameful.';
    } else if (count > 1) {
        counterRemark.textContent = 'Wasteful.';
    } else if (count === 1) {
        counterRemark.textContent = "Don't look now, but I think it's... crooked.";
    }
});

