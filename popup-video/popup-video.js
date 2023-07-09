document.querySelectorAll('.box_all video').forEach(vid => {
    vid.onclick = () => {
    document.querySelector(".popup-video").style.display = 'block';
    document.querySelector(".popup-video video").src = vid.getAttribute('src');
    }
});

document.querySelector(".popup-video span").onclick = () =>{
    document.querySelector(".popup-video").style.display = "none";
}

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

// להכניס את הקלאס הזה בתוך הקונטיינר של הסרטונים

//  <div class="popup-video">
{/* <span>&times;</span> */}
{/* <video src="galleryVideos/Alpha - 98026.mp4" muted autoplay controls></video> */}
// </div>

//video - דוגמא לתיבת קופצת

{/* <div class="box_Video col-lg-2 col-md-3 col-sm-5 m-2"> */}
                {/* <video src="galleryVideos/Video Card - 15793.mp4" muted></video> */}


// כדי שהסרטון יתחיל כשהעכבר מעליו:
// onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"