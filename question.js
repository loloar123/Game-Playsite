// alert("hello");
function init(){
    declareBodyEvents()
}

function declareBodyEvents(){
    let id_p = document.querySelector("#id_p");
    let mainSection = document.querySelector("#mainSection");
    let sectionA = document.querySelector("#sectionA");
    let sectionB = document.querySelector("#sectionB");
    let sectionC = document.querySelector("#sectionC");
    
    mainSection.addEventListener("click", function(){
        document.querySelector("#id_p").innerHTML = "The Panel type is one of the most important aspects when you select a gaming monitor. There are three main types of panels- TN panels VA panels and IPS panels. We will explore the most significant differences and find out which suits you best.";
    })

    sectionA.addEventListener("click", function(){
        document.querySelector("#id_p").innerHTML = "TN panels usually have static contrast ratios of 1000:1, which is much lower than VA panels and about the same as IPS panels. <br> Pros: They have the lowest prices of the three-panel types. If you compare three identical monitors with the only difference being the panel type, the monitor with TN panel will have the lowest price. TN panels have the lowest response times and the highest refresh rates for the money. <br> <br> Cons: They have the worst viewing angles and color performance of the three-panel types. The color distortion can be noticed even a few degrees away from the center of the screen.";
    })
    
    sectionB.addEventListener("click", function(){
        document.querySelector("#id_p").innerHTML = "Pros: Some of the main advantages of VA panels include high contrast ratios typically of 2000:1 and 5000:1. They have much better viewing angles and color reproduction than TN panels but still lower than IPS Panels. VA panels are also less prone to “backlight bleed” or “clouding” since they are good at blocking backlight leakage. The entire surface of an LCD panel is light from behind by a light source (CCFL or LED). Backlight bleeding occurs when this light is not completely blocked from reaching the surface of the screen. <br> <br> Cons: They are more expensive than the TN panels.VA panels still don’t have the best color reproduction and viewing angles. VA panels have significantly higher response times than TN panels, which can lead to more motion blur. Although the Backlight strobing technology has reduced the visual appearances of this issue a bit.";
    })
    
    sectionC.addEventListener("click", function(){
        document.querySelector("#id_p").innerHTML = "Pros: IPS panels have the best viewing angles, best color accuracy and best color consistency of all the different panel types. This makes IPS panel monitors ideal for color-critical work. In the recent years, IPS panels have got the same high refresh rates as the TN panels. And the pixel responsiveness has also got better, as well as the prices are getting lower. This also makes IPS panels an excellent candidate as a gaming monitor. Whether it is for gaming, photo editing, graphical work, video or watching movies IPS panel can handle them all at the same time. Many modern IPS panels are more responsive ( have lower response time) than VA panels. <br> <br> Cons: There is almost always some cons when there are pros, so let’s explore them. First of all, the price of IPS panels are significantly higher than their counterpart TN panel monitors, but in our opinion, it is worth it. The another thing is that IPS panels still don’t have as low response times as TN panels, but they are getting there. So if you play faced paced games, then there occur more motion blur and ghosting compared to TN panels. Another weakness of IPS panels are the relatively lower contrast ratios compared to VA panels. Nothing less modern IPS panels have a typically static contrast ratio of 1000:1 similar to TN panels. IPS glow is another con of these panel types, which is a glow of light when viewing dark content from off angles.";
    })

    
}



init();