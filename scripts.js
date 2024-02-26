function changeSection(sectionNumber) {
    // Закрити всі секції
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Відкрити вибрану секцію
    var section = document.getElementById('section' + sectionNumber);
    section.classList.add('active');

    // Приховати другу секцію, якщо відкрита перша
    var secondSection = document.getElementById('section2');
    if (sectionNumber === 1 || sectionNumber === 3) {
        secondSection.style.display = 'none';
    } else {
        secondSection.style.display = 'block';
    }

    // Приховати першу секцію, якщо відкрита друга або третя
    var firstSection = document.getElementById('section1');
    if (sectionNumber === 2 || sectionNumber === 3) {
        firstSection.style.display = 'none';
    } else {
        firstSection.style.display = 'block';
    }

    // Приховати третю секцію, якщо відкрита перша або друга
    var thirdSection = document.getElementById('section3');
    if (sectionNumber === 1 || sectionNumber === 2) {
        thirdSection.style.display = 'none';
    } else {
        thirdSection.style.display = 'block';
    }
}
function backToTop() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function toggleDropdownLab() {
    var dropdown = document.getElementById("myDropdownLab");
    dropdown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

