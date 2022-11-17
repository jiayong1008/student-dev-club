document.addEventListener('DOMContentLoaded', function() {
    const form=document.getElementById('form');
    const fullname=document.getElementById('fullname');
    const email=document.getElementById('email');

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
        form.reset();
    });


    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    };
    
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };
    
    const isValidName = name => {
        var regName = /^[a-zA-Z ]*$/; 
        return regName.test(name)
    }
    
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const validateInputs = () => {
        const fullnameValue = fullname.value.trim();
        const emailValue = email.value.trim();

        if(!isValidName(fullnameValue)) {
            setError(fullname, 'Please enter your name properly');
        } else {
            setSuccess(fullname);
        }
    
        if(!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }
    };

});