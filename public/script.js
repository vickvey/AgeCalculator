// public/script.js

function calculateAge(year, month, day) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentDay = currentDate.getDate();

    let age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age -= 1; // Decrement age if birthday hasn't happened yet this year
    }
    return age;
}

// Function to handle age calculation on button click
function handleCalculateAge() {
    // Check if a result already exists, delete that result
    if (document.querySelector('H2')) {
        h2.remove();
    }

    const dateInput = document.querySelector('#birthDate').value;

    // Check if the input is empty
    if (!dateInput) {
        alert('Please enter your birth date.');
        return; // Exit if the input is empty
    }

    // Split the date string to get year, month, and day
    const dateArray = dateInput.split('-');
    const year = parseInt(dateArray[0]); // Get year
    const month = parseInt(dateArray[1]); // Get month
    const day = parseInt(dateArray[2]); // Get day

    const age = calculateAge(year, month, day);

    // Create a heading to display the result
    const body = document.querySelector('body');
    const resHeading = document.createElement('H2');
    resHeading.innerHTML = `You are ${age} years old!`;
    body.appendChild(resHeading);
}

// Attach event listener to the button
document.querySelector('button[type="submit"]').addEventListener('click', handleCalculateAge);
