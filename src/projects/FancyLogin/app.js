

const raiseLabel = function() {
    const userNameLabel = document.querySelector('label[for="userName"]');
    const userNameInput = document.querySelector('input[name="userName"]');

    const passwordLabel = document.querySelector('label[for="password"]');
    const passwordInput = document.querySelector('input[name="password"]');


    userNameInput.addEventListener('focus', function(event) {
        userNameLabel.classList.add('labelActive');
    });

    userNameInput.addEventListener('blur', function (event) {
        
        if(userNameInput.value.length > 0 ){
        console.log(userNameInput.value.length)
        } else {
            userNameLabel.classList.remove('labelActive');
        }
        
    });

    passwordInput.addEventListener('focus', function (event) {
        passwordLabel.classList.add('labelActive');
    });

    passwordInput.addEventListener('blur', function (event) {

        if (passwordInput.value.length > 0) {
            console.log(userNameInput.value.length)
        } else {
            passwordLabel.classList.remove('labelActive');
        }

    });
}





const app = function() {
    raiseLabel();
}



app();