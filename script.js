///Users/admin/Desktop/Professional_Portfolio/RaceCalender/index.html

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Start fixed positioning after scrolling 50px
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
});