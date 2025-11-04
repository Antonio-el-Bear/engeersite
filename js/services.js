// Services data
const servicesData = [
    {
        id: 'product-development',
        title: 'Product Development',
        icon: 'lightbulb',
        description: 'Taking a conceptual idea from concept to reality. We transform sketches into fully functional products with consideration for usage, materials, and cost-effectiveness.',
        features: [
            'Ideation/Concepts',
            '3D Rendering of CAD models',
            'Design Phase Analysis',
            'Material Selection',
            'Cost Analysis',
            'Functional Product Design'
        ],
        process: [
            'Conceptual sketch analysis',
            'Structured design approach',
            'Detailed phase review',
            'Problem resolution',
            'Manufacturing preparation',
            'Real-world application testing'
        ],
        benefits: [
            'Concept to reality transformation',
            'Cost-effective design solutions',
            'Problem identification before manufacturing',
            'Optimal material selection',
            'Functional design assurance',
            'Manufacturing readiness'
        ],
        pricing: {
            basic: 'Quote on request',
            standard: 'Quote on request',
            premium: 'Quote on request'
        }
    },
    {
        id: 'mechanical-design',
        title: 'Mechanical Design',
        icon: 'cog',
        description: 'Comprehensive mechanical design and development of mechanical systems, machinery, and equipment for manufacturing processes and everyday applications.',
        features: [
            'Mechanical Designs',
            'Sheet metal Designs',
            'Structural Designs',
            'Mechanical Conceptual Designs',
            'Design Calculations/Analysis',
            '2D/3D Drawings/Modelling using CAD',
            'Drawings and "Exploded" Views',
            'Manufacturing Drawings',
            'Patent Drawings',
            'Design Specifications',
            'Codes/Standards Compliance',
            'Finite Element Analysis (FEA)'
        ],
        process: [
            'Design requirement analysis',
            'System design and modeling',
            'Component design and selection',
            'Transparent design documentation',
            'Manufacturing preparation',
            'Maintenance planning'
        ],
        benefits: [
            'Simple and effective designs',
            'Transparent design process',
            'Optimal equipment maintenance',
            'Client and operator clarity',
            'Problem-solving focus',
            'Technical solution optimization'
        ],
        pricing: {
            basic: 'Quote on request',
            standard: 'Quote on request',
            premium: 'Quote on request'
        }
    },
    {
        id: 'electrical-design',
        title: 'Electrical Design',
        icon: 'zap',
        description: 'Specializing in development of small to large electronic systems. We can re-develop outdated systems according to customer needs and modern standards.',
        features: [
            'Electronic System Development',
            'System Re-development',
            'Modern Standards Compliance',
            'Mass Production Components',
            'Testing Components',
            'Custom Electronic Solutions'
        ],
        process: [
            'System assessment and requirements',
            'Electronic design and development',
            'Component manufacturing',
            'Testing and validation',
            'Mass production setup',
            'Quality assurance'
        ],
        benefits: [
            'Modern electronic solutions',
            'Outdated system upgrades',
            'Mass production capability',
            'Custom component development',
            'Testing and validation',
            'Standards compliance'
        ],
        pricing: {
            basic: 'Quote on request',
            standard: 'Quote on request',
            premium: 'Quote on request'
        }
    },
    {
        id: 'consulting',
        title: 'Consulting Services',
        icon: 'users',
        description: 'Our skilled advisory team works with you to identify the best path forward for your facilities and operations, applying the right engineering solutions from various technical disciplines.',
        features: [
            'Industrial Engineering Solutions',
            'Lean Manufacturing Consulting',
            'Mechanical Engineering Consulting',
            'Design Engineering Consulting',
            'Automotive Engineering Consulting',
            'Supply Chain Consulting'
        ],
        process: [
            'Business assessment and analysis',
            'Solution identification',
            'Implementation planning',
            'Technical discipline application',
            'Operational optimization',
            'Ongoing support'
        ],
        benefits: [
            'Expert advisory services',
            'Operational challenge solutions',
            'Multi-discipline expertise',
            'Business optimization',
            'Supply chain planning',
            'Manufacturing efficiency'
        ],
        pricing: {
            basic: 'Quote on request',
            standard: 'Quote on request',
            premium: 'Quote on request'
        }
    },
    {
        id: 'robotic-systems',
        title: 'Robotic Systems',
        icon: 'bot',
        description: 'Specializing in robotic systems and machine design from standalone operations to fully integrated systems. As system integrators for Yaskawa South Africa.',
        features: [
            'Palletising Solutions',
            'Robotic Welding Solutions',
            'Pick & Place Solutions',
            'Custom Robotic Applications',
            'Standalone Operations',
            'Fully Integrated Systems'
        ],
        process: [
            'Robotic system design',
            'Integration planning',
            'Custom application development',
            'System testing and validation',
            'Installation and commissioning',
            'Maintenance and support'
        ],
        benefits: [
            'Robust equipment design',
            'Functional and elegant solutions',
            'Easy maintenance focus',
            'Yaskawa partnership expertise',
            'Custom robotic applications',
            'Integrated system solutions'
        ],
        pricing: {
            basic: 'Quote on request',
            standard: 'Quote on request',
            premium: 'Quote on request'
        }
    },
    {
        id: 'industrial-automation',
        title: 'Industrial Automation',
        icon: 'cpu',
        description: 'Control of machinery and processes through autonomous systems using robotics and computer software to increase productivity, reduce costs, and improve precision.',
        features: [
            'Automated Conveyance Systems',
            'Automated Guided Vehicles',
            'Automated Packaging Systems',
            'Automated Robotic Systems',
            'Automated Pallet Handling Systems',
            'Automated Warehouse Storage Systems'
        ],
        process: [
            'Automation assessment',
            'System design and planning',
            'Technology integration',
            'Testing and commissioning',
            'Training and handover',
            'Ongoing optimization'
        ],
        benefits: [
            'Increased productivity',
            'Reduced operational costs',
            'Enhanced precision',
            'Flexible operations',
            'Employee cost reduction',
            'Integrated system solutions'
        ],
        pricing: {
            basic: 'Quote on request',
            standard: 'Quote on request',
            premium: 'Quote on request'
        }
    },
    {
        id: 'logistics-warehouse',
        title: 'Logistics & Warehouse Equipment',
        icon: 'warehouse',
        description: 'Turnkey solution provider optimizing entire warehouse flow including materials, goods, stock, and distribution to accommodate current needs and future growth.',
        features: [
            'Automated AGV Systems',
            'Pallet Racking Solutions',
            'Static Storage Solutions',
            'Dynamic Storage Solutions',
            'Material Handling Equipment',
            'Warehouse Optimization'
        ],
        process: [
            'Warehouse flow analysis',
            'Optimization planning',
            'Equipment selection',
            'System integration',
            'Installation and setup',
            'Growth accommodation'
        ],
        benefits: [
            'Complete warehouse optimization',
            'Expert engineering team',
            'Scalable solutions',
            'Current and future needs',
            'Turnkey implementation',
            'Flow optimization'
        ],
        pricing: {
            basic: 'Quote on request',
            standard: 'Quote on request',
            premium: 'Quote on request'
        }
    }
];

// DOM Elements
const servicesGrid = document.getElementById('services-grid');
const serviceModal = document.getElementById('service-modal');
const serviceModalTitle = document.getElementById('service-modal-title');
const serviceModalContent = document.getElementById('service-modal-content');
const closeServiceModal = document.getElementById('close-service-modal');
const calculateBtn = document.getElementById('calculate-btn');
const calculatorResult = document.getElementById('calculator-result');
const servicesCanvas = document.getElementById('services-canvas');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    initializeModal();
    initializeCalculator();
    initializeCanvas();
    initializeQuickNav();
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Render services
function renderServices() {
    servicesGrid.innerHTML = servicesData.map((service, index) => `
        <div id="${service.id}" class="service-section fade-in" style="animation-delay: ${index * 0.2}s">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="${index % 2 === 0 ? 'order-1' : 'order-2'}">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 bg-teal-500/20 rounded-lg flex items-center justify-center">
                            <i data-lucide="${service.icon}" class="w-8 h-8 text-teal-400"></i>
                        </div>
                        <h3 class="text-3xl md:text-4xl font-bold">${service.title}</h3>
                    </div>
                    
                    <p class="text-teal-300 text-lg mb-8 leading-relaxed">${service.description}</p>
                    
                    <div class="grid grid-cols-2 gap-4 mb-8">
                        ${service.features.slice(0, 4).map(feature => `
                            <div class="flex items-center gap-3">
                                <i data-lucide="check-circle" class="w-4 h-4 text-teal-400 flex-shrink-0"></i>
                                <span class="text-sm text-teal-300">${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="flex gap-4">
                        <button onclick="openServiceModal('${service.id}')" class="btn-primary">
                            <i data-lucide="info" class="w-4 h-4"></i>
                            Learn More
                        </button>
                        <a href="contact.html?service=${service.id}" class="btn-secondary">
                            <i data-lucide="message-circle" class="w-4 h-4"></i>
                            Get Quote
                        </a>
                    </div>
                </div>
                
                <div class="${index % 2 === 0 ? 'order-2' : 'order-1'}">
                    <div class="service-visual bg-gradient-to-br from-teal-500/10 to-teal-600/20 rounded-lg p-8 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                        <div class="aspect-square flex items-center justify-center">
                            <i data-lucide="${service.icon}" class="w-32 h-32 text-teal-400/60"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Modal functionality
function initializeModal() {
    closeServiceModal.addEventListener('click', closeServiceModalFunc);
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            closeServiceModalFunc();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !serviceModal.classList.contains('hidden')) {
            closeServiceModalFunc();
        }
    });
}

function openServiceModal(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return;
    
    serviceModalTitle.textContent = service.title;
    serviceModalContent.innerHTML = createServiceModalContent(service);
    
    serviceModal.classList.remove('hidden');
    serviceModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    lucide.createIcons();
}

function closeServiceModalFunc() {
    serviceModal.classList.add('hidden');
    serviceModal.classList.remove('flex');
    document.body.style.overflow = '';
}

function createServiceModalContent(service) {
    return `
        <div class="space-y-8">
            <div class="flex items-center gap-4 p-6 bg-[#0F0F0F] rounded-lg">
                <div class="w-16 h-16 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <i data-lucide="${service.icon}" class="w-8 h-8 text-teal-400"></i>
                </div>
                <div>
                    <h3 class="text-2xl font-bold mb-2">${service.title}</h3>
                    <p class="text-teal-300">${service.description}</p>
                </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div>
                    <h4 class="text-xl font-semibold mb-4 flex items-center gap-3">
                        <i data-lucide="star" class="w-5 h-5 text-teal-400"></i>
                        Key Features
                    </h4>
                    <div class="space-y-3">
                        ${service.features.map(feature => `
                            <div class="flex items-center gap-3 p-3 bg-[#0F0F0F] rounded-lg">
                                <i data-lucide="check-circle" class="w-4 h-4 text-teal-400 flex-shrink-0"></i>
                                <span class="text-sm text-teal-300">${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h4 class="text-xl font-semibold mb-4 flex items-center gap-3">
                        <i data-lucide="workflow" class="w-5 h-5 text-teal-400"></i>
                        Our Process
                    </h4>
                    <div class="space-y-3">
                        ${service.process.map((step, index) => `
                            <div class="flex items-start gap-3 p-3 bg-[#0F0F0F] rounded-lg">
                                <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                                    ${index + 1}
                                </div>
                                <span class="text-sm text-teal-300">${step}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h4 class="text-xl font-semibold mb-4 flex items-center gap-3">
                        <i data-lucide="trending-up" class="w-5 h-5 text-teal-400"></i>
                        Benefits
                    </h4>
                    <div class="space-y-3">
                        ${service.benefits.map(benefit => `
                            <div class="flex items-center gap-3 p-3 bg-[#0F0F0F] rounded-lg">
                                <i data-lucide="zap" class="w-4 h-4 text-teal-400 flex-shrink-0"></i>
                                <span class="text-sm text-teal-300">${benefit}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="bg-[#0F0F0F] rounded-lg p-6">
                <h4 class="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i data-lucide="dollar-sign" class="w-5 h-5 text-teal-400"></i>
                    Pricing Structure
                </h4>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="text-center p-4 border border-teal-500/20 rounded-lg">
                        <div class="text-lg font-semibold mb-2">Basic</div>
                        <div class="text-2xl font-bold text-teal-400 mb-2">${service.pricing.basic}</div>
                        <div class="text-sm text-teal-300">Standard deliverables</div>
                    </div>
                    <div class="text-center p-4 border border-teal-500/40 rounded-lg bg-teal-500/5">
                        <div class="text-lg font-semibold mb-2">Standard</div>
                        <div class="text-2xl font-bold text-teal-400 mb-2">${service.pricing.standard}</div>
                        <div class="text-sm text-teal-300">Enhanced features</div>
                    </div>
                    <div class="text-center p-4 border border-teal-500/20 rounded-lg">
                        <div class="text-lg font-semibold mb-2">Premium</div>
                        <div class="text-2xl font-bold text-teal-400 mb-2">${service.pricing.premium}</div>
                        <div class="text-sm text-teal-300">Full-service package</div>
                    </div>
                </div>
            </div>
            
            <div class="flex gap-4 pt-6 border-t border-teal-500/10">
                <a href="contact.html?service=${service.id}" class="btn-primary flex-1 text-center">
                    <i data-lucide="message-circle" class="w-4 h-4"></i>
                    Request Quote
                </a>
                <button onclick="shareService('${service.title}')" class="btn-secondary">
                    <i data-lucide="share-2" class="w-4 h-4"></i>
                    Share
                </button>
            </div>
        </div>
    `;
}

// Calculator functionality
function initializeCalculator() {
    calculateBtn.addEventListener('click', calculateEstimate);
}

function calculateEstimate() {
    const form = document.getElementById('calculator-form');
    const formData = new FormData(form);
    
    const projectType = formData.get('projectType');
    const projectSize = parseInt(formData.get('projectSize'));
    const complexity = formData.get('complexity');
    const timeline = parseInt(formData.get('timeline'));
    
    if (!projectType || !projectSize || !complexity || !timeline) {
        showToast('Please fill in all fields to calculate estimate', 'error');
        return;
    }
    
    // Calculate estimate based on inputs
    const estimates = calculateProjectEstimate(projectType, projectSize, complexity, timeline);
    
    // Display results
    document.getElementById('estimated-cost').textContent = `$${estimates.cost.toLocaleString()}`;
    document.getElementById('estimated-duration').textContent = estimates.duration;
    document.getElementById('team-size').textContent = estimates.teamSize;
    
    calculatorResult.classList.remove('hidden');
    calculatorResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Animate the numbers
    animateCalculatorResults(estimates);
}

function calculateProjectEstimate(projectType, projectSize, complexity, timeline) {
    // Base rates per project type (per sq ft)
    const baseRates = {
        commercial: 8,
        residential: 5,
        infrastructure: 12,
        industrial: 10
    };
    
    // Complexity multipliers
    const complexityMultipliers = {
        basic: 1,
        moderate: 1.3,
        complex: 1.7,
        advanced: 2.2
    };
    
    // Timeline adjustments
    const timelineAdjustment = timeline < 6 ? 1.3 : timeline > 24 ? 0.8 : 1;
    
    const baseCost = baseRates[projectType] * projectSize;
    const adjustedCost = baseCost * complexityMultipliers[complexity] * timelineAdjustment;
    
    // Team size calculation
    const baseTeamSize = Math.ceil(projectSize / 5000);
    const teamSize = Math.min(Math.max(baseTeamSize * complexityMultipliers[complexity], 3), 50);
    
    return {
        cost: Math.round(adjustedCost),
        duration: timeline,
        teamSize: Math.round(teamSize)
    };
}

function animateCalculatorResults(estimates) {
    const costElement = document.getElementById('estimated-cost');
    const durationElement = document.getElementById('estimated-duration');
    const teamElement = document.getElementById('team-size');
    
    animateNumber(costElement, 0, estimates.cost, 2000, (num) => `$${num.toLocaleString()}`);
    animateNumber(durationElement, 0, estimates.duration, 1500);
    animateNumber(teamElement, 0, estimates.teamSize, 1000);
}

function animateNumber(element, start, end, duration, formatter = (num) => num) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = formatter(current);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = formatter(end);
        }
    }
    
    requestAnimationFrame(update);
}

// Canvas animation
function initializeCanvas() {
    if (!servicesCanvas) return;
    
    const ctx = servicesCanvas.getContext('2d');
    let animationId;
    
    function resizeCanvas() {
        servicesCanvas.width = servicesCanvas.offsetWidth;
        servicesCanvas.height = servicesCanvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Geometric shapes animation
    const shapes = [];
    const maxShapes = 20;
    
    class Shape {
        constructor() {
            this.x = Math.random() * servicesCanvas.width;
            this.y = Math.random() * servicesCanvas.height;
            this.size = Math.random() * 30 + 10;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.rotation = 0;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.opacity = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.rotationSpeed;
            
            if (this.x < 0) this.x = servicesCanvas.width;
            if (this.x > servicesCanvas.width) this.x = 0;
            if (this.y < 0) this.y = servicesCanvas.height;
            if (this.y > servicesCanvas.height) this.y = 0;
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;
            ctx.strokeStyle = '#2DD4BF';
            ctx.lineWidth = 2;
            ctx.strokeRect(-this.size/2, -this.size/2, this.size, this.size);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < maxShapes; i++) {
        shapes.push(new Shape());
    }
    
    function animate() {
        ctx.clearRect(0, 0, servicesCanvas.width, servicesCanvas.height);
        
        shapes.forEach(shape => {
            shape.update();
            shape.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    };
}

// Quick navigation
function initializeQuickNav() {
    document.querySelectorAll('.quick-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Share functionality
function shareService(title) {
    if (navigator.share) {
        navigator.share({
            title: `${title} - ENGITECH Services`,
            text: `Learn about our ${title} services at ENGITECH`,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Service link copied to clipboard!');
        });
    }
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    const bgColor = type === 'error' ? 'bg-red-500' : 'bg-teal-500';
    toast.className = `fixed bottom-6 right-6 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-y-full opacity-0 transition-all duration-300`;
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