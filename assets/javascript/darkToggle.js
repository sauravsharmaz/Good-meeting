$(document).ready(function () {
    // dark mode toggle functionality
    const moon = $(".moon");
    const sun = $(".sun");

    // get value from localStorage for nightMode
    let user_scheme = localStorage.getItem('goodmeeting_today_color_scheme')
    if (user_scheme == 'dark') {
        // since it's by default light theme
        // and we found dark in localStorage
        toggleDarkMode(moon, sun)
    }
    // if there is nothing in localStorage, light theme will be enabled automatically

    // check if there is dark mode in user's system color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode(moon, sun)
        console.log('dark theme applied based on user system theme')
    }

    $('.darkSwitch').click(function () {
        toggleDarkMode(moon, sun)
    })
});

function setColorScheme(scheme) {
    if (scheme == 'dark') {
        // set dark theme
    }

}

function getPreferredColorScheme() {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    }
    return 'light';
}

if (window.matchMedia) {
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
}

function toggleDarkMode(moon, sun) {
    moon.toggleClass('active');
    moon.toggleClass('opacityfull');
    sun.toggleClass('opacityzero')
    if (moon.hasClass('active')) {
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
        localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
    } else {
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
        localStorage.setItem("goodmeeting_today_color_scheme", 'light');
    }
}