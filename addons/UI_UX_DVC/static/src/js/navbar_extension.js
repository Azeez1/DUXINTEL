/** @odoo-module **/
import { Component } from '@odoo/owl';
import { registry } from '@web/core/registry';
import { useService } from '@web/core/utils/hooks';

export class ThemeToggleSystray extends Component {
    static template = 'ui_ux_dvc.ThemeToggleSystray';
    static props = {};

    setup() {
        this.themeService = useService('dux_theme');
    }

    toggle() {
        this.themeService.toggle();
    }

    get isDark() {
        return this.themeService.theme === 'dark';
    }
}

export const systrayItem = {
    Component: ThemeToggleSystray,
};

registry.category('systray').add('ui_ux_dvc.theme_toggle', systrayItem, { sequence: 1 });
