// select Button,Input field and Span tag where the age will be shown

const button = document.querySelector('.calculatebtn');


button.addEventListener('click', function () {

    // Select Input field and pass its value;
    const dateOfBirth = document.getElementById('dateField').value;

    // Get Todays date object
    let today = new Date();

    // Convert String dateOfBirth into Date Object so that we can use Date Methods
    let birthDate = new Date(dateOfBirth);

    // Subtract the Years
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log("Age: " + age);

    // display this age in that span tag
    // select that span tag and show age using "TextContent"


    document.querySelector('.calculatedAge').textContent = age;
})