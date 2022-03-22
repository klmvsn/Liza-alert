const page = document.querySelector('.page');
const allButtonOptionList = page.querySelectorAll('.sidebar__lesson-button');
const allOptionList = page.querySelectorAll('.sidebar__topic-options');
const allSideBarTopic = page.querySelectorAll('.sidebar__topic-text');

function initialAccordeon(topicsList, buttons, listOptions) {
  listOptions.forEach(function (listOption, index) {
    listOption.setAttribute('id', 'lesson-option-' + index);
  });
  buttons.forEach((button, index) => {
    button.setAttribute('name', 'lesson-' + index);
    button.addEventListener('click', function () {
      button.classList.toggle('sidebar__lesson-button_status_opened');
      listOptions[index].classList.toggle('sidebar__topic-options_status_hidden');
    });
  });
  topicsList.forEach((topic, index) => {
    topic.addEventListener('click', function () {
      allButtonOptionList[index].classList.toggle('sidebar__lesson-button_status_opened');
      listOptions[index].classList.toggle('sidebar__topic-options_status_hidden');
    });
  });
}

initialAccordeon(allSideBarTopic, allButtonOptionList, allOptionList);
