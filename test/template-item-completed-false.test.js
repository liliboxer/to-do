import templateItem from '../js/template-item.js';

const test = QUnit.test;

QUnit.module('to do');

test('completed item false', (assert) => {
    const todos = {
        task: 'Feed Max',
        completed: false
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox" >Feed Max
        </li>
    `;

    const html = templateItem(todos);

    assert.htmlEqual(html, expected);

});