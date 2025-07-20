/** @odoo-module **/
import { Component } from '@odoo/owl';
import { registry } from '@web/core/registry';

class ThemeToggleSystray extends Component {
    static template = 'ui_ux_dvc.ThemeToggleSystray';

    setup() {
        this.themeService = this.env.services.dux_theme;
    }

    toggle() {
        this.themeService.toggle();
    }

    get isDark() {
        return this.themeService.theme === 'dark';
    }
}

registry.category('systray').add('ui_ux_dvc.theme_toggle', {
    Component: ThemeToggleSystray,
    sequence: 1,
});
