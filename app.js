class AlumniPortal {
    constructor() {
        this.institutions = [
            { id: 1, name: "Punjab University", location: "Chandigarh", type: "State University", category: "university", students: "15,000" },
            { id: 2, name: "Punjab Engineering College", location: "Chandigarh", type: "Engineering College", category: "engineering", students: "3,000" },
            { id: 3, name: "Thapar Institute of Engineering", location: "Patiala", type: "Private University", category: "university", students: "8,000" },
            { id: 4, name: "Guru Nanak Dev University", location: "Amritsar", type: "State University", category: "university", students: "12,000" },
            { id: 5, name: "Punjab Agricultural University", location: "Ludhiana", type: "Agricultural University", category: "university", students: "2,500" },
            { id: 6, name: "Government Medical College", location: "Chandigarh", type: "Medical College", category: "medical", students: "1,500" },
            { id: 7, name: "Dayanand Medical College", location: "Ludhiana", type: "Medical College", category: "medical", students: "1,200" },
            { id: 8, name: "Lovely Professional University", location: "Phagwara", type: "Private University", category: "university", students: "30,000" }
        ];
        
        this.init();
    }
    
    init() {
        this.renderInstitutions();
        this.setupEventListeners();
        this.animateElements();
    }
    
    renderInstitutions(institutions = this.institutions) {
        const container = document.getElementById('institutionsList');
        container.innerHTML = institutions.map(inst => `
            <div class="institution" data-id="${inst.id}" data-category="${inst.category}">
                <h3>${inst.name}</h3>
                <p>📍 ${inst.location}</p>
                <p>👥 ${inst.students} Students</p>
                <span class="type">${inst.type}</span>
            </div>
        `).join('');
        
        this.animateCards();
    }
    
    setupEventListeners() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.handleFilter(e.target.dataset.filter);
            });
        });
        
        // Institution selection
        document.addEventListener('click', (e) => {
            const institution = e.target.closest('.institution');
            if (institution) {
                this.selectInstitution(institution.dataset.id);
            }
        });
    }
    
    handleSearch(query) {
        const filtered = this.institutions.filter(inst =>
            inst.name.toLowerCase().includes(query.toLowerCase()) ||
            inst.location.toLowerCase().includes(query.toLowerCase())
        );
        this.renderInstitutions(filtered);
    }
    
    handleFilter(category) {
        if (category === 'all') {
            this.renderInstitutions();
        } else {
            const filtered = this.institutions.filter(inst => inst.category === category);
            this.renderInstitutions(filtered);
        }
    }
    
    selectInstitution(id) {
        const institution = this.institutions.find(inst => inst.id == id);
        this.showSuccess(`Selected: ${institution.name}`);
        
        setTimeout(() => {
            this.proceedToApp(institution);
        }, 1500);
    }
    
    proceedToApp(institution) {
        document.getElementById('institutionScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        
        document.querySelector('.app-header h1').innerHTML = `🎓 ${institution.name} Alumni Portal`;
    }
    
    showSuccess(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed; top: 30px; right: 30px; z-index: 1000;
            background: #22c55e; color: white; padding: 1rem 2rem;
            border-radius: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            font-weight: 600; transform: translateX(100%); transition: all 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    animateElements() {
        const cards = document.querySelectorAll('.institution');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    animateCards() {
        this.animateElements();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new AlumniPortal();
});

// Professional console message
console.log('🎓 Alumni Portal Punjab - Professional Deployment Active');
