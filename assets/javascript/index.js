console.log(window.innerHeight);
const headerContainer = document.querySelector('.headerContainer');
const headerBox = document.querySelector('.headerBox');
window.onscroll =  () => {
    if (window.scrollY > 100) {
        headerContainer.classList.add('fixed');
        headerBox.classList.add('headerBoxFixed');

        console.log('fixed');
    } else {
        headerContainer.classList.remove('fixed');
        
        headerBox.classList.remove('headerBoxFixed');
    }
}