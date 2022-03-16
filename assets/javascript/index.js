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
const moon = $(".moon");
const sun = $(".sun");
const circle = $(".circle");
circle.click(function() {
    // circle.animate({right: '3rem'});
    // document.documentElement.classList.toggle('dark-mode');
    document.body.style.backgroundColor = "#0E1525";
    document.querySelector('.headerContainer').style.backgroundColor = "#0E1525";

    $('p').addClass('white');
    $('h1').addClass('white');
    $('a').addClass('white');
    $('.subHeading1').addClass('white');
    $('#havea-email').addClass('havea-email');
    $('.meetingLink').addClass('meetingLink-dark');
    // add white class to every p tag names
    
    
    
    // document.getElementsByTagNameNS("a").classList.add('white')
    // document.getElementsByTagNameNS("div").classList.add('white')
    
    // document.querySelectorAll('.inverted').forEach(element => {
    //     element.classList.toggle('invert');
    // });
    // document.querySelectorAll(".button1").forEach(element => {
    //     element.classList.toggle('invert');
    // });
})

