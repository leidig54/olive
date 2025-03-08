// Main JavaScript file for Olive Startup School
document.addEventListener('DOMContentLoaded', function() {
    // Enhance curriculum cards with subtle animations
    const setupCurriculumCards = () => {
        const cards = document.querySelectorAll('.curriculum-card');
        cards.forEach((card, index) => {
            // Add a slight delay to each card for a staggered appearance
            card.style.animationDelay = `${index * 0.1}s`;
        });
    };
    
    // Smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    
    // Email validation helper
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Application form handling with standard form submission
    const setupApplicationForm = () => {
        const applyForm = document.getElementById('apply-form');
        if (!applyForm) return;
        
        // Client-side validation before form submission
        applyForm.addEventListener('submit', function(e) {
            // Basic validation
            let valid = true;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const idea = document.getElementById('idea').value;
            const experience = document.getElementById('experience').value;
            
            if (!name || !email || !idea || !experience) {
                e.preventDefault(); // Prevent form submission if validation fails
                valid = false;
                alert('Please fill out all fields');
            } else if (!validateEmail(email)) {
                e.preventDefault(); // Prevent form submission if validation fails
                valid = false;
                alert('Please enter a valid email address');
            }
            
            // If validation passes, the form will submit normally
            if (valid) {
                // Add a loading state to the button
                const submitButton = e.target.querySelector('button[type="submit"]');
                if (submitButton) {
                    submitButton.innerHTML = 'Submitting...';
                    submitButton.disabled = true;
                }
                // Form will be submitted normally to the action URL
            }
        });
    };

    // Countdown Timer
    const setupCountdown = () => {
        // Set the cohort start date: April 14, 2025
        const countdownDate = new Date('April 14, 2025 00:00:00').getTime();
        
        // Update the countdown every second
        const countdownTimer = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            // Calculate days, hours, minutes, seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update the HTML elements
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
            
            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById('days').textContent = '0';
                document.getElementById('hours').textContent = '0';
                document.getElementById('minutes').textContent = '0';
                document.getElementById('seconds').textContent = '0';
                document.querySelector('.countdown-message').textContent = 'The cohort has started!';
            }
        }, 1000);
    };
    
    // Initialize all functions
    setupSmoothScrolling();
    setupApplicationForm();
    setupCurriculumCards();
    setupCountdown();
});