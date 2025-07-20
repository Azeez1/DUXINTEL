from odoo import fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    theme_default_dark = fields.Boolean(
        string='Enable Dark Mode by Default',
        config_parameter='ui_ux_dvc.theme_default_dark',
        default=False,
    )
    theme_glass_intensity = fields.Integer(
        string='Glass Effect Intensity',
        config_parameter='ui_ux_dvc.glass_intensity',
        default=10,
    )
    theme_accent_color = fields.Char(
        string='Accent Color',
        config_parameter='ui_ux_dvc.accent_color',
        default='#FF006E',
    )
    theme_enable_animations = fields.Boolean(
        string='Enable Animations',
        config_parameter='ui_ux_dvc.enable_animations',
        default=True,
    )
