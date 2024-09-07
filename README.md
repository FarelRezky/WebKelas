<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SENPAN CLASS</title>
    <body>
        <div class="animated-box"></div>
    </body>
    <style>
        }

body, h1, h2, h3, p {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
body {
    background: linear-gradient(to right, #ff8a7a, #DAD4B5);
    color: #333;
    padding: 0;
    margin: 0;
}
header {
    background: linear-gradient(135deg, #DAD4B5, #982B1C);
    color: #F2E8C6;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}
header h1 {
    margin: 0;
}
nav {
    margin-top: 10px;
}
nav a {
    color: #F2E8C6;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1.1rem;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}
nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fffcf2;
}
.hero {
    background: rgba(0, 0, 0, 0.5)
    color: #fff;
    text-align: center;
    padding: 100px 20px;
    background-blur: 10px;
    margin-top: 60px; /* Adjusted for fixed header */
}
.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    animation: fadeIn 2s ease-in;
}
.hero p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}
.button-primary {
    background: #800000;
    color: #F2E8C6;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.1rem;
    display: inline-block;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.button-primary:hover {
    background: #982B1C;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}
.container {
    padding: 20px;
    margin-top: 20px; /* Add space to avoid overlap with fixed header */
}
section {
    margin-bottom: 40px;
}
h2 {
    border-bottom: 2px solid #800000;
    padding-bottom: 10px;
    margin-bottom: 20px;
    position: relative;
}
h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 50px;
    background: #800000;
}
.carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.carousel-images {
    display: flex;
    transition: transform 0.5s ease;
}
.carousel-images img {
    width: 100%;
    height: auto;
    flex-shrink: 0;
}
.carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}
.carousel-controls button {
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: #F2E8C6;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background 0.3s ease;
}
.carousel-controls button:hover {
    background: rgba(0, 0, 0, 0.7);
}
.gallery-item {
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    background: #F2E8C6;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.gallery-item img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}
.gallery-item img:hover {
    transform: scale(1.05);
}
.teacher, .student {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    background: #AF8F6F;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.teacher img, .student img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 15px;
    border: 2px solid #800000;
}
.teacher-info, .student-info {
    max-width: 500px;
}
.student-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}
.student-card {
    background: #AF8F6F;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    padding: 10px;
    text-align: center;
    width: calc(25% - 20px);
    transition: transform 0.3s ease;
}
.student-card img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 5px;
    border: 2px solid #800000;
}
.student-card:hover {
    transform: scale(1.05);
}
footer {
    background: #982B1C;
    color: #F2E8C6;
    text-align: center;
    padding: 15px;
    position: fixed;
    width: 100%;
    bottom: 0;
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
    </style>
</head>
<body>
    <header>
        <h1>SENPAN CLASS</h1>
        <nav>
            <a href="#home">Home Page</a>
            <a href="#about">About Class</a>
            <a href="#gallery">Class Gallery</a>
            <a href="#teachers">Homeroom Teacher</a>
            <a href="#students">Students</a>
            <a href="https://www.instagram.com/senpan.excellent_fams?igsh=eGdnbXFrMG1udWJp" target="_blank"><b>Instagram</b></a>
            <a href="https://www.tiktok.com/@sembilanntuujuh_?is_from_webapp=1&sender_device=pc" target="_blank"><b>TikTok</b></a>
        </nav>
    </header>
    <div class="hero" id="home">
        <h2>WELCOME TO CLASS IX - 8</h2>
        <p>SENPAN CLASS Academic Year 2023-2024</p>
        <a href="#about" class="button-primary">Pelajari Lebih Lanjut</a>
    </div> 
    <div class="container">
        <section id="about">
            <h2>About Class IX - 8</h2>
            <p>Kelas IX - 8 adalah bagian dari program pendidikan kami yang bertujuan untuk memberikan pengalaman belajar yang mendalam dan menyenangkan. Kami memiliki berbagai aktivitas dan materi pembelajaran yang dirancang untuk membantu siswa mencapai potensi maksimal mereka.</p>
            <img src="Images/DuaBurung.jpeg" alt="Tentang Kelas IX - 8">
        </section>
        <section id="gallery">
            <h2>Class Gallery</h2>
            <div class="carousel-container">
                <div class="carousel-images">
                    <img src="Images/AnakKucing.jpeg" alt="Galeri 1">
                    <img src="Images/DuaBurung.jpeg" alt="Galeri 2">
                    <img src="Images/AnakKucing.jpeg" alt="Galeri 3">
                    <img src="Images/DuaBurung.jpeg" alt="Galeri 4">
                    <img src="Images/AnakKucing.jpeg" alt="Galeri 5">
                    <img src="Images/DuaBurung.jpeg" alt="Galeri 6">
                    <img src="Images/AnakKucing.jpeg" alt="Galeri 7">
                    <img src="Images/DuaBurung.jpeg" alt="Galeri 8">
                </div>
                <div class="carousel-controls">
                    <button class="prev">&#10094;</button>
                    <button class="next">&#10095;</button>
                </div>
            </div>
        </section>
        <section id="teachers">
            <h2>Homeroom Teacher</h2>
            <div class="teacher">
                <img src="Images/Okeee.webp" alt="Foto Guru">
                <div class="teacher-info">
                    <h3>Sofwatunnida, S. pd. Gr</h3>
                    <p>Wali Kelas</p>
                    <p>"Hari ini adalah 'tonggak' sejarah. Saatnya kalian mengakhiri petualangan kalian di SMP. Terimakasih telah menjadi anak-anak Bunda yang bisa membungkus rasa ego kalian dalam rasa persaudaraan yang erat selama satu tahun ini."</p>
                </div>
            </div>
        </section>
        <section id="students">
            <h2>Class Members</h2>
            <div class="student-list">
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Alfajri Ahmad Noval</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 2">
                    <p>Ananda Happy Hidayah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Andhika Nauval Alvianto</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Anggraeni Pratiwi</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Anindita Belia Putri</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Binta Ahyari Mutia</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Chalvina Izumi Hanasyah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Chiara Leonita</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Destia Yulianti</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Elsa Nurul Alwaliyyah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Fahry Arya Setiawan</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Farel Rezky Aditya</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Fathir Rizki Maulana</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Khofifah Fitriana</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Lia Rahmawati</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Maratus Sholehah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Maulydi Marsha Rizkyani</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Maura Berliani Mashuri</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Muhamad Ilham Maulana</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Muhammad Yusuf Adliyansah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Mutia Nur Hassira</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Najmah Saiedah Sariati</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Nathaniela Callista</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Nazwa Febriyani</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Oktavia Sapitri</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Putri Khania Zahra</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Raffi Mahesa</p>
                </div>
                <div class="student-card">
                    <img src="images/Okeee.webp" alt="Siswa 1">
                    <p>Rizki Agustiani</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Rizky Auliani Zahra</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>salwa Syazwana As Zahirah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Siti Nurjanah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Syahril Ardiansyah</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Syifa Azalia Safitri</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>Water Kiff Al Kautsar</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>No Name</p>
                </div>
                <div class="student-card">
                    <img src="Images/Okeee.webp" alt="Siswa 1">
                    <p>No Name</p>
                </div>
            </div>
        </section>
    </div>
    <footer>
        &copy; 2024 Website Kelas IX - 8. All rights reserved.
    </footer>
    </script>
const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const carouselImages = document.querySelector('.carousel-images');
        let currentIndex = 0;

        function showImage(index) {
            const totalImages = carouselImages.children.length;
            if (index >= totalImages) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalImages - 1;
            } else {
                currentIndex = index;
            }
            carouselImages.style.transform = translateX(-${currentIndex * 100}%);
        }

        prevButton.addEventListener('click', () => {
            showImage(currentIndex - 1);
        });

        nextButton.addEventListener('click', () => {
            showImage(currentIndex + 1);
        });

        // Optional: auto-slide every 5 seconds
        setInterval(() => {
            showImage(currentIndex + 1);
        }, 3000);
</script>
</body>
</html>
