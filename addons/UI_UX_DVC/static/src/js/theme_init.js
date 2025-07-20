/** @odoo-module **/
import { registry } from '@web/core/registry';

registry.category('services').whenReady('dux_theme').then((service) => {
    service.apply(service.theme);
});
