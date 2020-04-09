var buttons=document.querySelectorAll(".getstart");

var home_btn=document.querySelector("#home");


var interest_btn=document.querySelector("#interests");

var contact_btn=document.querySelector("#contact");

home_btn.addEventListener("click",function() {
    $('html,body').animate({
        scrollTop: $("#part-one").offset().top},
        'slow');
});
buttons[0].addEventListener("click",function() {
    $('html,body').animate({
        scrollTop: $("#part-two").offset().top},
        'slow');
});

buttons[1].addEventListener("click",function() {
    $('html,body').animate({
        scrollTop: $("#part-two").offset().top},
        'slow');
});


interest_btn.addEventListener("click",function() {
    $('html,body').animate({
        scrollTop: $("#part-three").offset().top},
        'slow');
});


contact_btn.addEventListener("click",function() {
    $('html,body').animate({
        scrollTop: $("#part-four").offset().top},
        'slow');
});