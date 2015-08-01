   function lh_password_changer_validate_form() {
        var pass1 = document.getElementById("lh_password_changer-password1").value;
        var pass2 = document.getElementById("lh_password_changer-password2").value;

    var goodColor = "#66cc66";
    var badColor = "#ff6666";


        if (pass1 != pass2) {
            //alert("Passwords Do not match");
            document.getElementById("lh_password_changer-password1").style.borderColor = badColor;
            document.getElementById("lh_password_changer-password2").style.borderColor = badColor;
	    document.getElementById("lh_password_changer-confirmMessage").innerHTML = "Passwords do not match";


return false;

        } else {
            document.getElementById("lh_password_changer-password1").style.borderColor = goodColor;
            document.getElementById("lh_password_changer-password2").style.borderColor = goodColor;
	    document.getElementById("lh_password_changer-confirmMessage").innerHTML = "Passwords match";

return true;


}

    }


if (document.getElementById("lh_password_changer-form")){

document.getElementById("lh_password_changer-password2").addEventListener("keyup", lh_password_changer_validate_form);

document.getElementById("lh_password_changer-form").onsubmit= function(){return lh_password_changer_validate_form();};

}