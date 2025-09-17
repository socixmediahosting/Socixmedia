 

 // Blogs
 
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
  });


  // Form

   document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contactForm');
            const feedbackContainer = document.getElementById('form-feedback');

            // --- Form Submission Event Listener ---
            contactForm.addEventListener('submit', function(event) {
              feedbackContainer.innerHTML = '';
              
                const fullName = document.getElementById('fullName');
                const email = document.getElementById('email');
                const phone = document.getElementById('phone');
                const message = document.getElementById('message');
                let errors = [];

                if (fullName.value.trim() === '') {
                    errors.push('Full name is required.');
                }
                if (email.value.trim() === '') {
                    errors.push('Email address is required.');
                } else if (!isValidEmail(email.value)) {
                    errors.push('Please enter a valid email address.');
                }
                if (phone.value.trim() === '') {
                    errors.push('Phone number is required.');
                } else if (!isValidPhone(phone.value)) {
                    errors.push('Please enter a valid phone number format.');
                }
                if (message.value.trim() === '') {
                  errors.push('Message is required.');
                }
                
                if (errors.length > 0) {
                  event.preventDefault();
                    feedbackContainer.innerHTML = `
                        <div class="feedback-message feedback-error">
                            <h4>Please fix the following errors:</h4>
                            <ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
                        </div>`;
                } 
                else {
                    feedbackContainer.innerHTML = `
                        <div class="feedback-message feedback-success">
                            <h4>Thank You!</h4>
                            <p>Your message has been sent successfully. We will get back to you shortly.</p>
                        </div>`;
                    // contactForm.reset();
                }
            });

            function isValidEmail(email) {
                // Simple regex for email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }

            function isValidPhone(phone) {
                // Simple regex for common phone number formats
                return /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
            }
        });




        //  contact scroll
// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Find all navbar links that have a 'data-target-class' attribute
    const navLinks = document.querySelectorAll('.contact-button');

    // 2. Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            
            // 3. Prevent the default link behavior (jumping to the top)
            event.preventDefault();
            
            // 4. Get the target class name from the data attribute
            const targetClassName = link.dataset.targetClass;
            
            // 5. Find the first element on the page with that class
            // Note: We add a '.' to the front to make it a valid class selector
            const targetElement = document.querySelector('.wrapper6');
            
            // 6. If the element exists, scroll to it
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // This ensures the animation is smooth
                    block: 'start'      // This aligns the top of the element to the top of the viewport
                });
            }
        });
    });
});



// Newsletter


        document.getElementById('copyrightYear').textContent = '2025';

        const form = document.getElementById('newsletterForm');
        const emailInput = document.getElementById('emailInput');
        const validationMessage = document.getElementById('validationMessage');

        function isValidEmail(email) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return regex.test(email);
        }

        function handleValidation() {
            const email = emailInput.value.trim();
            
            // Always remove previous states before showing a new one
            validationMessage.classList.remove('visible', 'success', 'error');
            void validationMessage.offsetWidth; // Force reflow for re-triggering CSS animation

            if (email === "") {
                event.preventDefault(); // Prevent page reload
                validationMessage.textContent = 'Email address is required.';
                validationMessage.classList.add('error');
            } else if (isValidEmail(email)) {
                validationMessage.textContent = 'We will get back to you shortly.';
                validationMessage.classList.add('success');
            } else {
                event.preventDefault(); // Prevent page reload
                validationMessage.textContent = 'Please enter a valid email address.';
                validationMessage.classList.add('error');
            }

            // Make the message visible
            validationMessage.classList.add('visible');
        }

        // The main validation now happens only on submit
        form.addEventListener('submit', function(event) {
            handleValidation();
        });

        // Hide the message as soon as the user starts typing again
        emailInput.addEventListener('input', function() {
            validationMessage.classList.remove('visible', 'success', 'error');
        });