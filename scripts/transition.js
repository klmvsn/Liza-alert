const allButtons = document.querySelectorAll('.button');
function transition(buttons, linkForButtonBack, linkForButtonNext, linkForButtonResult) {
  buttons.forEach(button => {
    if (button.name === 'back') {
      button.addEventListener('click', () => {
        location.href = linkForButtonBack;
      });
    }
    else if (button.name === 'next') {
      button.addEventListener('click', () => {
        location.href = linkForButtonNext;
      });
    }
    else if (button.name === 'result') {
      button.addEventListener('click', () => {
        location.href = linkForButtonResult;
      });
    }
  });
}

// ('кнопки', 'ссылка для кнопки назад', 'ссылка для кнопки далее', 'ссылка для кнопки card-block') //

switch (location.pathname) {
  case '/video.html':
    transition(allButtons, '#', './test-preview.html', '#');
    break;
  case '/test-preview.html':
    transition(allButtons, './video.html', '#', './test.html');
    break;
  case '/test.html':
    transition(allButtons, './test-preview.html', '#', '#');
    break;
  case '/test-about.html':
    transition(allButtons, './test.html', '#', '#');
    break;
  case '/test-bad.html':
    transition(allButtons, './video.html', './course-end_not-passed.html', './test.html');
    break;
  case '/test-good.html':
    transition(allButtons, './video.html', './course-end_passed.html', './test.html');
    break;
  case '/course-end_passed.html':
    transition(allButtons, './test-good.html', '#', '#');
    break;
  case '/course-end_not-passed.html':
    transition(allButtons, './test-bad.html', '#', '#');
    break;
  default:
    transition(allButtons, '#', '#', '#');
}
