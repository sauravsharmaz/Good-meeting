
$(document).ready(function(){
const moon = $(".moon");
const sun = $(".sun");
// make headerContainer fixed on scrolling
window.onscroll =  () => {
    if (window.scrollY > 110) {
    console.log("fixed")
        $('.headerContainer').addClass('fixed');
        $('.headerBox').addClass('headerBoxFixed');
        $('.section2').addClass('section2Fixed')
    } else {
        $('.headerContainer').removeClass('fixed');
        $('.headerBox').removeClass('headerBoxFixed');
        $('.section2').removeClass   ('section2Fixed')
    }
}
// dark mode toggle functionality

$('.darkSwitch').click(function() {
    moon.toggleClass('active');
    moon.toggleClass('opacityfull');
    sun.toggleClass('opacityzero')
    if(moon.hasClass('active')){
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
        
      setTimeout(() => {
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
      }, 100);
    }
})
});

// setTimeout(() => {
//     sun.addClass('opacity1')
// }, 200);

// moon.toggleClass('active');
// sun.toggleClass('width')
// sun.toggleClass('opacity');
// sun.removeClass('opacityfull')


// sun.removeClass('opacity1');
//         sun.removeClass('opacity')
//     setTimeout(() => {
//         sun.addClass('opacityfull')
//     }, 1000);