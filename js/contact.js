// Contact page functionality

// FAQ data
const faqData = [
    {
        question: "What types of engineering projects do you handle?",
        answer: "We specialize in civil and structural engineering projects including commercial buildings, residential developments, infrastructure projects, and industrial facilities. Our expertise covers everything from small renovations to large-scale developments."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary significantly based on scope and complexity. Design phases typically take 2-8 weeks, while construction can range from a few months to several years. We provide detailed timelines during our initial consultation."
    },
    {
        question: "Do you provide 3D modeling and visualization?",
        answer: "Yes, we use advanced 3D modeling software including AutoCAD, Revit, and specialized structural analysis tools. We provide detailed visualizations to help clients understand their projects before construction begins."
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing varies by project type and complexity. We typically charge per square foot for design services, hourly rates for consulting, and percentage of construction cost for project management. Contact us for a detailed quote."
    },
    {
        question: "Do you handle permits and regulatory approvals?",
        answer: "Yes, we assist with all necessary permits and regulatory approvals. Our team has extensive experience working with local building departments and can guide you through the approval process."
    },
    {
        question: "Can you work on projects outside your local area?",
        answer: "We work on projects nationwide and have experience with various local building codes and regulations. For projects outside our immediate area, we often partner with local engineers to ensure compliance."
    },
    {
        question: "What software do you use for structural analysis?",
        answer: "We use industry-leading software including ETABS, SAP2000, SAFE, and RISA for structural analysis. For design, we use AutoCAD, Revit, and Tekla Structures to ensure precision and accuracy."
    },
    {
        question: "Do you provide emergency structural assessments?",
        answer: "Yes, we offer emergency structural assessment services for damaged buildings, storm damage evaluation, and safety inspections. Contact our emergency line at +1 (555) 555-1234 for urgent matters."
    }
];

// DOM Elements
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');
const serviceSelect = document.getElementById('service-select');
const faqContainer = document.getElementById('faq-container');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    initializeMap();
    initializeFAQ();
    handleURLParams();
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Form initialization
function initializeForm() {
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearError(input));
    });
    
    // Phone number formatting
    const phoneInput = contactForm.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhoneNumber);
    }
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Disable submit button
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Sending...';
    lucide.createIcons();
    
    // Validate all fields
    const isValid = validateForm();
    
    if (!isValid) {
        resetSubmitButton(originalText);
        showFormStatus('Please correct the errors above.', 'error');
        return;
    }
    
    // Collect form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
        // Simulate API call (replace with actual endpoint)
        await simulateFormSubmission(data);
        
        // Success
        contactForm.reset();
        showFormStatus('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        
        // Track form submission (analytics)
        trackFormSubmission(data);
        
    } catch (error) {
        console.error('Form submission error:', error);
        showFormStatus('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
    } finally {
        resetSubmitButton(originalText);
    }
}

// Form validation
function validateForm() {
    const requiredFields = contactForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Email validation
    const emailField = contactForm.querySelector('input[name="email"]');
    if (emailField.value && !isValidEmail(emailField.value)) {
        showFieldError(emailField, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (if provided)
    const phoneField = contactForm.querySelector('input[name="phone"]');
    if (phoneField.value && !isValidPhone(phoneField.value)) {
        showFieldError(phoneField, 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        return false;
    }
    
    clearError(field);
    return true;
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    field.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    field.classList.remove('error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[(]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{3})/, '($1) $2');
    }
    
    e.target.value = value;
}

// Form status display
function showFormStatus(message, type) {
    const statusClass = type === 'success' ? 'bg-green-500/20 border-green-500/40 text-green-300' : 'bg-red-500/20 border-red-500/40 text-red-300';
    const icon = type === 'success' ? 'check-circle' : 'alert-circle';
    
    formStatus.innerHTML = `
        <div class="flex items-center gap-3 p-4 rounded-lg border ${statusClass}">
            <i data-lucide="${icon}" class="w-5 h-5 flex-shrink-0"></i>
            <span>${message}</span>
        </div>
    `;
    
    formStatus.classList.remove('hidden');
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    lucide.createIcons();
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        formStatus.classList.add('hidden');
    }, 10000);
}

function resetSubmitButton(originalText) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    lucide.createIcons();
}

// Simulate form submission
async function simulateFormSubmission(data) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Log form data (replace with actual API call)
    console.log('Form submitted:', data);
    
    // Here you would typically send to your backend:
    /*
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Form submission failed');
    }
    
    return response.json();
    */
}

// Map initialization
function initializeMap() {
    try {
        // Initialize Leaflet map
        const map = L.map('map').setView([40.7128, -74.0060], 15); // NYC coordinates
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add custom marker
        const customIcon = L.divIcon({
            html: '<div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center"><i class="fas fa-building text-white text-xs"></i></div>',
            className: 'custom-marker',
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });
        
        const marker = L.marker([40.7128, -74.0060], { icon: customIcon })
            .addTo(map)
            .bindPopup(`
                <div class="text-center p-2">
                    <strong class="text-teal-600">ENGITECH</strong><br>
                    <small>123 Engineering Plaza<br>Metro City, MC 12345</small>
                </div>
            `);
        
        // Add click event to open popup
        marker.on('click', function() {
            this.openPopup();
        });
        
    } catch (error) {
        console.error('Map initialization failed:', error);
        // Fallback: show static image or message
        document.getElementById('map').innerHTML = `
            <div class="flex items-center justify-center h-full bg-teal-500/10">
                <div class="text-center">
                    <i data-lucide="map-pin" class="w-12 h-12 text-teal-400 mx-auto mb-4"></i>
                    <p class="text-teal-300">Interactive map unavailable</p>
                    <p class="text-sm text-teal-400 mt-2">123 Engineering Plaza, Metro City, MC 12345</p>
                </div>
            </div>
        `;
        lucide.createIcons();
    }
}

// FAQ initialization
function initializeFAQ() {
    faqContainer.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item bg-[#1A1A1A] rounded-lg border border-teal-500/10 overflow-hidden">
            <button class="faq-toggle w-full text-left p-6 flex items-center justify-between hover:bg-teal-500/5 transition-colors" data-index="${index}">
                <span class="font-semibold pr-4">${faq.question}</span>
                <i data-lucide="chevron-down" class="w-5 h-5 text-teal-400 transition-transform duration-300"></i>
            </button>
            <div class="faq-content hidden">
                <div class="px-6 pb-6 text-teal-300 leading-relaxed">
                    ${faq.answer}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
        toggle.addEventListener('click', toggleFAQ);
    });
    
    lucide.createIcons();
}

function toggleFAQ(e) {
    const button = e.currentTarget;
    const content = button.nextElementSibling;
    const icon = button.querySelector('[data-lucide="chevron-down"]');
    const allItems = document.querySelectorAll('.faq-item');
    
    // Close all other FAQ items
    allItems.forEach(item => {
        if (item !== button.parentElement) {
            item.querySelector('.faq-content').classList.add('hidden');
            item.querySelector('[data-lucide="chevron-down"]').style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current item
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// Handle URL parameters
function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    
    if (service && serviceSelect) {
        serviceSelect.value = service;
        
        // Scroll to form and highlight service field
        setTimeout(() => {
            serviceSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
            serviceSelect.classList.add('highlight');
            setTimeout(() => {
                serviceSelect.classList.remove('highlight');
            }, 2000);
        }, 500);
    }
}

// Analytics tracking
function trackFormSubmission(data) {
    // Google Analytics or other tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: data.service || 'General Inquiry',
            value: 1
        });
    }
    
    // Custom analytics
    console.log('Form submission tracked:', {
        service: data.service,
        budget: data.budget,
        timeline: data.timeline,
        timestamp: new Date().toISOString()
    });
}

// Live chat integration (placeholder)
function initializeLiveChat() {
    // Placeholder for live chat integration
    // This would typically integrate with services like Intercom, Zendesk, etc.
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        isValidPhone,
        validateField,
        faqData
    };
}