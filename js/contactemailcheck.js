let check = document.querySelector(".checkemail");
const element = document.getElementById("form");
const element2 = document.getElementById("thanks");

g = ".";
f = "@";

function validateTwo() {
    
    if (check.value.includes(g) && check.value.includes(f)) {
        console.log("true");
        element.remove();
        element2.style.display ="flex";
    }
    else {
        console.log("false");
        document.querySelector(".error").style.color ="red";
        document.querySelector(".error").innerHTML = "Please make sure you entered a valid Email Adress.";
        // alert("Please make sure you entered a valid Email Adress.");
    }

}