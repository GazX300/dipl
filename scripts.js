// Функція для зміни активної секції
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
    if (sectionNumber === 1) {
        var secondSection = document.getElementById('section2');
        secondSection.style.display = 'none';
    } else {
        var secondSection = document.getElementById('section2');
        secondSection.style.display = 'block';
    }
    // Приховати першу секцію, якщо відкрита друга
    if (sectionNumber === 2) {
        var secondSection = document.getElementById('section1');
        secondSection.style.display = 'none';
    } else {
        var secondSection = document.getElementById('section1');
        secondSection.style.display = 'block';
    }
}
