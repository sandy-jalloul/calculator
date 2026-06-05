const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click' , function() {
        const value = button.textContent;
        if(value === 'C') {
            display.textContent = '0';
        } else if (value === '=') {
            display.textContent = eval(display.textContent);
        } else {
            if (display.textContent === '0') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
    });
});
