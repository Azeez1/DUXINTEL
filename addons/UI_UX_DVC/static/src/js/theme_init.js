/** @odoo-module **/
import { registry } from '@web/core/registry';

async function initTheme() {
    if (document.readyState === 'loading') {
        await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));
    }
    const themeService = await registry.category('services').get('dux_theme');
    if (themeService) {
        themeService.apply(themeService.theme);
    }
}

initTheme();
