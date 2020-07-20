function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /\d+$/;
    if(phone.length !== 10)
        return false;
    return regex.test(phone);
}

function validateMessage(msg) {
    var count = (msg.split(" ").length - 1);
    //console.log(count);
    if(count > 101)
        return false;
    return true;
}

function submitForm(isValid) {
    if(isValid) {
        document.getElementById("enquiry_form").submit();
    }
}

window.onload = function() {
    const nameInput = document.querySelector('#name__input');
    const emailInput = document.querySelector('#email__input');
    const messageInput = document.querySelector('#message__input');
    const buttonSubmit = document.querySelector('#submit');
    const phoneInput = document.querySelector('#phone__input');

    var errorMessage = document.querySelector('#error');
    console.log(errorMessage)
    errorMessage.style.display = "none";

    buttonSubmit.addEventListener('click', (e)=> {
        e.preventDefault(); //to prevent submitting the form

        errorMessage.style.display = "none";

        //to check empty fields
        if(nameInput.value == '' || emailInput.value == '' || messageInput.value == '' || phoneInput.value == '')
        {
            errorMessage.innerText = 'Error:- please fill in the empty fields';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        
        //check phone number
        if(!validatePhone(phoneInput.value)) {
            errorMessage.innerText = 'Error:- please check your phone';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        //use regex to check email
        if(!validateEmail(emailInput.value))
        {
            errorMessage.innerText = 'Error:- please check your email';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        //message should be less than 100 words
        if(!validateMessage(messageInput.value))
        {
            errorMessage.innerText = 'Error:- please write a concise message having not more than 100 words';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        submitForm(true);
    })
}