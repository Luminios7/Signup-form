let save = document.getElementById("link");
let firstName = document.getElementsById("fname").value;
let lastName = document.getElementById("lname").value;
let email = document.getElementById("email").value.indexOf("@");
let passWord = document.getElementById("pword").value;
let error = document.getElementsByClassName("error")
save = "true";

function claim() {
    if (firstName == null) {
       error.textContent= "First Name cannot be empty";
        save = "false";
    }
    if (lastName == null) {
        error.textContent= "Last Name cannot be empty";
        save = "false";
    }
    if (email == -1) {
        error.textContent= "Looks like this is not an email";
        save == "false";
    }
    if (passWord == null) {
        error.textContent= "Password cannot be empty";
save == "false"
    }
    if (save !== "true") {
        return false
    }
}

