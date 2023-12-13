
document.addEventListener('DOMContentLoaded', function ()
 {
    const generateButton = document.getElementById('generateButton');

    const randomNumberElement = document.getElementById('randomNumber');


    generateButton.addEventListener('click', function ()
     {
        const randomNumber = generateRandomNumber();
        randomNumberElement.textContent = `Random Number: ${randomNumber}`;
    });

    function generateRandomNumber()
     {
        // Change the range as needed
        const min = 1;
        const max = 1000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
