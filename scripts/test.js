const resultButton = document.querySelector('.card-block__button');
const checkboxes = document.querySelectorAll('.test__checkbox');
const radioButtons = document.querySelectorAll('.test__radio');

let radioIsActive = false;
let checkboxIsActive = false;

function isChecked (list) {
    for (let i = 0; i< list.length; i++){
        if (list[i].checked) return true;
    }
    return false;
}

function renderResultButton () {
    radioIsActive = isChecked(radioButtons);
    checkboxIsActive = isChecked(checkboxes);
    radioIsActive && checkboxIsActive ? resultButton.classList.remove('button_status_disabled') : resultButton.classList.add('button_status_disabled');
}

radioButtons.forEach(item => item.addEventListener('click', renderResultButton ));
checkboxes.forEach(item => item.addEventListener('click', renderResultButton ));



