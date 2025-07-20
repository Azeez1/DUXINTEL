/** @odoo-module **/
import { whenReady } from '@odoo/owl';

whenReady(() => {
    setTimeout(() => {
        const themeService = odoo.env.services?.dux_theme;
        if (themeService && themeService.apply) {
            themeService.apply(themeService.theme);
        }
    }, 100);
});
