// Memanggil fungsi ketika halaman telah dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', function() {
    // Memberikan pesan sederhana di konsol ketika halaman dimuat
    console.log('Halaman telah dimuat sepenuhnya.');

    // Menambahkan event listener untuk elemen dengan ID "about"
    var aboutSection = document.getElementById('about');
    aboutSection.addEventListener('click', function() {
        alert('Anda mengklik bagian "Tentang Saya"!');
    });

    // Menambahkan event listener untuk elemen dengan ID "projects"
    var projectsSection = document.getElementById('projects');
    projectsSection.addEventListener('click', function() {
        alert('Anda mengklik bagian "Proyek Saya"!');
    });
});
