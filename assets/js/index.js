
// loading screen 
jQuery(function(){
    $(".loading").fadeOut(8000, function(){
        $("body").css({overflow : "auto"});
    });
});

// open and close menu 
const menuWidth = $(".menu").outerWidth();
$(".menu").css({left : `-${menuWidth}px`});
$(".open").on("click", function(){
    $(".menu").animate({left : `0px`}, 400);
    $(".open").animate({marginLeft : `${menuWidth}`});
});
$(".closeBtn").on("click" , function(){
    $(".menu").animate({left : `-${menuWidth}px`}, 400);
    $(".open").animate({marginLeft : `12px`});
});



// scroll 

$(".menu a ").on("click" , function(){
    const currentSection = $(this).attr("href");
    const currentSectionOffsetTop = $(currentSection).offset().top;
    $("html , body ").animate({scrollTop : currentSectionOffsetTop}, 3000);
});

// open and close  singer div 
$(".duration h3 ").on("click" , function(){
    $('.inner').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});

// counter
let countDownDate = new Date("feb 22 , 2025 00:00:00").getTime();
let counter = setInterval(() =>{
    let dateNow = new Date().getTime();
    let difference = countDownDate - dateNow;
    let days = Math.floor(difference / (1000*60*60*24));
    let hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
    let mins = Math.floor((difference % (1000*60*60))/(1000*60));
    let secs = Math.floor((difference % (1000*60)) / (1000));
    $(".days").html(`${days} Days`);
    $(".hours").html(`${hours} Hours`);
    $(".min").html(`${mins} Minutes`);
    $(".sec").html(`${secs} Seconds`)
    if (difference <= 0){
        clearInterval(counter);
    }
},1000)


// textarea 
var maxCharsLength = 100;
$("textarea").on("keyup" , function (){
    var charsNum = $(this).val().length;
    var amountLeft = maxCharsLength - charsNum;
    if (amountLeft <=0 ){
        $(".characterNumbers").text("0");
    }
    else{
        $(".characterNumbers").text(amountLeft)
    }
});





