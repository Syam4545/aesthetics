function login() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var select = document.getElementById('select');
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));


    if (name.value == "") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please enter username";
    }
    else if (email.value == "") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please enter Email Id";

    }
    else if (password.value == "") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please enter password";
    }

    else if (select.value == "Account Type") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please Select account type";
    }

    else {
        document.getElementById('form').submit();


    }
}