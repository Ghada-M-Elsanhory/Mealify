let moonBtn = document.querySelector('.mode');
        moonBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode')
        });
        let menuBtn = document.querySelector('.menu');
        let navLinks = document.querySelector('.nav-links');
        menuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active')
        });