function login() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var select = document.getElementById('select');
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));


    if (name.value == "") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please enter username";
        return false;
    }
    else if (email.value == "") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please enter Email Id";

        return false;
    }
    else if (password.value == "") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please enter password";
        return false;
    }

    else if (select.value == "Account Type") {
        myModal.show();
        document.getElementById('alert1').innerHTML = "please Select account type";
        return false;
    }

    else {
       return true;


    }
}