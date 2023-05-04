// TIME
// Set the date we're counting down to
var countDownDate = new Date("Augest 25, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if ( (seconds === 0) || (seconds === 1) || (seconds === 2) || (seconds === 3)
    || (seconds === 4) || (seconds === 5) || (seconds === 6)
    || (seconds === 7) || (seconds === 8) || (seconds === 9)) {
        seconds = "0" + seconds;
    };
    if ( (minutes === 0) || (minutes === 1) || (minutes === 2) || (minutes === 3)
    || (minutes === 4) || (minutes === 5) || (minutes === 6)
    || (minutes === 7) || (minutes === 8) || (minutes === 9)) {
        minutes = "0" + minutes;
    };
    if ( (hours === 0) || (hours === 1) || (hours === 2) || (hours === 3)
    || (hours === 4) || (hours === 5) || (hours === 6)
    || (hours === 7) || (hours === 8) || (hours === 9)) {
        hours = "0" + hours;
    };
    if ( (days === 0) || (days === 1) || (days === 2) || (days === 3)
    || (days === 4) || (days === 5) || (days === 6)
    || (days === 7) || (days === 8) || (days === 9)) {
        days = "0" + days;
    };

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =  `<div class="item__time">
    <div class="item__num">${days}</div><div class="item__text">DAYS</div></div>` +
    `<div class="item__time">
    <div class="item__num">${hours}</div><div class="item__text">HOURS</div></div>` +
    `<div class="item__time">
    <div class="item__num">${minutes}</div><div class="item__text">MINUTES</div></div>` +
    `<div class="item__time">
    <div class="item__num">${seconds}</div><div class="item__text">SECONDS</div></div>`;

    //+ hours + minutes + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$( ".telegram" ).mouseover(function() {
    $( ".step1" ).hide();
    $( ".step2" ).show().css("display", "block");
});

$( ".telegram" ).mouseout(function() {
    $( ".step2" ).hide();
    $( ".step1" ).show();
});


$( ".file1" ).mouseover(function() {
    $( ".step3" ).hide();
    $( ".step4" ).show().css("display", "block");
});

$( ".file1" ).mouseout(function() {
    $( ".step4" ).hide();
    $( ".step3" ).show();
});


$( ".file2" ).mouseover(function() {
    $( ".step5" ).hide();
    $( ".step6" ).show().css("display", "block");
});

$( ".file2" ).mouseout(function() {
    $( ".step6" ).hide();
    $( ".step5  " ).show();
});


$( ".DxSale" ).mouseover(function() {
    $( ".step7" ).hide();
    $( ".step8" ).show().css("display", "block");
});

$( ".DxSale" ).mouseout(function() {
    $( ".step8" ).hide();
    $( ".step7" ).show();
});


$(".popupOpen").click(function (e){
    e.preventDefault()
    $( ".popup" ).fadeIn().css("display", "flex");
    const menuButton = document.querySelector('.header__menu');
    const menu = document.querySelector('.side-bar');

    $('body').css('overflow', 'hidden');
})
$(".popup__btn").click(function (){
    $( ".popup" ).fadeOut();
    $('html, body').css('overflow', 'visible');
})
