// Enhanced 3D Alumni Management System - FIXED VERSION
class Enhanced3DAlumniApp {
    constructor() {
        this.currentUser = null;
        this.selectedInstitution = null;
        this.currentSection = 'dashboard';
        this.isLoggedIn = false;
        this.sampleData = this.initializeSampleData();
        
        // Punjab institutions comprehensive database
        this.punjabInstitutions = [
            {
                id: "punjab-university",
                name: "Punjab University",
                shortName: "Punjab University",
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
                shortName: "Punjab Engineering College",
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
                shortName: "Thapar Institute",
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
                shortName: "Guru Nanak Dev University",
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
                shortName: "PAU Ludhiana",
                location: "Ludhiana",
                type: "Agricultural University",
                established: 1962,
                domain: "pau.edu",
                studentCount: 2500,
                category: "agricultural"
            },
            {
                id: "lpu-jalandhar",
                name: "Lovely Professional University",
                shortName: "LPU",
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
                shortName: "GMCH Chandigarh",
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
                shortName: "DMC Ludhiana",
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
                shortName: "NIT Jalandhar",
                location: "Jalandhar",
                type: "Central Government Institute",
                established: 1987,
                domain: "nitj.ac.in",
                studentCount: 4000,
                category: "engineering"
            },
            {
                id: "dav-jalandhar",
                name: "DAV University",
                shortName: "DAV University",
                location: "Jalandhar",
                type: "Private University",
                established: 2013,
                domain: "davuniversity.org",
                studentCount: 5000,
                category: "university"
            }
        ];
        
        // Demo login credentials
        this.demoCredentials = [
            { email: "admin@pu.ac.in", password: "Admin123!", role: "admin", name: "Admin User", institution: "Punjab University" },
            { email: "alumni@pec.edu.in", password: "Alumni123!", role: "alumni", name: "John Doe", institution: "Punjab Engineering College" },
            { email: "student@thapar.edu", password: "Student123!", role: "student", name: "Jane Smith", institution: "Thapar University" },
            { email: "demo@gndu.ac.in", password: "Demo123!", role: "alumni", name: "Demo Alumni", institution: "Guru Nanak Dev University" }
        ];
        
        this.init();
    }

    // Initialize sample data
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
                    skills: ["React", "Node.js", "Python", "Machine Learning", "Cloud Computing"],
                    mentorshipAvailable: true,
                    institution: "Punjab Engineering College",
                    email: "rajesh.kumar@gmail.com",
                    phone: "+91 9876543210",
                    avatar: "👨‍💻"
                },
                {
                    id: "2",
                    name: "Priya Sharma",
                    graduationYear: 2019,
                    department: "Electronics and Communication",
                    currentCompany: "Microsoft",
                    position: "Product Manager",
                    location: "Seattle, USA",
                    skills: ["Product Management", "IoT", "Strategy", "Leadership"],
                    mentorshipAvailable: true,
                    institution: "Thapar Institute",
                    email: "priya.sharma@microsoft.com",
                    phone: "+1 555-0123",
                    avatar: "👩‍💼"
                },
                {
                    id: "3",
                    name: "Amit Singh",
                    graduationYear: 2017,
                    department: "Mechanical Engineering",
                    currentCompany: "Tesla",
                    position: "Design Engineer",
                    location: "California, USA",
                    skills: ["CAD Design", "Manufacturing", "Innovation"],
                    mentorshipAvailable: false,
                    institution: "Punjab University",
                    email: "amit.singh@tesla.com",
                    phone: "+1 555-0456",
                    avatar: "👨‍🔧"
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
                    description: "Join us for the biggest alumni gathering of the year! Network with fellow graduates, share success stories, and reconnect with your alma mater.",
                    registrationOpen: true,
                    attendeesCount: 245,
                    maxCapacity: 500,
                    price: 0,
                    organizer: "Alumni Association Punjab",
                    image: "📅",
                    highlights: ["Keynote Speakers", "Networking", "Cultural Programs", "Awards Ceremony"]
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
                    skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
                    salary: "₹12-18 LPA",
                    postedDate: "2025-01-10",
                    description: "Join our growing team to build scalable web applications using modern technologies.",
                    contactEmail: "hr@techcorp.com",
                    companyLogo: "🏢",
                    urgentHiring: true,
                    applicants: 45
                }
            ],
            donations: [
                {
                    id: "1",
                    title: "Scholarship Fund for Underprivileged Students",
                    description: "Help bright students from economically disadvantaged backgrounds pursue their dreams of higher education.",
                    targetAmount: 2000000,
                    currentAmount: 1350000,
                    donorsCount: 456,
                    endDate: "2025-06-30",
                    category: "Education",
                    impact: "135 students supported so far",
                    image: "🎓"
                }
            ],
            mentors: [
                {
                    id: "1",
                    name: "Dr. Sarah Johnson",
                    expertise: "Data Science & AI",
                    experience: "8 years",
                    company: "IBM Research",
                    areas: ["Career Guidance", "Technical Skills", "Interview Preparation", "Research"],
                    rating: 4.8,
                    sessions: 45,
                    bio: "Leading data scientist with expertise in machine learning and AI applications.",
                    avatar: "👩‍🔬",
                    availability: "Weekends"
                }
            ],
            programs: [
                {
                    id: "1",
                    title: "Alumni Mentorship Program",
                    description: "Connect with experienced professionals for career guidance, skill development, and industry insights.",
                    duration: "6 months",
                    participants: 156,
                    nextBatch: "2025-03-01",
                    requirements: ["Current student or recent graduate", "Commitment to regular sessions"],
                    benefits: ["1-on-1 mentoring", "Industry networking", "Skill workshops", "Career counseling"],
                    image: "🤝",
                    fee: 0
                }
            ]
        };
    }

    init() {
        this.hideLoadingScreen();
        this.showInstitutionSelection();
        this.renderInstitutions();
        this.setupEventListeners();
        this.renderAllSections();
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const institutionScreen = document.getElementById('institutionSelection');
        
        if (loadingScreen && institutionScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                institutionScreen.classList.add('show');
                
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    institutionScreen.classList.remove('hidden');
                    institutionScreen.style.display = 'flex';
                }, 500);
            }, 2000);
        }
    }

    showInstitutionSelection() {
        const institutionScreen = document.getElementById('institutionSelection');
        const mainApp = document.getElementById('mainApp');
        
        if (institutionScreen && mainApp) {
            institutionScreen.style.display = 'flex';
            institutionScreen.classList.remove('hidden');
            mainApp.style.display = 'none';
            mainApp.classList.add('hidden');
        }
    }

    renderInstitutions(institutions = this.punjabInstitutions) {
        const grid = document.getElementById('institutionsGrid');
        if (!grid) return;

        grid.innerHTML = institutions.map((institution, index) => `
            <div class="institution-card animate-slide-up" data-id="${institution.id}" data-category="${institution.category}" style="animation-delay: ${index * 100}ms;">
                <h3>${institution.name}</h3>
                <p>📍 ${institution.location}</p>
                <p>📅 Established: ${institution.established}</p>
                <p>👥 ${institution.studentCount.toLocaleString()} Students</p>
                <p>🌐 ${institution.domain}</p>
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
        this.renderPrograms();
    }

    renderEvents() {
        const grid = document.getElementById('eventsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.events.map(event => `
            <div class="event-card animate-fade-in">
                <div class="event-header">
                    <div class="event-icon">${event.image}</div>
                    <div class="event-badge">${event.type.toUpperCase()}</div>
                </div>
                <h3>${event.title}</h3>
                <div class="event-details">
                    <p><strong>📅 Date:</strong> ${event.date}</p>
                    <p><strong>⏰ Time:</strong> ${event.time}</p>
                    <p><strong>📍 Location:</strong> ${event.location}</p>
                    <p><strong>💰 Price:</strong> ${event.price > 0 ? '₹' + event.price : 'Free'}</p>
                    <p><strong>👥 Attendees:</strong> ${event.attendeesCount}/${event.maxCapacity}</p>
                </div>
                <p class="event-description">${event.description}</p>
                <div class="event-highlights">
                    ${event.highlights.map(highlight => `<span class="highlight-tag">${highlight}</span>`).join('')}
                </div>
                <div class="event-footer">
                    <p class="organizer">Organized by: ${event.organizer}</p>
                    <button class="btn-3d btn-primary" onclick="alumniApp.registerForEvent('${event.id}')">
                        <span class="icon">📅</span>
                        <span class="text">Register Now</span>
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderDonations() {
        const grid = document.getElementById('donationCampaigns');
        if (!grid) return;

        grid.innerHTML = this.sampleData.donations.map(donation => {
            const progress = (donation.currentAmount / donation.targetAmount) * 100;
            return `
                <div class="campaign-card animate-fade-in">
                    <div class="campaign-header">
                        <div class="campaign-icon">${donation.image}</div>
                        <div class="campaign-category">${donation.category}</div>
                    </div>
                    <h3>${donation.title}</h3>
                    <p class="campaign-description">${donation.description}</p>
                    
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="progress-text">${Math.round(progress)}% Complete</div>
                    </div>
                    
                    <div class="donation-stats">
                        <div class="stat">
                            <strong>₹${(donation.currentAmount / 100000).toFixed(1)}L</strong>
                            <span>Raised</span>
                        </div>
                        <div class="stat">
                            <strong>₹${(donation.targetAmount / 100000).toFixed(1)}L</strong>
                            <span>Goal</span>
                        </div>
                        <div class="stat">
                            <strong>${donation.donorsCount}</strong>
                            <span>Donors</span>
                        </div>
                    </div>
                    
                    <div class="impact-info">
                        <p class="impact">💫 Impact: ${donation.impact}</p>
                        <p class="deadline">⏰ Ends: ${donation.endDate}</p>
                    </div>
                    
                    <button class="btn-3d btn-primary" onclick="alumniApp.selectDonationCampaign('${donation.id}')">
                        <span class="icon">💝</span>
                        <span class="text">Donate Now</span>
                    </button>
                </div>
            `;
        }).join('');
    }

    renderAlumni() {
        const grid = document.getElementById('alumniGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.alumni.map(alumni => `
            <div class="alumni-card animate-fade-in">
                <div class="alumni-header">
                    <div class="alumni-avatar">${alumni.avatar}</div>
                    <div class="alumni-info">
                        <h3>${alumni.name}</h3>
                        <p class="position">${alumni.position}</p>
                        <p class="company">🏢 ${alumni.currentCompany}</p>
                    </div>
                </div>
                
                <div class="alumni-details">
                    <p><strong>📍 Location:</strong> ${alumni.location}</p>
                    <p><strong>🎓 Class of:</strong> ${alumni.graduationYear}</p>
                    <p><strong>🏛️ Institution:</strong> ${alumni.institution}</p>
                    <p><strong>📧 Email:</strong> ${alumni.email}</p>
                    <p><strong>📞 Phone:</strong> ${alumni.phone}</p>
                </div>
                
                <div class="skills-container">
                    <strong>🛠️ Skills:</strong>
                    <div class="skills">
                        ${alumni.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                
                ${alumni.mentorshipAvailable ? 
                    '<div class="mentor-badge">✅ Available for Mentorship</div>' : 
                    '<div class="unavailable-badge">❌ Not Available for Mentorship</div>'
                }
                
                <div class="alumni-actions">
                    <button class="btn-3d btn-outline" onclick="alumniApp.connectWithAlumni('${alumni.id}')">
                        <span class="icon">📧</span>
                        <span class="text">Connect</span>
                    </button>
                    ${alumni.mentorshipAvailable ? 
                        `<button class="btn-3d btn-primary" onclick="alumniApp.requestMentorship('${alumni.id}')">
                            <span class="icon">🤝</span>
                            <span class="text">Request Mentorship</span>
                        </button>` : ''
                    }
                </div>
            </div>
        `).join('');
    }

    renderJobs() {
        const grid = document.getElementById('jobsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.jobs.map(job => `
            <div class="job-card animate-fade-in">
                <div class="job-header">
                    <div class="company-logo">${job.companyLogo}</div>
                    <div class="job-meta">
                        ${job.urgentHiring ? '<span class="urgent-badge">🔥 Urgent Hiring</span>' : ''}
                        <span class="job-type">${job.type}</span>
                    </div>
                </div>
                
                <h3>${job.title}</h3>
                <p class="company-name"><strong>🏢 ${job.company}</strong></p>
                
                <div class="job-details">
                    <p><strong>📍 Location:</strong> ${job.location}</p>
                    <p><strong>💼 Experience:</strong> ${job.experience}</p>
                    <p><strong>💰 Salary:</strong> ${job.salary}</p>
                    <p><strong>📅 Posted:</strong> ${job.postedDate}</p>
                    <p><strong>👥 Applicants:</strong> ${job.applicants}</p>
                    <p><strong>📧 Contact:</strong> ${job.contactEmail}</p>
                </div>
                
                <p class="job-description">${job.description}</p>
                
                <div class="skills-required">
                    <strong>🛠️ Required Skills:</strong>
                    <div class="skills">
                        ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                
                <button class="btn-3d btn-primary" onclick="alumniApp.applyForJob('${job.id}')">
                    <span class="icon">💼</span>
                    <span class="text">Apply Now</span>
                </button>
            </div>
        `).join('');
    }

    renderMentors() {
        const grid = document.getElementById('mentorsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.mentors.map(mentor => `
            <div class="mentor-card animate-fade-in">
                <div class="mentor-header">
                    <div class="mentor-avatar">${mentor.avatar}</div>
                    <div class="mentor-info">
                        <h3>${mentor.name}</h3>
                        <p class="expertise">${mentor.expertise}</p>
                        <p class="company">🏢 ${mentor.company}</p>
                    </div>
                </div>
                
                <div class="mentor-stats">
                    <div class="stat">
                        <strong>⭐ ${mentor.rating}/5</strong>
                        <span>Rating</span>
                    </div>
                    <div class="stat">
                        <strong>${mentor.sessions}</strong>
                        <span>Sessions</span>
                    </div>
                    <div class="stat">
                        <strong>${mentor.experience}</strong>
                        <span>Experience</span>
                    </div>
                </div>
                
                <p class="mentor-bio">${mentor.bio}</p>
                
                <div class="mentor-areas">
                    <strong>🎯 Specializes in:</strong>
                    <div class="areas">
                        ${mentor.areas.map(area => `<span class="area-tag">${area}</span>`).join('')}
                    </div>
                </div>
                
                <div class="availability">
                    <strong>📅 Available:</strong> ${mentor.availability}
                </div>
                
                <button class="btn-3d btn-primary" onclick="alumniApp.requestMentorship('${mentor.id}')">
                    <span class="icon">🤝</span>
                    <span class="text">Request Mentorship</span>
                </button>
            </div>
        `).join('');
    }

    renderPrograms() {
        const grid = document.getElementById('programsGrid');
        if (!grid) return;

        grid.innerHTML = this.sampleData.programs.map(program => `
            <div class="program-card animate-fade-in">
                <div class="program-header">
                    <div class="program-icon">${program.image}</div>
                    <div class="program-fee">${program.fee > 0 ? '₹' + program.fee.toLocaleString() : 'Free'}</div>
                </div>
                
                <h3>${program.title}</h3>
                <p class="program-description">${program.description}</p>
                
                <div class="program-info">
                    <div class="info-item">
                        <strong>⏱️ Duration:</strong> ${program.duration}
                    </div>
                    <div class="info-item">
                        <strong>👥 Participants:</strong> ${program.participants}
                    </div>
                    <div class="info-item">
                        <strong>📅 Next Batch:</strong> ${program.nextBatch}
                    </div>
                </div>
                
                <div class="requirements">
                    <strong>📋 Requirements:</strong>
                    <ul>
                        ${program.requirements.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="benefits">
                    <strong>🎁 Benefits:</strong>
                    <div class="benefit-tags">
                        ${program.benefits.map(benefit => `<span class="benefit-tag">${benefit}</span>`).join('')}
                    </div>
                </div>
                
                <button class="btn-3d btn-primary" onclick="alumniApp.joinProgram('${program.id}')">
                    <span class="icon">🚀</span>
                    <span class="text">Join Program</span>
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
        document.querySelectorAll('.filter-btn-3d').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn-3d').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.handleInstitutionFilter(e.target.dataset.category);
            });
        });

        // Institution selection - FIXED
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.institution-card');
            if (card && card.dataset.id) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Institution card clicked:', card.dataset.id);
                this.selectInstitution(card.dataset.id);
            }
        });

        // Navigation
        document.querySelectorAll('.navbar-link-3d').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.closest('.navbar-link-3d').dataset.section;
                this.showSection(section);
                
                document.querySelectorAll('.navbar-link-3d').forEach(l => l.classList.remove('active'));
                e.target.closest('.navbar-link-3d').classList.add('active');
            });
        });

        // Login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showLoginModal());
        }

        // Logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.handleLogout());
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
            if (e.target.classList.contains('amount-btn-3d')) {
                document.querySelectorAll('.amount-btn-3d').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                
                const amount = e.target.dataset.amount;
                const customAmountInput = document.getElementById('customAmount');
                if (amount !== 'custom' && customAmountInput) {
                    customAmountInput.value = amount;
                    customAmountInput.style.display = 'none';
                } else if (customAmountInput) {
                    customAmountInput.style.display = 'block';
                    customAmountInput.focus();
                }
            }
        });

        // Modal close functionality
        document.addEventListener('click', (e) => {
            if (e.target.id === 'closeModal' || e.target.classList.contains('modal-backdrop')) {
                document.querySelectorAll('.modal-3d').forEach(modal => {
                    modal.classList.add('hidden');
                });
            }
        });

        // Alumni search
        const alumniSearchInput = document.getElementById('alumniSearch');
        if (alumniSearchInput) {
            alumniSearchInput.addEventListener('input', (e) => {
                this.handleAlumniSearch(e.target.value);
            });
        }
    }

    handleInstitutionSearch(query) {
        const filtered = this.punjabInstitutions.filter(institution =>
            institution.name.toLowerCase().includes(query.toLowerCase()) ||
            institution.location.toLowerCase().includes(query.toLowerCase()) ||
            institution.type.toLowerCase().includes(query.toLowerCase()) ||
            institution.domain.toLowerCase().includes(query.toLowerCase())
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

    // FIXED INSTITUTION SELECTION
    selectInstitution(institutionId) {
        console.log('Selecting institution:', institutionId);
        
        const institution = this.punjabInstitutions.find(i => i.id === institutionId);
        if (institution) {
            this.selectedInstitution = institution;
            console.log('Found institution:', institution);
            
            // Show selection feedback
            this.showNotification(`Selected: ${institution.name}`, 'success');
            
            // Proceed to main app immediately
            setTimeout(() => {
                this.proceedToMainApp();
            }, 1000);
        } else {
            console.error('Institution not found:', institutionId);
            this.showNotification('Institution not found', 'error');
        }
    }

    // FIXED MAIN APP TRANSITION
    proceedToMainApp() {
        console.log('Proceeding to main app...');
        
        const institutionScreen = document.getElementById('institutionSelection');
        const mainApp = document.getElementById('mainApp');
        
        if (institutionScreen && mainApp) {
            // Hide institution selection
            institutionScreen.style.display = 'none';
            institutionScreen.classList.add('hidden');
            
            // Show main app
            mainApp.style.display = 'block';
            mainApp.classList.remove('hidden');
            
            // Update navbar with selected institution
            if (this.selectedInstitution) {
                const institutionNameEl = document.getElementById('institutionName');
                if (institutionNameEl) {
                    institutionNameEl.textContent = this.selectedInstitution.shortName || this.selectedInstitution.name;
                }
            }
            
            this.showSection('dashboard');
            this.updateLoginState();
            
            console.log('Successfully transitioned to main app');
            this.showNotification('Welcome to Alumni Portal!', 'success');
        } else {
            console.error('Could not find required elements for transition');
        }
    }

    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.section-3d').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block';
        }
        
        this.currentSection = sectionName;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    handleLogin() {
        const form = document.getElementById('loginForm');
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        
        // Find matching credentials
        const user = this.demoCredentials.find(cred => 
            cred.email === email && cred.password === password
        );
        
        if (user) {
            this.currentUser = user;
            this.isLoggedIn = true;
            
            this.showNotification(`Welcome back, ${user.name}! (${user.role})`, 'success');
            document.getElementById('loginModal').classList.add('hidden');
            this.updateLoginState();
            
            // Clear form
            form.reset();
        } else {
            this.showNotification('Invalid email or password. Please use demo credentials.', 'error');
        }
    }

    handleLogout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.selectedInstitution = null;
        
        this.showNotification('Logged out successfully', 'success');
        
        // Return to institution selection
        setTimeout(() => {
            document.getElementById('mainApp').style.display = 'none';
            document.getElementById('mainApp').classList.add('hidden');
            document.getElementById('institutionSelection').style.display = 'flex';
            document.getElementById('institutionSelection').classList.remove('hidden');
            this.updateLoginState();
        }, 1000);
    }

    updateLoginState() {
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const userNameDisplay = document.getElementById('userNameDisplay');
        
        if (this.isLoggedIn && this.currentUser) {
            if (loginBtn) loginBtn.style.display = 'none';
            if (logoutBtn) {
                logoutBtn.style.display = 'flex';
                if (userNameDisplay) {
                    userNameDisplay.textContent = this.currentUser.name;
                }
            }
        } else {
            if (loginBtn) loginBtn.style.display = 'flex';
            if (logoutBtn) logoutBtn.style.display = 'none';
        }
    }

    selectDonationCampaign(campaignId) {
        this.showSection('donations');
        this.showNotification('Donation form loaded', 'info');
        
        setTimeout(() => {
            const donationForm = document.getElementById('donationFormContainer');
            if (donationForm) {
                donationForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 500);
    }

    handleDonation() {
        if (!this.isLoggedIn) {
            this.showNotification('Please login to make a donation', 'warning');
            this.showLoginModal();
            return;
        }

        const customAmount = document.getElementById('customAmount');
        const selectedAmountBtn = document.querySelector('.amount-btn-3d.active');
        const donorName = document.getElementById('donorName').value;
        const donorEmail = document.getElementById('donorEmail').value;
        const purpose = document.getElementById('donationPurpose').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;
        
        let amount = 0;
        
        if (selectedAmountBtn) {
            amount = selectedAmountBtn.dataset.amount === 'custom' 
                ? parseInt(customAmount?.value || 0)
                : parseInt(selectedAmountBtn.dataset.amount || 0);
        }
        
        if (!donorName || !donorEmail || !purpose || !paymentMethod) {
            this.showNotification('Please fill all required fields', 'error');
            return;
        }
        
        if (amount && amount > 0) {
            this.showNotification('Processing payment...', 'info');
            
            setTimeout(() => {
                this.showNotification(`Thank you for your donation of ₹${amount.toLocaleString()}!`, 'success');
                document.getElementById('donationForm').reset();
                document.querySelectorAll('.amount-btn-3d').forEach(btn => btn.classList.remove('active'));
            }, 2000);
        } else {
            this.showNotification('Please select or enter a valid donation amount', 'error');
        }
    }

    handleAlumniSearch(query) {
        const filtered = this.sampleData.alumni.filter(alumni =>
            alumni.name.toLowerCase().includes(query.toLowerCase()) ||
            alumni.currentCompany.toLowerCase().includes(query.toLowerCase()) ||
            alumni.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase())) ||
            alumni.location.toLowerCase().includes(query.toLowerCase()) ||
            alumni.position.toLowerCase().includes(query.toLowerCase())
        );
        
        const grid = document.getElementById('alumniGrid');
        if (!grid) return;

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>No alumni found</h3>
                    <p>Try adjusting your search criteria</p>
                    <button class="btn-3d btn-primary" onclick="alumniApp.renderAlumni()">
                        <span class="text">Show All Alumni</span>
                    </button>
                </div>
            `;
        } else {
            const originalData = this.sampleData.alumni;
            this.sampleData.alumni = filtered;
            this.renderAlumni();
            this.sampleData.alumni = originalData;
        }
    }

    // Action handlers
    registerForEvent(eventId) {
        if (!this.isLoggedIn) {
            this.showNotification('Please login to register for events', 'warning');
            this.showLoginModal();
            return;
        }
        
        this.showNotification('Successfully registered for event!', 'success');
    }

    connectWithAlumni(alumniId) {
        if (!this.isLoggedIn) {
            this.showNotification('Please login to connect with alumni', 'warning');
            this.showLoginModal();
            return;
        }
        
        this.showNotification('Connection request sent!', 'success');
    }

    applyForJob(jobId) {
        if (!this.isLoggedIn) {
            this.showNotification('Please login to apply for jobs', 'warning');
            this.showLoginModal();
            return;
        }
        
        this.showNotification('Job application submitted successfully!', 'success');
    }

    requestMentorship(mentorId) {
        if (!this.isLoggedIn) {
            this.showNotification('Please login to request mentorship', 'warning');
            this.showLoginModal();
            return;
        }
        
        this.showNotification('Mentorship request sent!', 'success');
    }

    joinProgram(programId) {
        if (!this.isLoggedIn) {
            this.showNotification('Please login to join programs', 'warning');
            this.showLoginModal();
            return;
        }
        
        this.showNotification('Program registration successful!', 'success');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification-3d notification-${type}`;
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6',
            warning: '#f59e0b'
        };
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icons[type]}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: ${colors[type]};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 1rem;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        const autoRemoveTimer = setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.remove();
                }
            }, 300);
        }, type === 'success' ? 4000 : 3000);

        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(autoRemoveTimer);
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.remove();
                }
            }, 300);
        });
    }

    animateCards() {
        const cards = document.querySelectorAll('.institution-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) rotateX(15deg)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) rotateX(0deg)';
            }, index * 150);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.alumniApp = new Enhanced3DAlumniApp();
    console.log('Alumni Portal - FIXED VERSION - All systems operational!');
});
