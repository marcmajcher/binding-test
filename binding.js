'use strict';

/* eslint-env browser */

(() => {
    const dataObj = {
        firstName: 'First',
        lastName: 'Last'
    };

    function updateView(key, value) {
        document.getElementById(`${key}View`).innerText = value;
    }

    const dataHandlers = {
        set: (target, property, value) => {
            target[property] = value;
            updateView(property, value);
            return true;
        }
    };

    const dataProxy = new Proxy(dataObj, dataHandlers);

    function updateInput(event) {
        dataProxy[event.target.id] = event.target.value;
    }

    document.getElementById('firstName').addEventListener('keyup', updateInput);
    document.getElementById('lastName').addEventListener('keyup', updateInput);
})();
