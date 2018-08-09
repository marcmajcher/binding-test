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
        setData(event.target.id, event.target.value);
    }

    document.getElementById('firstName').addEventListener('keyup', updateInput);
    document.getElementById('lastName').addEventListener('keyup', updateInput);
})();
