/* 
   THE GRAND HORIZON RESORT - JAVASCRIPT
   Author: Aura Design Studio
   Version: 1.0.0
*/

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initTestimonialSlider();
    initFaqAccordion();
    initRoomFilter();
    initGalleryLightbox();
    initBookingForm();
});

/* 1. STICKY HEADER SCROLL EFFECT */
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    // Run once on load to catch current position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
}

/* 2. RESPONSIVE MOBILE NAVIGATION MENU */
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!navToggle || !navLinks) return;
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('mobile-active');
        
        // Disable body scroll when menu is open
        if (navLinks.classList.contains('mobile-active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('mobile-active');
            document.body.style.overflow = '';
        });
    });
}

/* 3. TESTIMONIAL SLIDER */
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (slides.length === 0 || !dotsContainer) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    // Create dots dynamic indicator
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (index + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    startInterval();
}

/* 4. FAQ ACCORDION */
function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parent = question.parentElement;
            const isActive = parent.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });
}

/* 5. ROOM CATEGORY FILTERING */
function initRoomFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card');
    
    if (filterBtns.length === 0 || roomCards.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            roomCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    // Animation delay visual effect
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* 6. GALLERY LIGHTBOX MODAL */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    
    if (galleryItems.length === 0 || !lightbox) return;
    
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('.gallery-title').innerText;
            const category = item.querySelector('.gallery-category').innerText;
            
            if (lightboxImg && img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
            }
            
            if (lightboxCaption) {
                lightboxCaption.innerText = `${category} - ${title}`;
            }
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Close lightbox on click outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/* 7. BOOKING FORM VALIDATION & POPUP */
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    const successModal = document.getElementById('successModal');
    
    if (!bookingForm) return;
    
    // Pre-fill Room Selection based on URL params (e.g. booking.html?room=suite)
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    if (roomParam) {
        const roomSelect = document.getElementById('roomType');
        if (roomSelect) {
            // Find option matching the parameter
            for (let i = 0; i < roomSelect.options.length; i++) {
                if (roomSelect.options[i].value.toLowerCase() === roomParam.toLowerCase()) {
                    roomSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }
    
    // Set minimum check-in date to today
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    
    if (checkInInput) {
        const today = new Date().toISOString().split('T')[0];
        checkInInput.min = today;
        
        checkInInput.addEventListener('change', () => {
            if (checkOutInput) {
                // Check-out date must be after check-in
                const minCheckOut = new Date(checkInInput.value);
                minCheckOut.setDate(minCheckOut.getDate() + 1);
                checkOutInput.min = minCheckOut.toISOString().split('T')[0];
                
                // If check-out value is already set and is before the new minimum, reset it
                if (checkOutInput.value && checkOutInput.value < checkOutInput.min) {
                    checkOutInput.value = checkOutInput.min;
                }
            }
        });
    }
    
    // Form Submit Event Handler
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Remove existing error states
        let hasErrors = false;
        const inputs = bookingForm.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
        
        // Check Empty Fields & Validation
        const name = document.getElementById('fullName');
        const email = document.getElementById('email');
        const checkIn = document.getElementById('checkIn');
        const checkOut = document.getElementById('checkOut');
        
        if (name && name.value.trim() === '') {
            name.style.borderColor = '#e74c3c';
            hasErrors = true;
        }
        
        if (email && (email.value.trim() === '' || !validateEmail(email.value))) {
            email.style.borderColor = '#e74c3c';
            hasErrors = true;
        }
        
        if (checkIn && checkIn.value === '') {
            checkIn.style.borderColor = '#e74c3c';
            hasErrors = true;
        }
        
        if (checkOut && checkOut.value === '') {
            checkOut.style.borderColor = '#e74c3c';
            hasErrors = true;
        }
        
        if (hasErrors) {
            alert('Please check the form fields marked in red and enter valid information.');
            return;
        }
        
        // Trigger Success Modal
        if (successModal) {
            // Write form summary info into modal if necessary
            const modalMessage = successModal.querySelector('p');
            const roomText = document.getElementById('roomType') ? document.getElementById('roomType').options[document.getElementById('roomType').selectedIndex].text : 'Room';
            
            if (modalMessage && name && checkIn && checkOut) {
                modalMessage.innerHTML = `Thank you <strong>${escapeHTML(name.value)}</strong>! Your request to reserve the <strong>${escapeHTML(roomText)}</strong> from <strong>${checkIn.value}</strong> to <strong>${checkOut.value}</strong> has been received. Our concierge will contact you at <strong>${escapeHTML(email.value)}</strong> within 24 hours to confirm reservation details.`;
            }
            
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Reset Form fields
            bookingForm.reset();
        }
    });
    
    // Success Modal Close Actions
    if (successModal) {
        const closeModalBtn = successModal.querySelector('#closeModal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                successModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }
}

// Utility Email Validator
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Utility Escape HTML to prevent injection
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
