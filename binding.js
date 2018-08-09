'use strict';

/* eslint-env browser */

(() => {
    const dataObj = {
        firstName: ''
    };

    function updateView(key, value) {
        document.getElementById(`${key}View`).innerText = value;
    }

    function setData(key, value) {
        dataObj[key] = value;
        updateView(key, value);
    }

    function updateInput(event) {
        setData('firstName', event.target.value);
    }

    const fnInput = document.getElementById('firstName');
    fnInput.addEventListener('keydown', updateInput);
})();
