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