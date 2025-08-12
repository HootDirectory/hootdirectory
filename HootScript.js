// Sample hoot data
const hoots = [
    {
        title: "Morning Wisdom",
        description: "Start your day with insightful thoughts and positive energy that will guide you through any challenge.",
        category: "Inspiration",
        author: "WiseOwl",
        time: "2 hours ago"
    },
    {
        title: "Tech Innovation Hub",
        description: "Latest developments in artificial intelligence, machine learning, and cutting-edge technology trends.",
        category: "Technology",
        author: "TechGuru",
        time: "4 hours ago"
    },
    {
        title: "Creative Solutions",
        description: "Innovative approaches to common problems with practical examples and actionable insights.",
        category: "Creativity",
        author: "IdeaMaster",
        time: "6 hours ago"
    },
    {
        title: "Business Strategy",
        description: "Strategic thinking for modern entrepreneurs and business leaders in today's competitive landscape.",
        category: "Business",
        author: "StrategyPro",
        time: "8 hours ago"
    },
    {
        title: "Health & Wellness",
        description: "Evidence-based tips for maintaining physical and mental well-being in our fast-paced world.",
        category: "Health",
        author: "WellnessCoach",
        time: "12 hours ago"
    },
    {
        title: "Learning Pathways",
        description: "Structured approaches to acquiring new skills and knowledge in the digital age.",
        category: "Education",
        author: "LearnMore",
        time: "1 day ago"
    }
];

// Function to create hoot cards
function createHootCard(hoot, index) {
    return `
        <div class="hoot-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="hoot-title">
                <div class="hoot-icon">🦉</div>
                ${hoot.title}
            </div>
            <div class="hoot-description">${hoot.description}</div>
            <div class="hoot-meta">
                <span class="hoot-category">${hoot.category}</span>
                <span>${hoot.time}</span>
            </div>
        </div>
    `;
}

// Render hoots on the page
function renderHoots(hootsToRender = hoots) {
    const hootGrid = document.getElementById('hootGrid');

    if (!hootGrid) return;

    if (hootsToRender.length === 0) {
        hootGrid.innerHTML = '<div class="loading">No hoots found matching your search...</div>';
        return;
    }

    hootGrid.innerHTML = hootsToRender
        .map((hoot, index) => createHootCard(hoot, index))
        .join('');
}

// Enable search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm === '') {
            renderHoots();
            return;
        }

        const filteredHoots = hoots.filter(hoot =>
            hoot.title.toLowerCase().includes(searchTerm) ||
            hoot.description.toLowerCase().includes(searchTerm) ||
            hoot.category.toLowerCase().includes(searchTerm) ||
            hoot.author.toLowerCase().includes(searchTerm)
        );

        renderHoots(filteredHoots);
    });
}

// Animate the stats numbers
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
        const suffix = finalValue.replace(/[\d]/g, '');

        let currentValue = 0;
        const increment = numericValue / 50;

        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue) + suffix;
            }
        }, 30);
    });
}

// Initialize page functionality
document.addEventListener('DOMContentLoaded', () => {
    renderHoots();
    setupSearch();
    setTimeout(animateStats, 500);
});
