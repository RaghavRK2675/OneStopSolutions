function scrollToEducationBox() {
    const educationBox = document.querySelector(".huge-buttons-section");
    if (educationBox) {
        const offset = -270; 
        const educationBoxTop = educationBox.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: educationBoxTop + offset,
            behavior: "smooth"
        });
    }
}


$(document).ready(function(){
let typed = new Typed('#welcome-heading',{
strings : ['One Stop Solutions'],
typeSpeed : 100,


})
})
// Start progress animation when document is ready
$(document).ready(function () {
$(".bar").animate({
width: "100%"
}, 3000);
// Hide the loader after animation completes
setTimeout(function () {
$(".loading-container").fadeOut();
}, 3000);
});

$(document).ready(function(){
$("#card1").hover(function(){
$(this).addClass('shadow-lg').css("transition", "all 0.3s");
}, function(){
$(this).removeClass('shadow-lg');
});

$("#card2").hover(function(){
$(this).addClass('shadow-lg').css("transition", "all 0.3s");
}, function(){
$(this).removeClass('shadow-lg');
});

$("#card3").hover(function(){
$(this).addClass('shadow-lg').css("transition", "all 0.3s");
}, function(){
$(this).removeClass('shadow-lg');
});
});