function checkUser() {

    if (txtMobileNo.value == "4444444444" && txtPwd.value == "demo") {

        return true;
    }
    else {
        alert('Invalid username or password.' + txtMobileNo.value);
        return false;
    }


}