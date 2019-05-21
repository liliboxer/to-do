import templateHeader from '../js/template-header.js';

const test = QUnit.test;

QUnit.module('header');

test('template for header', assert => {
    const header = 'To Do';    

    const expected = /*html*/ `
        <header>
            <h1>To Do</h1>
        </header>
    `;

    const html = templateHeader(header);
    
    assert.htmlEqual(html, expected);
});
