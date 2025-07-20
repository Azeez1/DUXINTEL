/** @odoo-module **/

// Initialize theme when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DUX MACHINA UI/UX Theme Loaded');
    document.body.classList.add('dux-machina-theme');
    
    // Initialize theme based on user preference
    const savedTheme = localStorage.getItem('dux-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
});

// Add styles immediately
if (document.body) {
    document.body.classList.add('dux-machina-theme');
}
