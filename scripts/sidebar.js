const page = document.querySelector('.page');

//Задаем переменные элементам
const buttonFirst = page.querySelector('.sidebar__lesson-button[name="lesson-1"]');
const optionListFirst = page.querySelector('#lesson-options-1');
const buttonSecond = page.querySelector('.sidebar__lesson-button[name="lesson-2"]');
const optionListSecond = page.querySelector('#lesson-options-2');
const buttonThird = page.querySelector('.sidebar__lesson-button[name="lesson-3"]');
const optionListThird = page.querySelector('#lesson-options-3');
const buttonFourth = page.querySelector('.sidebar__lesson-button[name="lesson-4"]');
const optionListFourth = page.querySelector('#lesson-options-4');
const buttonFifth = page.querySelector('.sidebar__lesson-button[name="lesson-5"]');
const optionListFifth = page.querySelector('#lesson-options-5');
const buttonSixth = page.querySelector('.sidebar__lesson-button[name="lesson-6"]');
const optionListSixth = page.querySelector('#lesson-options-6');
const buttonSeventh = page.querySelector('.sidebar__lesson-button[name="lesson-7"]');
const optionListSeventh = page.querySelector('#lesson-options-7');

//Функции

function openLessonOptions(button, options) {
    button.classList.toggle('sidebar__lesson-button_opened');
    options.classList.toggle('sidebar__topic-options_hidden');
};

//Реакции на действия

buttonFirst.addEventListener('click', function() {
    openLessonOptions(buttonFirst, optionListFirst);
});

buttonSecond.addEventListener('click', function() {
    openLessonOptions(buttonSecond, optionListSecond);
});

buttonThird.addEventListener('click', function() {
    openLessonOptions(buttonThird, optionListThird);
});

buttonFourth.addEventListener('click', function() {
    openLessonOptions(buttonFourth, optionListFourth);
});

buttonFifth.addEventListener('click', function() {
    openLessonOptions(buttonFifth, optionListFifth);
});

buttonSixth.addEventListener('click', function() {
    openLessonOptions(buttonSixth, optionListSixth);
});

buttonSeventh.addEventListener('click', function() {
    openLessonOptions(buttonSeventh, optionListSeventh);
});