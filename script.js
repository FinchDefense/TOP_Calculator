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
const input = document.querySelector(".input-text");

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

    if (label === '0') button.classList.add('zero');
    if (['÷', '×', '-', '+', '%'].includes(label)) button.classList.add('operator');
    if (label === '=') button.classList.add('equal_sign');
    if (label === 'AC') button.classList.add('clearAll');
    if (label === 'C') button.classList.add('clear');
    if (label === '±') button.classList.add('plus-minus');
    
    buttonsContainer.appendChild(button);
});

buttonsContainer.addEventListener('click', (e) => {
    const button = e.target;

    if (!button.classList.contains('calc_button')) return;

    if (button.classList.contains('clearAll')) {
        input.textContent = '';
        num1 = null;
        num2 = null;
        operator = null;
        return;
    }
    
    if (button.classList.contains('clear')) {
        input.textContent = '';
        num2 = null;
        return;
    }

    if (button.classList.contains('equal_sign')) {
        if (operate(num1, num2, operator) === "ERROR!") {
            input.textContent = "ERROR";
            num1 = null;
            num2 = null;
            operator = null;
        } else {
            num1 = operate(num1, num2, operator);
            input.textContent = num1;
            num2 = null;
        }
        return;
    }

    if (button.classList.contains('operator')) {
        if (num1 !== null && num2 !== null && operator !== null) {
            const result = operate(num1, num2, operator);
            if (result === "ERROR!" || !Number.isFinite(result)) {
                input.textContent = "ERROR";
                num1 = null;
                num2 = null;
                operator = null;
                return;
            }
            num1 = result;
            input.textContent = num1;
            num2 = null;
        } else {
            // Only clear when starting fresh (no num2)
            if (num2 === null && operator === null) {
                input.textContent = '';
            }
        }
        operator = button.textContent;
        return;
    }

    const value = button.textContent;

    if (num2 === null && operator !== null) {
        input.textContent = value;
        num2 = +value;
        return;
    }

    // Prevent multiple decimals
    if (value === '.' && input.textContent.includes('.')) {
        return;
    }

    input.textContent += value;
    if (operator === null) {
        num1 = +input.textContent;
    } else {
        num2 = +input.textContent;
    }
});

function operate(num1, num2, operator) {
    if (operator === '÷' && num2 === 0) {
        return "ERROR!";
    }
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return "ERROR!";
    }
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '×') return num1 * num2;
    if (operator === '÷') return num1 / num2;
    if (operator === '%') return (num1 / 100) * num2;
}