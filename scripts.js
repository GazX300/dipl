function changeSection(sectionNumber) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var section = document.getElementById('section' + sectionNumber);
    section.classList.add('active');
}
