document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman telah dimuat sepenuhnya.');

    const aboutSection = document.getElementById('about');

    if (aboutSection) {
        aboutSection.addEventListener('click', function() {
            alert('Anda mengklik bagian "Tentang Saya"!');
        });
    }

    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
        projectsSection.addEventListener('click', function() {
            alert('Anda mengklik bagian "Proyek Saya"!');
        });
    }
});
