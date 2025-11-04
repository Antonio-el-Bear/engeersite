// Projects data
const projectsData = [
    {
        id: 1,
        title: "Skyline Tower Complex",
        category: "commercial",
        year: "2024",
        location: "New York, NY",
        description: "A 45-story mixed-use development featuring office spaces, retail, and luxury residences.",
        image: "building-2",
        details: {
            client: "Metropolitan Development Corp",
            duration: "36 months",
            budget: "$450M",
            team: "25 engineers",
            features: [
                "Seismic isolation system",
                "LEED Platinum certification",
                "Advanced fire safety systems",
                "Smart building technology",
                "Green roof design"
            ],
            challenges: [
                "Complex urban site constraints",
                "Integration with existing subway system",
                "High wind load considerations",
                "Sustainable material sourcing"
            ]
        }
    },
    {
        id: 2,
        title: "Golden Gate Bridge Renovation",
        category: "infrastructure",
        year: "2023",
        location: "San Francisco, CA",
        description: "Comprehensive structural assessment and renovation of iconic suspension bridge.",
        image: "bridge",
        details: {
            client: "California Department of Transportation",
            duration: "24 months",
            budget: "$180M",
            team: "40 engineers",
            features: [
                "Cable replacement program",
                "Deck reinforcement",
                "Corrosion protection systems",
                "Seismic retrofitting",
                "Traffic flow optimization"
            ],
            challenges: [
                "Maintaining traffic during construction",
                "Extreme weather conditions",
                "Historical preservation requirements",
                "Complex logistics coordination"
            ]
        }
    },
    {
        id: 3,
        title: "EcoVillage Residential",
        category: "residential",
        year: "2024",
        location: "Portland, OR",
        description: "Sustainable residential community with 200 energy-efficient homes.",
        image: "home",
        details: {
            client: "Green Living Communities",
            duration: "18 months",
            budget: "$85M",
            team: "15 engineers",
            features: [
                "Net-zero energy design",
                "Rainwater harvesting",
                "Community solar grid",
                "Geothermal heating",
                "Native landscaping"
            ],
            challenges: [
                "Wetland preservation",
                "Soil stabilization",
                "Community integration",
                "Cost optimization"
            ]
        }
    },
    {
        id: 4,
        title: "Industrial Manufacturing Hub",
        category: "industrial",
        year: "2023",
        location: "Detroit, MI",
        description: "Advanced manufacturing facility with automated systems and clean room environments.",
        image: "factory",
        details: {
            client: "TechManufacture Inc",
            duration: "30 months",
            budget: "$220M",
            team: "35 engineers",
            features: [
                "Class 10 clean rooms",
                "Automated material handling",
                "Redundant power systems",
                "Advanced HVAC controls",
                "Waste heat recovery"
            ],
            challenges: [
                "Precision vibration control",
                "Complex utility coordination",
                "Phased construction delivery",
                "Environmental compliance"
            ]
        }
    },
    {
        id: 5,
        title: "Urban Transit Station",
        category: "infrastructure",
        year: "2024",
        location: "Chicago, IL",
        description: "Multi-modal transportation hub serving bus, rail, and bike share systems.",
        image: "train",
        details: {
            client: "Chicago Transit Authority",
            duration: "42 months",
            budget: "$320M",
            team: "50 engineers",
            features: [
                "Underground rail platforms",
                "Weather-protected bus terminals",
                "Integrated bike facilities",
                "Passenger flow optimization",
                "Accessibility compliance"
            ],
            challenges: [
                "Construction in active transit zone",
                "Utility relocation",
                "Noise and vibration control",
                "Historic district requirements"
            ]
        }
    },
    {
        id: 6,
        title: "Luxury Resort & Spa",
        category: "commercial",
        year: "2023",
        location: "Miami, FL",
        description: "Oceanfront resort with innovative coastal engineering and sustainable design.",
        image: "palm-tree",
        details: {
            client: "Oceanview Hospitality Group",
            duration: "28 months",
            budget: "$195M",
            team: "28 engineers",
            features: [
                "Storm surge protection",
                "Coral reef preservation",
                "Saltwater-resistant materials",
                "Natural ventilation systems",
                "Beach erosion mitigation"
            ],
            challenges: [
                "Hurricane-resistant design",
                "Environmental impact minimization",
                "Coastal permitting",
                "Luxury standard integration"
            ]
        }
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more-btn');
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

// State
let currentFilter = 'all';
let visibleProjects = 6;
let animationDelay = 0;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initializeCounters();
    initializeFilters();
    initializeModal();
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Counter animation
function initializeCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.counter);
    const duration = 2000;
    const start = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// Filter functionality
function initializeFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Reset state
            currentFilter = button.dataset.filter;
            visibleProjects = 6;
            animationDelay = 0;
            
            // Re-render projects
            renderProjects();
        });
    });
}

// Render projects
function renderProjects() {
    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === currentFilter);
    
    const projectsToShow = filteredProjects.slice(0, visibleProjects);
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    // Add projects with staggered animation
    projectsToShow.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
    
    // Update load more button
    if (visibleProjects >= filteredProjects.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card bg-[#1A1A1A] rounded-lg overflow-hidden border border-teal-500/10 hover:border-teal-500/30 transition-all duration-500 cursor-pointer group fade-in';
    card.onclick = () => openProjectModal(project);
    
    card.innerHTML = `
        <div class="aspect-[4/3] bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center relative overflow-hidden">
            <i data-lucide="${project.image}" class="w-16 h-16 text-teal-400 group-hover:scale-110 transition-transform duration-300"></i>
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            <div class="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                ${project.year}
            </div>
            <div class="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                ${project.location}
            </div>
        </div>
        <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full capitalize">
                    ${project.category}
                </span>
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors duration-300">
                ${project.title}
            </h3>
            <p class="text-teal-300 text-sm mb-4 line-clamp-3">
                ${project.description}
            </p>
            <div class="flex items-center justify-between">
                <span class="text-xs text-teal-500 font-medium">View Details</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform duration-300"></i>
            </div>
        </div>
    `;
    
    return card;
}

// Load more functionality
loadMoreBtn.addEventListener('click', () => {
    visibleProjects += 3;
    renderProjects();
    
    // Smooth scroll to new content
    setTimeout(() => {
        const newCards = projectsGrid.querySelectorAll('.project-card:nth-last-child(-n+3)');
        if (newCards.length > 0) {
            newCards[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
});

// Modal functionality
function initializeModal() {
    closeModal.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalContent.innerHTML = createModalContent(project);
    
    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Initialize modal animations
    setTimeout(() => {
        const modal = projectModal.querySelector('.bg-\\[\\#1A1A1A\\]');
        modal.style.transform = 'scale(1)';
        modal.style.opacity = '1';
    }, 10);
    
    lucide.createIcons();
}

function closeProjectModal() {
    const modal = projectModal.querySelector('.bg-\\[\\#1A1A1A\\]');
    modal.style.transform = 'scale(0.95)';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        projectModal.classList.add('hidden');
        projectModal.classList.remove('flex');
        document.body.style.overflow = '';
    }, 200);
}

function createModalContent(project) {
    return `
        <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
                <div class="aspect-[4/3] bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-lg flex items-center justify-center mb-6">
                    <i data-lucide="${project.image}" class="w-24 h-24 text-teal-400"></i>
                </div>
                
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <i data-lucide="map-pin" class="w-5 h-5 text-teal-400"></i>
                        <span class="text-teal-300">${project.location}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <i data-lucide="calendar" class="w-5 h-5 text-teal-400"></i>
                        <span class="text-teal-300">Completed in ${project.year}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <i data-lucide="tag" class="w-5 h-5 text-teal-400"></i>
                        <span class="text-teal-300 capitalize">${project.category}</span>
                    </div>
                </div>
            </div>
            
            <div>
                <p class="text-teal-300 mb-6 leading-relaxed">${project.description}</p>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-[#0F0F0F] p-4 rounded-lg">
                        <div class="text-2xl font-bold text-teal-400 mb-1">${project.details.budget}</div>
                        <div class="text-sm text-teal-300">Project Budget</div>
                    </div>
                    <div class="bg-[#0F0F0F] p-4 rounded-lg">
                        <div class="text-2xl font-bold text-teal-400 mb-1">${project.details.duration}</div>
                        <div class="text-sm text-teal-300">Duration</div>
                    </div>
                    <div class="bg-[#0F0F0F] p-4 rounded-lg">
                        <div class="text-2xl font-bold text-teal-400 mb-1">${project.details.team}</div>
                        <div class="text-sm text-teal-300">Team Size</div>
                    </div>
                    <div class="bg-[#0F0F0F] p-4 rounded-lg">
                        <div class="text-2xl font-bold text-teal-400 mb-1">${project.details.client.split(' ')[0]}</div>
                        <div class="text-sm text-teal-300">Client</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="space-y-8">
            <div>
                <h4 class="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i data-lucide="star" class="w-5 h-5 text-teal-400"></i>
                    Key Features
                </h4>
                <div class="grid md:grid-cols-2 gap-3">
                    ${project.details.features.map(feature => `
                        <div class="flex items-center gap-3 p-3 bg-[#0F0F0F] rounded-lg">
                            <i data-lucide="check-circle" class="w-4 h-4 text-teal-400 flex-shrink-0"></i>
                            <span class="text-sm text-teal-300">${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div>
                <h4 class="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i data-lucide="alert-triangle" class="w-5 h-5 text-teal-400"></i>
                    Engineering Challenges
                </h4>
                <div class="grid md:grid-cols-2 gap-3">
                    ${project.details.challenges.map(challenge => `
                        <div class="flex items-center gap-3 p-3 bg-[#0F0F0F] rounded-lg">
                            <i data-lucide="zap" class="w-4 h-4 text-teal-400 flex-shrink-0"></i>
                            <span class="text-sm text-teal-300">${challenge}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="flex gap-4 pt-6 border-t border-teal-500/10">
                <a href="contact.html" class="btn-primary">
                    <i data-lucide="message-circle" class="w-4 h-4"></i>
                    Discuss Similar Project
                </a>
                <button onclick="shareProject('${project.title}')" class="btn-secondary">
                    <i data-lucide="share-2" class="w-4 h-4"></i>
                    Share Project
                </button>
            </div>
        </div>
    `;
}

// Share functionality
function shareProject(title) {
    if (navigator.share) {
        navigator.share({
            title: `${title} - ENGITECH`,
            text: `Check out this amazing project by ENGITECH: ${title}`,
            url: window.location.href
        });
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            // Show toast notification
            showToast('Project link copied to clipboard!');
        });
    }
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-y-full opacity-0 transition-all duration-300';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        toast.style.transform = 'translateY(full)';
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search projects...';
    searchInput.className = 'px-4 py-2 bg-[#1A1A1A] border border-teal-500/20 rounded-lg text-white placeholder-teal-300 focus:border-teal-500 focus:outline-none';
    
    searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProjects = projectsData.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.category.toLowerCase().includes(searchTerm) ||
            project.location.toLowerCase().includes(searchTerm)
        );
        
        // Render filtered results
        renderSearchResults(filteredProjects);
    }, 300));
    
    return searchInput;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}