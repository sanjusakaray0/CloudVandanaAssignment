function validateForm() {
    var firstname=document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var dob = document.getElementById("dob");
    var country = document.getElementById("country");
    var gender = document.getElementById("gender");
    var profession = document.getElementById("profession");
    var email = document.getElementById("email");
    var phonenumber = document.getElementById("phonenumber");
    let string = "";
    var regEx = /^[A-Z a-z]+$/;
    var regEx2 = /[A-Z][a-z]*/;
    var emailRegEx = /^[a-z0-9]/;
    if(firstname.value.trim() == ""){
        string = string + "First Name should not be empty\n";
    }
    else if(!firstname.value.trim().match(regEx)){
        string = string + "First Name must contain alphabets only\n";
    }
    else if(!firstname.value.trim().match(regEx2)) {
        string = string + "First Letter must be in Uppercase\n"
    }
    
    if(lastname.value.trim() == "") {
        string = string + "Last Name should not be empty\n";
    }
    else if(!lastname.value.trim().match(regEx)){
        string = string + "Last Name must contain alphabets only\n";
    }
    else if(!lastname.value.trim().match(regEx2)) {
        string = string + "Last Letter must be in Uppercase\n"
    }

    if(!email.value.trim().match(emailRegEx)) {
        string = string + "Email is not valid";
    }

    if(phonenumber.value.length != 10) {
        string = string + "Phone Number is not valid\n";
    }

    if(string == ""){
        alert("First Name: " + firstname.value + "\n"
                + "Last Name: " + lastname.value + "\n"
                + "DOB: " + dob.value + "\n"
                + "Country: " + country.value + "\n"
                + "Gender: " + gender.value + "\n"
                + "Profession: " + profession.value + "\n"
                + "Email: " + email.value + "\n"
                + "Phone Number: " + phonenumber.value);
    }
    else {
        alert(string);
        return false;
    }
    
}