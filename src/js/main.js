import store from './store/index.js';

import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';

const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

/* here is just plain vanilla JS, we have event listener to for submit event */
formElement.addEventListener('submit', evt => {
    // no need to reload page
    evt.preventDefault();
    //get trim val
    let value = inputElement.value.trim();
    // if there's anythong in val
    if (value.length) {
        // use store to dispatch event
        store.dispatch('addItem', value);
        // reset val to empty string and reset focus
        inputElement.value = '';
        inputElement.focus();
    }
});

// for 3 component, we init new instace and invoke render
const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();

countInstance.render();
listInstance.render();
statusInstance.render();