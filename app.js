// Select all UI Element
const formEl = document.querySelector('#form'),
      firstNameEl = document.querySelector('.firstName'),
      lastNameEl = document.querySelector('.lastName'),
      emailEl = document.querySelector('.email'),
      passwordEl = document.querySelector('.password');

// Message for Error
function errorMessage(target, message) {
    target.nextElementSibling.style.display = 'block';
    const error = target.nextElementSibling.nextElementSibling;
    error.style.opacity = '1';
    error.innerText = message;
}

// Message for Succed
function succedMessage(target) {
    target.nextElementSibling.style.display = 'none';
    const error = target.nextElementSibling.nextElementSibling;
    error.style.opacity = '0';
}

// Submit form Event Listener
formEl.addEventListener('submit', e => {
    e.preventDefault();

    const firstNameValue = firstNameEl.value,
          lastNameValue = lastNameEl.value,
          emailValue = emailEl.value,
          passwordValue = passwordEl.value;
    
    if(firstNameValue === '') {
        errorMessage(firstNameEl, 'First name cannot be empty');
    }else {
        succedMessage(firstNameEl);
    }

    if(lastNameValue === '') {
        errorMessage(lastNameEl, 'Last name cannot be empty');
    }else {
        succedMessage(lastNameEl);
    }

    if(emailValue === '') {
        errorMessage(emailEl, 'Email cannot be empty');
    }else if(!validateEmail(emailValue)) {
        errorMessage(emailEl, 'Look like this is not an email');
    }else {
        succedMessage(emailEl);
    }

    if(passwordValue === '') {
        errorMessage(passwordEl, 'Password cannot be empty');
    }else {
        succedMessage(passwordEl);
    }


});

// Email Validation
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}