// Radial
var radial = document.querySelector('.radial');

var mouseX, mouseY;

function ticker() {
    radial.style.background = `radial-gradient(300px at ` + mouseX + `px ` + mouseY + `px, rgba(150, 150, 150, 0.1), transparent 50%)`;
}

setInterval(ticker, 16); // 33 milliseconds is about 30 fps while 16 would be roughly 60fps

document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// Nav Behaviour
window.addEventListener('scroll', function(e) {
    setActiveNav();
});

function setActiveNav() {
    var sections = document.querySelectorAll('.row-item');

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
            section.classList.remove('active');

        if (section.getBoundingClientRect().top < 150) {
            var sectionId = section.id;
            var navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

            if (navLink) {
                // Remove "active" class from all navigation links
                var navLinks = document.querySelectorAll('nav a');
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                    });

                // Add "active" class to the corresponding navigation link
                navLink.classList.add('active');
                section.classList.add('active');
            }
        }
    }
}

var i = 0;
var txt = 'Raymund Hermoso'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */


if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
