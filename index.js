document.addEventListener("DOMContentLoaded", function () {
    // Text lines to display in the typing effect
    const aboutTextLines = [
       "Halo Semuanya, saya Rafi Ardian Saputra.",
       "Saya seorang siswa SMKS 17 AGUSTUS 1945 SURABAYA.",
       "Saya memiliki keahlian dalam bahasa pemrograman HTML,", 
       "CSS, dan JavaScript.",
       "Di portofolio saya, Anda bisa melihat berbagai proyek yang telah",
       "saya kerjakan mulai dari desain hingga fungsionalitasnya.",
       "Portofolio saya mencerminkan saya untuk terus belajar dan",
       "berkembang dalam bidang rekayasa perangkat lunak."
    ];

    // Typing effect function
    function typeEffect(lines, elementId, speed) {
        let i = 0;
        let j = 0;
        let currentLine = lines[i];
        const element = document.getElementById(elementId);

        function typing() {
            if (j < currentLine.length) {
                element.innerHTML += currentLine.charAt(j);
                j++;
                setTimeout(typing, speed);
            } else {
                if (i < lines.length - 1) {
                    i++;
                    j = 0;
                    currentLine = lines[i];
                    element.innerHTML += "<br><br>"; // Add spacing between paragraphs
                    setTimeout(typing, speed); // Continue typing next line
                }
            }
        }

        typing();
    }

    // Start the typing effect on page load with faster speed
    typeEffect(aboutTextLines, "typing-text", 15); // Faster typing speed

    // Show the about section with fade-in effect
    const aboutSection = document.querySelector('.about-container');
    window.addEventListener('scroll', function () {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (aboutPosition < screenPosition) {
            aboutSection.classList.add('visible');
        }
    });

    // Directly show image and text to make it quicker
    const profileImage = document.querySelector('#about img');
    profileImage.style.opacity = '1'; // Ensure the image is visible immediately
});
