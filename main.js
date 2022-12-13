let operation_input = document.querySelector('.operation');
let wasOperated = false;

const addValue = (element) => {
    if (wasOperated) {
        operation_input.value = '';
        wasOperated = false;
    }
    // if (element.value === '0' && operation_input.value === '') {
    //     return;
    // }
    operation_input.value += element.value;
};

const deleteValue = () => {
    if (wasOperated) {
        operation_input.value = '';
        wasOperated = false;
    }
    let size = String(operation_input.value).length - 1;
    if (size > -1) {
        let value = String(operation_input.value);
        operation_input.value = value.substring(0, size);
    }
};

const resetValue = () => {
    operation_input.value = '';
    wasOperated = false;
};

const evaluateInput = () => {
    try {
        if (operation_input.value.includes('x')) {
            operation_input.value = operation_input.value.replace('x', '*');
        }
        if (operation_input.value !== '') {
            operation_input.value = eval(operation_input.value);
            wasOperated = true;
        }
    } catch (error) {
        wasOperated = true;
        operation_input.value = 'ERROR';
    }
};

const switchTheme = (element) => {
    let id = element.value;
    let itemSize = 0;
    let lastItemClass = '';
    let bodyElement = document.getElementsByTagName('body');
    let headerText = document.querySelector('.header-tittle');
    let themeText = document.querySelector('.text-theme');
    let fieldsetElement = document.getElementsByTagName('fieldset');
    let switchNumbers = document.querySelectorAll('.switch-number');
    let switchers = document.getElementsByName('switcher-group');
    let screenElement = document.getElementsByClassName(
        'calculator-input-screen'
    );
    let calculatorInput = document.getElementsByClassName('operation');
    let buttonsContainer = document.getElementsByClassName(
        'calculator-buttons-container'
    );
    let buttons = document.getElementsByClassName('button');
    let itemsList = [
        ...bodyElement,
        headerText,
        themeText,
        ...fieldsetElement,
        ...screenElement,
        ...calculatorInput,
        ...buttonsContainer,
        ...switchNumbers,
        ...switchers,
        ...buttons,
    ];
    for (const item of itemsList) {
        itemSize = item.classList.length;
        lastItemClass = item.classList[itemSize - 1];
        item.classList.remove(lastItemClass);
        let classSize = lastItemClass.length;
        lastItemClass = lastItemClass.substring(0, classSize - 1) + id;
        item.classList.add(lastItemClass);
    }
};
