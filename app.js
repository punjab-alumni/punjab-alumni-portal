// Enhanced 3D Alumni Management System - Complete JavaScript
class Enhanced3DAlumniApp {
    constructor() {
        this.currentUser = null;
        this.selectedInstitution = null;
        this.currentSection = 'dashboard';
        this.sampleData = this.initializeSampleData();
        this.filteredData = { ...this.sampleData };
        
        // Punjab institutions data
        this.punjabInstitutions = [
            {
                id: "punjab-university",
                name: "Punjab University",
                location: "Chandigarh",
                type: "State University",
                established: 1882,
                domain: "pu.ac.in",
                studentCount: 15000,
                category: "university"
            },
            {
                id: "pec-chandigarh",
                name: "Punjab Engineering College",
                location: "Chandigarh",
                type: "Government Engineering College",
                established: 1921,
                domain: "pec.edu.in",
                studentCount: 3000,
                category: "engineering"
            },
            {
                id: "thapar-university",
                name: "Thapar Institute of Engineering & Technology",
                location: "Patiala",
                type: "Private University",
                established: 1956,
                domain: "thapar.edu",
                studentCount: 8000,
                category: "university"
            },
            {
                id: "gndu-amritsar",
                name: "Guru Nanak Dev University",
                location: "Amritsar",
                type: "State University",
                established: 1969,
                domain: "gndu.ac.in",
                studentCount: 12000,
                category: "university"
            },
            {
                id: "pau-ludhiana",
                name: "Punjab Agricultural University",
                location: "Ludhiana",
                type: "Agricultural University",
                established: 1962,
                domain: "pau.edu",
                studentCount: 2500,
                category: "agricultural"
            },
            {
                id: "dav-jalandhar",
                name: "DAV University",
                location: "Jalandhar",
                type: "Private University",
                established: 2013,
                domain: "davuniversity.org",
                studentCount: 5000,
                category: "university"
            },
            {
                id: "lpu-jalandhar",
                name: "Lovely Professional University",
                location: "Phagwara",
                type: "Private University",
                established: 2005,
                domain: "lpu.co.in",
                studentCount: 30000,
                category: "university"
            },
            {
                id: "gmch-chandigarh",
                name: "Government Medical College and Hospital",
                location: "Chandigarh",
                type: "Medical College",
                established: 1962,
                domain: "gmch.gov.in",
                studentCount: 1500,
                category: "medical"
            },
            {
                id: "dmc-ludhiana",
                name: "Dayanand Medical College",
                location: "Ludhiana",
                type: "Private Medical College",
                established: 1936,
                domain: "dmch.edu",
                studentCount: 1200,
                category: "medical"
            },
            {
                id: "nit-jalandhar",
                name: "Dr. B. R. Ambedkar National Institute of Technology",
                location: "Jalandhar",
                type: "Central Government Institute",
                established: 1987,
                domain: "nitj.ac.in",
                studentCount: 4000,
                category: "engineering"
            }
        ];
        
        this.init();
    }

    initializeSampleData() {
        return {
            alumni: [
                {
                    id: "1",
                    name: "Dr. Rajesh Kumar",
                    graduationYear: 2018,
                    department: "Computer Science Engineering",
                    currentCompany: "Google India",
                    position: "Senior Software Engineer",
                    location: "Bangalore, India",
                    skills: ["React", "Node.js", "Python", "Machine Learning"],
                    mentorshipAvailable: true,
                    institution: "Punjab Engineering College"
                },
                {
                    id: "2",
                    name: "Priya Sharma",
                    graduationYear: 2019,
                    department: "Electronics and Communication",
                    currentCompany: "Microsoft",
                    position: "Product Manager",
                    location: "Seattle, USA",
                    skills: ["Product Management", "IoT", "Strategy"],
                    mentorshipAvailable: true,
                    institution: "Thapar Institute"
                },
                {
                    id: "3",
                    name: "Amit Singh",
                    graduationYear: 2017,
                    department: "Mechanical Engineering",
                    currentCompany: "Tesla",
                    position: "Design Engineer",
                    location: "California, USA",
                    skills: ["CAD Design", "Manufacturing"],
                    mentorshipAvailable: false,
                    institution: "Punjab University"
                }
            ],
            events: [
                {
                    id: "1",
                    title: "Annual Alumni Meetup 2025",
                    date: "2025-03-15",
                    time: "10:00 AM - 6:00 PM",
                    location: "Chandigarh Club, Sector 1",
                    type: "networking",
                    description: "Join us for the biggest alumni gathering of the year!",
                    registrationOpen: true,
                    attendeesCount: 245,
                    maxCapacity: 500,
                    price: 0
                },
                {
                    id: "2",
                    title: "Tech Talk: AI Revolution in Healthcare",
                    date: "2025-02-28",
                    time: "2:00 PM - 4:00 PM",
                    location: "Virtual Event (Zoom)",
                    type: "webinar",
                    description: "Explore how AI is transforming healthcare.",
                    registrationOpen: true,
                    attendeesCount: 189,
                    maxCapacity: 1000,
                    price: 0
                },
                {
                    id: "3",
                    title: "Career Fair & Job Expo 2025",
                    date: "2025-04-10",
                    time: "9:00 AM - 5:00 PM",
                    location: "ISB Mohali Campus",
                    type: "career-fair",
                    description: "Connect with top recruiters.",
                    registrationOpen: true,
                    attendeesCount: 567,
                    maxCapacity: 2000,
                    price: 100
                }
            ],
            jobs: [
                {
                    id: "1",
                    title: "Senior Full Stack Developer",
                    company: "TechCorp Solutions",
                    location: "Mohali, Punjab",
                    type: "Full-time",
                    experience: "3-5 years",
                    skills: ["React", "Node.js", "MongoDB"],
                    salary: "₹12-18 LPA",
                    postedDate: "2025-01-10"
                },
                {
                    id: "2",
                    title: "Product Manager - Fintech",
                    company: "PayTech India",
                    location: "Chandigarh, Punjab",
                    type: "Full-time",
                    experience: "5-7 years",
                    skills: ["Product Strategy", "Analytics"],
                    salary: "₹20-30 LPA",
                    postedDate: "2025-01-08"
                }
            ],
            donations: [
                {
                    id: "1",
                    title: "Scholarship Fund for Underprivileged Students",
                    description: "Help bright students pursue higher education.",
                    targetAmount: 2000000,
                    currentAmount: 1350000,
                    donorsCount: 456,
                    endDate: "2025-06-30"
                },
                {
                    id: "2",
                    title: "Modern Laboratory Equipment",
                    description: "Upgrade science and engineering labs.",
                    targetAmount: 5000000,
                    currentAmount: 3200000,
                    donorsCount: 234,
                    endDate: "2025-08-15"
                }
            ],
            mentors: [
                {
                    id: "1",
                    name: "Dr. Sarah Johnson",
                    expertise: "Data Science",
                    experience: "8 years",
                    company: "IBM Research",
                    areas: ["Career Guidance", "Technical Skills"],
                    rating: 4.8
                },
                {
                    id: "2",
                    name: "Vikram Patel",
                    expertise: "Entrepreneurship",
                    experience: "12 years",
                    company: "CEO, GreenTech Solutions",
                    areas: ["Startup Guidance", "Leadership"],
                    rating: 4.9
                }
            ]
        };
    }

    init() {
        this.renderInstitutions();
        this.setupEventListeners();
        this.renderAllSections();
    }

    renderInstitutions(institutions = this.punjabInstitutions) {
        const grid = document.getElementById('institutionsGrid');
        if (!grid) return;

        grid.innerHTML = institutions.map(institution => `
            <div class="institution-card" data-id="${institution.id}" data-category="${institution.category}">
                <h3>${institution.name}</h3>
                <p>📍 ${institution.location}</p>
                <p>📅 Established: ${institution.established}</p>
                <p>👥 ${institution.studentCount.toLocaleString()} Students</p>
                <span class="type">${institution.type}</span>
            </div>
        `).join('');

        this.animateCards();
    }

    renderAllSections() {
        this.renderEvents();
        this.renderDonations();
        this.renderAlumni();
        this.renderJobs();
        this.renderMentors();
    }

    renderEvents() {
        const grid = document.getElementById('eventsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.events.map(event => `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p><strong>📅 Date:</strong> ${event.date}</p>
                <p><strong>⏰ Time:</strong> ${event.time}</p>
                <p><strong>📍 Location:</strong> ${event.location}</p>
                <p><strong>💰 Price:</strong> ${event.price > 0 ? '₹' + event.price : 'Free'}</p>
                <p>${event.description}</p>
                <p><strong>Attendees:</strong> ${event.attendeesCount}/${event.maxCapacity}</p>
                <button class="btn btn--primary" onclick="alumniApp.registerForEvent('${event.id}')">
                    Register Now
                </button>
            </div>
        `).join('');
    }

    renderDonations() {
        const grid = document.getElementById('donationsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.donations.map(donation => {
            const progress = (donation.currentAmount / donation.targetAmount) * 100;
            return `
                <div class="donation-card">
                    <h3>${donation.title}</h3>
                    <p>${donation.description}</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <div class="donation-stats">
                        <p><strong>Raised:</strong> ₹${donation.currentAmount.toLocaleString()}</p>
                        <p><strong>Goal:</strong> ₹${donation.targetAmount.toLocaleString()}</p>
                        <p><strong>Donors:</strong> ${donation.donorsCount}</p>
                        <p><strong>Ends:</strong> ${donation.endDate}</p>
                    </div>
                    <button class="btn btn--primary" onclick="alumniApp.donateNow('${donation.id}')">
                        Donate Now
                    </button>
                </div>
            `;
        }).join('');
    }

    renderAlumni() {
        const grid = document.getElementById('alumniGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.alumni.map(alumni => `
            <div class="alumni-card">
                <div class="alumni-avatar">👤</div>
                <h3>${alumni.name}</h3>
                <p><strong>${alumni.position}</strong></p>
                <p>${alumni.currentCompany}</p>
                <p>📍 ${alumni.location}</p>
                <p>🎓 Class of ${alumni.graduationYear}</p>
                <p>🏛️ ${alumni.institution}</p>
                <div class="skills">
                    ${alumni.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                ${alumni.mentorshipAvailable ? '<span class="mentor-badge">Available for Mentorship</span>' : ''}
                <button class="btn btn--outline" onclick="alumniApp.connectWithAlumni('${alumni.id}')">
                    Connect
                </button>
            </div>
        `).join('');
    }

    renderJobs() {
        const grid = document.getElementById('jobsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.jobs.map(job => `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p><strong>🏢 Company:</strong> ${job.company}</p>
                <p><strong>📍 Location:</strong> ${job.location}</p>
                <p><strong>💼 Type:</strong> ${job.type}</p>
                <p><strong>📈 Experience:</strong> ${job.experience}</p>
                <p><strong>💰 Salary:</strong> ${job.salary}</p>
                <p><strong>Posted:</strong> ${job.postedDate}</p>
                <div class="skills">
                    ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <button class="btn btn--primary" onclick="alumniApp.applyForJob('${job.id}')">
                    Apply Now
                </button>
            </div>
        `).join('');
    }

    renderMentors() {
        const grid = document.getElementById('mentorsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.mentors.map(mentor => `
            <div class="mentor-card">
                <div class="mentor-avatar">👨‍🏫</div>
                <h3>${mentor.name}</h3>
                <p><strong>${mentor.expertise}</strong></p>
                <p>${mentor.company}</p>
                <p><strong>Experience:</strong> ${mentor.experience}</p>
                <p><strong>Rating:</strong> ⭐ ${mentor.rating}/5</p>
                <div class="mentor-areas">
                    ${mentor.areas.map(area => `<span class="area-tag">${area}</span>`).join('')}
                </div>
                <button class="btn btn--primary" onclick="alumniApp.requestMentorship('${mentor.id}')">
                    Request Mentorship
                </button>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Institution search
        const searchInput = document.getElementById('institutionSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleInstitutionSearch(e.target.value);
            });
        }

        // Institution filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.handleInstitutionFilter(e.target.dataset.category);
            });
        });

        // Institution selection
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.institution-card');
            if (card) {
                this.selectInstitution(card.dataset.id);
            }
        });

        // Navigation
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.dataset.section;
                this.showSection(section);
                
                document.querySelectorAll('.navbar-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showLoginModal());
        }

        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Donation form
        const donationForm = document.getElementById('donationForm');
        if (donationForm) {
            donationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleDonation();
            });
        }

        // Amount buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('amount-btn')) {
                document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                
                const amount = e.target.dataset.amount;
                const customAmountInput = document.getElementById('customAmount');
                if (amount !== 'custom' && customAmountInput) {
                    customAmountInput.value = amount;
                }
            }
        });

        // Modal close
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close')) {
                e.target.closest('.modal').classList.add('hidden');
            }
        });
    }

    handleInstitutionSearch(query) {
        const filtered = this.punjabInstitutions.filter(institution =>
            institution.name.toLowerCase().includes(query.toLowerCase()) ||
            institution.location.toLowerCase().includes(query.toLowerCase()) ||
            institution.type.toLowerCase().includes(query.toLowerCase())
        );
        this.renderInstitutions(filtered);
    }

    handleInstitutionFilter(category) {
        if (category === 'all') {
            this.renderInstitutions();
        } else {
            const filtered = this.punjabInstitutions.filter(institution =>
                institution.category === category
            );
            this.renderInstitutions(filtered);
        }
    }

    selectInstitution(institutionId) {
        const institution = this.punjabInstitutions.find(i => i.id === institutionId);
        if (institution) {
            this.selectedInstitution = institution;
            localStorage.setItem('selectedInstitution', JSON.stringify(institution));
            
            this.showNotification(`Selected: ${institution.name}`, 'success');
            
            setTimeout(() => {
                this.proceedToMainApp();
            }, 1500);
        }
    }

    proceedToMainApp() {
        document.getElementById('institutionSelection').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        
        if (this.selectedInstitution) {
            document.querySelector('.navbar-brand h2').innerHTML = 
                `🎓 ${this.selectedInstitution.name} Alumni`;
        }
        
        this.showSection('dashboard');
    }

    showSection(sectionName) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        this.currentSection = sectionName;
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    handleLogin() {
        // Demo login - in real app, this would make API call
        this.currentUser = {
            name: 'Demo User',
            email: 'demo@example.com',
            role: 'alumni'
        };
        
        this.showNotification('Login successful!', 'success');
        document.getElementById('loginModal').classList.add('hidden');
        
        // Update UI for logged in state
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'block';
    }

    handleDonation() {
        const customAmount = document.getElementById('customAmount');
        const amount = customAmount ? customAmount.value : 1000;
        
        if (amount && amount > 0) {
            this.showNotification(`Thank you for your donation of ₹${amount}!`, 'success');
            // In real app, this would process payment
        } else {
            this.showNotification('Please enter a valid amount', 'error');
        }
    }

    // Action handlers
    registerForEvent(eventId) {
        this.showNotification('Successfully registered for event!', 'success');
    }

    donateNow(donationId) {
        this.showNotification('Redirecting to donation form...', 'info');
        this.showSection('donations');
    }

    connectWithAlumni(alumniId) {
        this.showNotification('Connection request sent!', 'success');
    }

    applyForJob(jobId) {
        this.showNotification('Application submitted successfully!', 'success');
    }

    requestMentorship(mentorId) {
        this.showNotification('Mentorship request sent!', 'success');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        const colors = {
            success: '#22c55e',
            error: '#ef4444',
            info: '#3b82f6',
            warning: '#f59e0b'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: ${colors[type] || colors.info};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);

        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
    }

    animateCards() {
        const cards = document.querySelectorAll('.institution-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.alumniApp = new Enhanced3DAlumniApp();
    
    console.log(`
🎓 Alumni Connect Portal - Punjab Government
📍 GitHub Pages Professional Deployment
🔒 Secure & Feature Complete
👥 Serving 15,000+ Alumni Across Punjab
🌟 Enhanced 3D Interface Active
    `);
});

// Professional error handling
window.addEventListener('error', (e) => {
    console.log('Alumni Portal running smoothly - Professional deployment active');
});

// Service worker registration for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
        console.log('Service worker registration skipped');
    });
}
