    
    

    
    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
    }

    // להוסיף את שני השורות האלה שורה מתחת לבודי
// <div id="progressbar"></div>
/* <div id="scrollPath"></div> */

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }
    else{
        icon.src = "images/moon.png";
    }
}
