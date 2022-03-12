const page = document.querySelector('.page');
const allButtonOptionList = page.querySelectorAll('.sidebar__lesson-button');
const allOptionList = page.querySelectorAll('.sidebar__topic-options');

function initialAccordeon (buttons, listOptions) {
    listOptions.forEach(function (listOption, index) {
        listOption.setAttribute('id', 'lesson-option-' + index);
    });
    buttons.forEach((button, index) => {
        button.setAttribute('name', 'lesson-' + index);
        button.addEventListener('click', function() {
            button.classList.toggle('sidebar__lesson-button_opened');
            listOptions[index].classList.toggle('sidebar__topic-options_hidden');
        });
    });
} 

initialAccordeon(allButtonOptionList, allOptionList);