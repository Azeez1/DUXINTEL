/** @odoo-module **/

import { onMounted } from '@odoo/owl';

// Add immediate visual feedback when module loads
onMounted(() => {
    console.log('DUX MACHINA UI/UX Theme Loaded');
    document.body.classList.add('dux-machina-theme');
});

/**
 * Theme initialization
 */
class DuxMachinaTheme {
    constructor() {
        this.init();
    }
    
    init() {
        // Add theme class to body
        document.body.classList.add('dux-machina-theme');
        
        // Initialize theme based on user preference
        const savedTheme = localStorage.getItem('dux-theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        
        console.log('DUX MACHINA Theme initialized');
    }
}

// Initialize theme when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DuxMachinaTheme();
});

// Export components for future use
export { DuxMachinaTheme };
