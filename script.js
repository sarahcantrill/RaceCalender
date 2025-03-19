///Users/admin/Desktop/Professional_Portfolio/RaceCalender/index.html

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
});

document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('event-name').value;
    const type = document.getElementById('event-type').value;
    const track = document.getElementById('event-track').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const driversSelect = document.getElementById('event-drivers');
    const selectedDriver = driversSelect.options[driversSelect.selectedIndex].text;

    const dateTime = new Date(`${date}T${time}`); 

}