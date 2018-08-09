'use strict';

/* eslint-env browser */

(() => {
    const dataObj = {
        firstName: '';
    };
    
    const outputDiv = document.getElementById('nameHere');

    function updateInput(event) {
        console.log(event.target.value);
        outputDiv.innerText = event.target.value;
    }

    const fnInput = document.getElementById('firstName');
    fnInput.addEventListener('keydown', updateInput);
})();
