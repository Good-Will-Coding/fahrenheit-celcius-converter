// UI Values

const fahrenheitInput = document.querySelector('#fahrenheit');
const celciusOutput = document.querySelector('#celcius');
const message = document.querySelector('.msg');

// Listen for user input

const results = fahrenheitInput.addEventListener('keydown', function () {
    location.reload();
});

convert();

// Convert from user input
function convert() {
    let conversion = (Math.floor((fahrenheitInput.value - 32) * 5 / 9));
    if (fahrenheitInput.value != '') {
        message.textContent = `${conversion}°`;
        fahrenheitInput.focus();

    } else {
        noTempAlert();
        message.textContent = 'Please enter a temperature.';
        message.style.color = 'red';
        fahrenheitInput.focus();
    }
}

// Remove alert
function noTempAlert(e) {
    fahrenheitInput.addEventListener('click', function () {
        message.style.display = 'none';
    });
}