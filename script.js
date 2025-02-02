document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animation
    const sections = document.querySelectorAll(".container");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });

    // Back to Top Button
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Hover Effect - Change Text Color Randomly
    function getRandomColor() {
        const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#a133ff"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    document.querySelectorAll(".container h2").forEach((heading) => {
        heading.addEventListener("mouseenter", function () {
            this.style.color = getRandomColor();
        });

        heading.addEventListener("mouseleave", function () {
            this.style.color = "";
        });
    });

    // Add Current Date in 3D Footer
    function displayCurrentDate() {
        const dateElement = document.createElement('div');
        dateElement.id = 'date';
        const currentDate = new Date();
        const dateStr = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
        dateElement.textContent = dateStr;
        document.body.appendChild(dateElement);
    }

    displayCurrentDate();

    // Background Change on Mouse Move (Gradient based on cursor position)
    document.addEventListener("mousemove", function (e) {
        let width = window.innerWidth;
        let height = window.innerHeight;

        let xPos = e.clientX / width;
        let yPos = e.clientY / height;

        // Create dynamic gradient based on mouse position
        let gradient = `linear-gradient(${xPos * 360}deg, rgba(255, 87, 34, 1), rgba(33, 150, 243, 1))`;
        document.body.style.background = gradient;
    });
});
