// sakura
(function ($) {
    "use strict";
    $('.sakura-falling').sakura('start', {
    images: [
        './assets/img/icons8-violet-flower-96.png',
        './assets/img/icons8-spa-flower-48.png',
    ]
});
})(jQuery);


// play music
$(document).ready(function () {
    const myaudio = $("#my_audio")[0];
    const $toggleMusicBtn = $("#toggleMusic");
    const $musicIcon = $("#musicIcon");

    $toggleMusicBtn.on("click", function (e) {
        e.stopPropagation();

        if (myaudio.paused) {
            myaudio.play();
            $musicIcon.removeClass('bx-play').addClass('bx-pause');

        } else {
            myaudio.pause();
            $musicIcon.removeClass('bx-pause').addClass('bx-play');
        }
    });

    const $toggleDatNightBtn = $("#toggleDayNight");
    const $dayNightImg = $toggleDatNightBtn.find("img");


    $toggleDatNightBtn.on("click", function (e) {
        if ($("body").hasClass("dark-mode")) {
            $("body").removeClass("dark-mode").addClass("light-mode");
            $dayNightImg.attr("src", "./assets/img/night.png"); 
        } else {
            $("body").removeClass("light-mode").addClass("dark-mode");
            $dayNightImg.attr("src", "./assets/img/day.png"); 
        }
    });
});


// Set the date we're counting down to
var countDownDate = new Date("dec 04, 2023 19:00:00").getTime();

var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '1.5rem',
    duration: 1000,
    delay: 200,
    reset: false
});


sr.reveal(`.groom`, { origin: 'left', delay: 700 })
sr.reveal(`.bride`, { origin: 'right', delay: 700 })
sr.reveal(`.gif,.home_txt`, { delay: 200, origin: 'top' })
sr.reveal(`.home_txt_line`, { delay: 200, origin: 'top' })
sr.reveal(`.top-right-decoration,.bottom-left-decoration`, { origin: 'left', delay: 200 })
sr.reveal(`.title-line,.hindi_text`, { delay: 200, origin: 'bottom' })
sr.reveal(`.venue`, { origin: 'left', delay: 200 })



var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

