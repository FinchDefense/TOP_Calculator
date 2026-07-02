let num1 = null;
let num2 = null;
let operator = null;

const container = document.querySelector(".container");

const title_pt2 = document.createElement("p");
title_pt2.textContent = "CALCULATOR";
title_pt2.style.fontFamily = "Poppins, Helvetica, sans-serif";
title_pt2.style.fontSize = "50px";
title_pt2.style.fontWeight = "700";
title_pt2.style.letterSpacing = "12px";
title_pt2.style.marginTop = "-20px";
container.prepend(title_pt2);

const title_pt1 = document.createElement("p");
title_pt1.textContent = "CHECK OUT THIS";
title_pt1.style.fontFamily = "Playfair Display, Georgia, serif";
title_pt1.style.fontSize = "25px";
title_pt1.style.fontWeight = "400";
title_pt1.style.letterSpacing = "8px";
title_pt1.style.textTransform = "uppercase";
title_pt1.style.fontStyle = "italic";
container.prepend(title_pt1);


const buttonsContainer = document.querySelector(".buttons");
const input = document.querySelector(".input-text")

const buttonLabels = [
    'AC', 'C', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '±', '=', 
];

buttonLabels.forEach(label => {
    const button = document.createElement('button');
    button.textContent = label;
    button.classList.add('calc_button');

    // Special buttons deserve special classes
    if (label === '0') button.classList.add('zero');
    if (['÷', '×', '-', '+'].includes(label)) button.classList.add('operator');
    if (label === '=') button.classList.add('equal_sign');
    if (label === 'AC') button.classList.add('clearAll');
    if (label === 'C') button.classList.add('clear');
    if (label === '%') button.classList.add('percent');
    if (label === '±') button.classList.add('plus-minus')
    
    buttonsContainer.appendChild(button);
});

buttonsContainer.addEventListener('click', (e) => {
    const button = e.target;

    // Special class cases
    if (!button.classList.contains('calc_button')) return; // Not a button

    // Check if it has a special class
    if (button.classList.contains('clearAll'))  { // if AC button is clicked

    }   
    
    else if (button.classList.contains('clear')) { // if C button is clicked
        
    }

    else if (button.classList.contains('equal_sign')) { // if '=' sign is clicked

    }

    else if (button.classList.container('operator')) { // if an operator is clicked

    }

    else { // If it does not have a special class:
        input.textContent += button.textContent;

        if (operator === null && num2 === null) num1 = +input.textContent;
        else if (operator !== null) num2 += input.textContent;
    }
})

// Start adding operator functions!
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function percent(a,b) {
    return (a / 100) * b;
}







