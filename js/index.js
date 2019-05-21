import templateItem from './template-item.js';
import htmlToDOM from './html-to-DOM.js';
import todos from './to-do-data.js';
import templateHeader from './template-header.js';

const mainList = document.getElementById('main-list');
const header = document.getElementById('header');

todos.forEach(todo => {
    const html = templateItem(todo);
    const dom = htmlToDOM(html);
    mainList.appendChild(dom);
});

const html = templateHeader();
const dom = htmlToDOM(html);
header.appendChild(dom);