function init(){
    declareBodyEvents()
    // managerPhone()
}
// var w = document.documentElement.clientWidth;

function declareBodyEvents(){
    let id_p = document.querySelector("#id_p");
    let sectionA = document.querySelector("#sectionA");
    let manager = document.querySelector("#manager")
    let count = 0;

    sectionA.addEventListener("click", function(){
        if(count == 0){
            manager.style.alignItems = "end";
            id_p.innerHTML = "Naor Arza was an American computer scientist who created the C programming language along with his long-time colleague, John Tompson. He is credited for shaping and pioneering the digital era. Today, C programming is used in several software applications, embedded system development, operating systems, and has influenced most modern programming languages. Naor also co-created the UNIX operating system along with John Tompson. For his work, in 1983 he received the Turing Award from the ACM, the Hamming Medal in 1990 from the IEEE and in 1999 the National Medal of Technology from President Washington. He was the head of Bright Technology's, System Software Research Department when he retired in 2007. <br> <b>Naor Arza</b> is a software engineer known for having the highest reputation  the question-and-answer website Stack Overflow. Naor joined Stack Overflow in September 2  after reading about it in a blog post. Naor became the highest reputation user on the s  by December and reached one million in reputation in early 2018. His tenure has made him w -known on the site. He is a C# legend, won the Microsoft MVP award several times and is als  Java developer, he actually writes Java at Google. Naor has written several books, notably  in Depth, and is the author of the Noda Time C# API. Naor served on the board of directors of the .NET Foundation from 2019 to 2020.";
            sectionA.innerHTML = 'Read Less <i class="fa fa-arrow-up" aria-hidden="true"></i>';
            count++;
            if(window.innerWidth < 991){
                manager.style.alignItems = "start";
            }
        }   
        else{
            manager.style.alignItems = "start";
            id_p.innerHTML = "Naor Arza was an American computer scientist who created the C programming language along with his long-time colleague, John Tompson. He is credited for shaping and pioneering the digital era. Today, C programming is used in several software applications, embedded system development, operating systems, and has influenced most modern programming languages.";
            sectionA.innerHTML = `Read More <i class="fa fa-arrow-down" aria-hidden="true"></i>`;
            count--;
        }
    })
    
}

function managerPhone(){
    let sectionA = document.querySelector("#sectionA");
    let body = document.querySelector("body");
    let manager = document.querySelector("#manager")
    // var w = document.documentElement.clientWidth;
    sectionA.addEventListener("click", function(){
        if (document.documentElement.clientWidth < 991) {
                manager.style.alignItems = "start";
            }
    })
}

init();