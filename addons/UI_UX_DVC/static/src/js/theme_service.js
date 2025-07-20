/** @odoo-module **/
import { registry } from '@web/core/registry';

export const themeService = {
    start(env) {
        const STORAGE_KEY = 'dux-theme';
        const defaultTheme = env.config && env.config.mode === 'dark' ? 'dark' : 'light';
        const initial = localStorage.getItem(STORAGE_KEY) || defaultTheme;

        const state = { theme: initial };

        function apply(theme) {
            const client = document.querySelector('.o_web_client');
            (client || document.documentElement).classList.toggle('dux-theme-dark', theme === 'dark');
            state.theme = theme;
            localStorage.setItem(STORAGE_KEY, theme);
        }

        apply(state.theme);

        return {
            get theme() {
                return state.theme;
            },
            toggle() {
                apply(state.theme === 'dark' ? 'light' : 'dark');
            },
            apply,
        };
    },
};

registry.category('services').add('dux_theme', themeService);
