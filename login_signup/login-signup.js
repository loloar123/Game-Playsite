document.querySelector("#show-login1").addEventListener("click", function () {
    document.querySelector(".popup1").classList.add("active1");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup4").classList.remove("active4");
})

document.getElementById("message").style.display = "block";

document.querySelector("#show-login3").addEventListener("click", function () {
    document.querySelector(".popup1").classList.add("active1");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup4").classList.remove("active4");
})

document.querySelector("#show-login4").addEventListener("click", function () {
    document.querySelector(".popup1").classList.add("active1");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup4").classList.remove("active4");
})

document.querySelector("#show-login5").addEventListener("click", function () {
    document.querySelector(".popup1").classList.add("active1");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup4").classList.remove("active4");
})

document.querySelector("#show-login2").addEventListener("click", function () {
    document.querySelector(".popup1").classList.add("active1");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup4").classList.remove("active4");
})

document.querySelector(".popup1 .close-btn1").addEventListener("click", function () {
    document.querySelector(".popup1").classList.remove("active1");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup4").classList.remove("active4");
})

let str = document.getElementById("email1");

verifyEmail = false;

g = ".";
f = "@";

function validate() {

    if (str.value.includes(g) && str.value.includes(f)) {
        console.log("true");
        verifyEmail = true;
        // alert("Please make sure you entered a valid Email Adress.");
        // document.querySelector(".login-Li").classList.remove;
    }
    else {
        console.log("false");
        alert("Please make sure you entered a valid Email Adress.");
    }

}

let str2 = document.getElementById("email2");

verifyEmail2 = false;

g = ".";
f = "@";

function validate2() {

    if (str2.value.includes(g) && str2.value.includes(f)) {
        console.log("true");
        verifyEmail2 = true;
        // alert("Please make sure you entered a valid Email Adress.");
        // document.querySelector(".login-Li").classList.remove;
    }
    else {
        console.log("false");
        alert("Please make sure you entered a valid Email Adress.");
    }

}


verifyPass = false;
let count = 0;
function checkpassword() {


    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    // When the user clicks on the password field, show the message box
    // myInput.onfocus = function () {
    //     document.getElementById("message").style.display = "block";
    // }

    // When the user clicks outside of the password field, hide the message box
    // myInput.onblur = function () {
    //     document.getElementById("message").style.display = "none";
    // }

    // When the user starts to type something inside the password field
    // myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        count += 1;
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }


    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        count += 1;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        count += 1;
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
    // }

    if (count >= 3) {
        verifyPass = true;
        document.getElementById("message").style.display = "none";
    }


    if (verifyEmail == true && verifyPass == true) {
        document.querySelector(".login-Li").style.display = "none";
        document.querySelector(".login-Li2").style.display = "none";
        document.querySelector(".popup1").style.display = "none";
    }
}


var myInput = document.getElementById("psw2");
// When the user clicks on the password field, show the message box
// myInput.onfocus = function () {
//     document.getElementById("message").style.display = "block";
// }

// When the user clicks outside of the password field, hide the message box
// myInput.onblur = function () {
//     document.getElementById("message").style.display = "none";
// }

count2 = 0;
var repass = document.getElementById("re-psw");


var letter = document.getElementById("letter");
var number = document.getElementById("number");
var length = document.getElementById("length");



// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        count2 += 1;
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }


    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        count2 += 1;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        count2 += 1;
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}


function checkpassword2() {

    if (count2 >= 3 && myInput.value == repass.value) {
        verifyPass2 = true;
        document.getElementById("message").style.display = "none";

    } else {
        alert("Passwords dosnt match");
    }


    if (verifyEmail2 == true && verifyPass2 == true) {
        // document.querySelector(".login-Li").style.display = "none";
        // document.querySelector(".login-Li2").style.display = "none";
        // document.querySelector(".popup1").style.display = "none";
        // document.querySelector(".popup2").style.display = "none";
        // document.querySelector(".popup4").style.display = "none";
        document.querySelector(".popup1").classList.add("active1");
        document.querySelector(".popup2").classList.remove("active2");
        document.querySelector(".popup4").classList.remove("active4");
    }
}

let str3 = document.getElementById("email4");

verifyEmail3 = false;


function validate3() {

    if (str3.value.includes(g) && str3.value.includes(f)) {
        console.log("true");
        verifyEmail3 = true;
        // alert("Please make sure you entered a valid Email Adress.");
        // document.querySelector(".login-Li").classList.remove;
    }
    else {
        console.log("false");
        alert("Please make sure you entered a valid Email Adress.");
    }

    if (verifyEmail3) {
        document.querySelector(".form4").style.display = "none";
        document.querySelector(".thanku").style.display = "block";
    }
}


document.querySelector("#show-signup").addEventListener("click", function () {
    document.querySelector(".popup2").classList.add("active2");
    document.querySelector(".popup1").classList.remove("active1");
    document.querySelector(".popup4").classList.remove("active4");
})

document.querySelector("#show-signup2").addEventListener("click", function () {
    document.querySelector(".popup2").classList.add("active2");
    document.querySelector(".popup1").classList.remove("active1");
    document.querySelector(".popup4").classList.remove("active4");
})


document.querySelector(".popup2 .close-btn2").addEventListener("click", function () {
    document.querySelector(".popup2").classList.remove("active2");
})

document.querySelector("#forgot").addEventListener("click", function () {
    document.querySelector(".popup4").classList.add("active4");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup1").classList.remove("active1");
})

document.querySelector("#forgot2").addEventListener("click", function () {
    document.querySelector(".popup4").classList.add("active4");
    document.querySelector(".popup2").classList.remove("active2");
    document.querySelector(".popup1").classList.remove("active1");
})

document.querySelector(".popup4 .close-btn4").addEventListener("click", function () {
    document.querySelector(".popup4").classList.remove("active4");
})