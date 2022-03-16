$(document).ready(function () {

    // make headerContainer fixed on scrolling
    window.onscroll = () => {
        if (window.scrollY > 110) {
            console.log("fixed")
            $('.headerContainer').addClass('fixed');
            $('.headerBox').addClass('headerBoxFixed');
            $('.section2').addClass('section2Fixed')
        } else {
            $('.headerContainer').removeClass('fixed');
            $('.headerBox').removeClass('headerBoxFixed');
            $('.section2').removeClass('section2Fixed')
        }
    }

});
console.log(window.innerWidth)