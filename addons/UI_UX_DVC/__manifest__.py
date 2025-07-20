{
    'name': 'DUX MACHINA UI/UX',
    'version': '18.0.1.0.0',
    'category': 'Themes/Backend',
    'summary': 'Modern UI/UX transformation for DUX MACHINA',
    'description': '''Transform Odoo into a cutting-edge platform with:
        - Futuristic glassmorphism design
        - Advanced animations and transitions
        - Dark/Light mode support
        - Custom dashboard widgets
        - Enhanced user experience
    ''',
    'author': 'DUX MACHINA',
    'website': 'https://duxmachina.com',
    'depends': ['base', 'web'],
    'assets': {
        'web._assets_primary_variables': [
            (
                'after',
                'web/static/src/scss/primary_variables.scss',
                'UI_UX_DVC/static/src/scss/colors.scss',
            ),
        ],
        'web.assets_backend': [
            'UI_UX_DVC/static/src/scss/theme_base.scss',
            'UI_UX_DVC/static/src/js/theme_service.js',
            'UI_UX_DVC/static/src/js/theme_init.js',
            'UI_UX_DVC/static/src/js/navbar_extension.js',
            'UI_UX_DVC/static/src/xml/navbar_extension.xml',
        ],
        'web.assets_web_dark': [
            (
                'after',
                'UI_UX_DVC/static/src/scss/theme_base.scss',
                'UI_UX_DVC/static/src/scss/theme_dark.scss',
            ),
        ],
    },
    'data': [
        'views/res_config_settings.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
