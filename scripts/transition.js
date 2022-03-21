const allButtons = document.querySelectorAll('.button');

switch (location.pathname) {
    case '/video.html':
        transition(allButtons, '#', './test-preview.html', '#');
    case '/test.html':
        transition(allButtons, '#', './test-preview.html', '#');
    case '/test-preview.html':
        transition(allButtons, './video.html', './test-preview.html', './test.html');
    case '/test-good.html':
        transition(allButtons, '#', './test-preview.html', './test.html');
    case '/test-bad.html':
        transition(allButtons, '#', './test-preview.html', './test.html');
    case '/test-about.html':
        transition(allButtons, '#', './test-preview.html', '#');
    case '/course-end_passed.html':
        transition(allButtons, '#', './test-preview.html', '#');
    case '/course-end_not-passed.html':
        transition(allButtons, '#', './test-preview.html', '#');
    default:
        transition(allButtons, '#', '#', '#');
}

function transition(buttons, backLink, nextLink, resultLink) {
    buttons.forEach(element => {
        if (element.name === 'next') {
            element.addEventListener('click', () => {
                location.href = nextLink;
            });
        } else if (element.name === 'back') {
            element.addEventListener('click', () => {
                location.href = backLink;
            });
        } else if (element.name === 'result') {
            element.addEventListener('click', () => {
                location.href = resultLink;
            });
        }
    });
}
