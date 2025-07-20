/** @odoo-module **/

document.addEventListener('DOMContentLoaded', () => {
    const checkService = setInterval(() => {
        if (window.odoo && window.odoo.env && window.odoo.env.services) {
            const themeService = window.odoo.env.services.dux_theme;
            if (themeService && themeService.apply) {
                themeService.apply(themeService.theme);
                clearInterval(checkService);
            }
        }
    }, 100);

    // Stop checking after 5 seconds
    setTimeout(() => clearInterval(checkService), 5000);
});
