
$(document).ready(function(){
const moon = $(".moon");
const sun = $(".sun");
const circle = $(".circle");
// make headerContainer fixed on scrolling
window.onscroll =  () => {
    if (window.scrollY > 99) {
        $('.headerContainer').addClass('fixed');
        $('.headerBox').addClass('headerBoxFixed');
    } else {
        $('.headerContainer').removeClass('fixed');
        $('.headerBox').removeClass('headerBoxFixed');
    }
}
// dark mode toggle functionality

$('.darkSwitch').click(function() {
    circle.toggleClass('hide')
    moon.toggleClass('hide');
    if(circle.hasClass('hide')){
        moon.css("", "yellow")
        let logoContainerImg = $('.logoContainer img')[0].remove();
        $(".logoContainer").html(`<img src = "../assets/images/logo2.png"></img>`)
        document.body.style.backgroundColor = "#0E1525";
        document.querySelector('.headerContainer').style.backgroundColor = "#0E1525";
        $('p').addClass('white');
        $('h1').addClass('white');
        $('a').addClass('white');
        $('.subHeading1').addClass('white');
        $('#havea-email').addClass('havea-email');
        $('.meetingLink').addClass('meetingLink-dark');
        
    }else{
        let logoContainerImg = $('.logoContainer img')[0].remove();
        $(".logoContainer").html(`<img src = "../assets/images/logo.png"></img>`)
        document.body.style.backgroundColor = "white";
        document.querySelector('.headerContainer').style.backgroundColor = "white";
        $('p').removeClass('white');
        $('h1').removeClass('white');
        $('a').removeClass('white');
        $('.subHeading1').removeClass('white');
        $('#havea-email').removeClass('havea-email');
        $('.meetingLink').removeClass('meetingLink-dark');
    }
})
});