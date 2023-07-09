let str = document.getElementById("input");

g = ".";
f = "@";

function validate() {

    if (str.value.includes(g) && str.value.includes(f)) {
        console.log("true");
        window.location.href = "https://monkeys-team.netlify.app/"
    }
    else {
        console.log("false");
        alert("Please make sure you entered a valid Email Adress.");
    }

}