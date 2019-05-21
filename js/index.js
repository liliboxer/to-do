import templateItem from './template-item.js';
import htmlToDOM from './html-to-DOM.js';
import todos from './to-do-data.js';

const mainList = document.getElementById('main-list');

todos.forEach(todo => {
    const html = templateItem(todo);
    const dom = htmlToDOM(html);
    mainList.appendChild(dom);
});