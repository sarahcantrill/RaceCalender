///Users/admin/Desktop/Professional_Portfolio/RaceCalender/index.html

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 10;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-nav');
            }
        });
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

    const dateTime = new Date(`${date}T${time}`); //combine date and time

    const newEvent = {
        name,
        type,
        track,
        date: dateTime.toLocaleDateString(),
        time: dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        driver: selectedDriver,
    };

    displayEvent(newEvent);

    this.reset(); //clean form after submission

});

    function displayEvent(event) {

        const eventSubmission = document.getElementById('event-container');
        const eventDisplay = document.getElementById('event-display');
        eventDisplay.style.display = 'block'; 

        const eventContainer = document.createElement("div");
        eventContainer.className = "event-container";

        const eventId = 'event-' + Date.now();
        eventContainer.id = eventId;

        // Add the event details to the new event container
        eventContainer.innerHTML = `
        <div class="event-content">
        <strong>Event Name:</strong> ${event.name} <br>
        <strong>Event Type:</strong> ${event.type} <br>
        <strong>Track:</strong> ${event.track} <br>
        <strong>Date:</strong> ${event.date} <br>
        <strong>Time:</strong> ${event.time} <br>
        <strong>Driver:</strong> ${event.driver} <br>
        </div>
        
       <div class="event-actions">
        <button class="edit-btn" onclick="editEvent('${eventId}')">Edit</button>
        <button class="delete-btn" onclick="deleteEvent('${eventId}')">Delete</button>
        </div>
        `;

        document.getElementById('event-submissions').appendChild(eventContainer);
    }

    function deleteEvent(eventId) {
        const eventToDelete = document.getElementById(eventId);
        if (eventToDelete) {
            eventToDelete.remove();
            
            // Hide the event display if no events are left
            const eventSubmissions = document.getElementById('event-submissions');
            if (eventSubmissions.children.length === 0) {
                document.getElementById('event-display').style.display = 'none';
            }
        }
    }
