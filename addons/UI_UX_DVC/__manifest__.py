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
    'depends': ['base', 'web', 'website', 'portal'],
    'assets': {
        'web.assets_backend': [
            'UI_UX_DVC/static/src/scss/backend_theme.scss',
            'UI_UX_DVC/static/src/js/backend_customization.js',
            'UI_UX_DVC/static/src/xml/backend_templates.xml',
        ],
        'web.assets_frontend': [
            'UI_UX_DVC/static/src/scss/frontend_theme.scss',
            'UI_UX_DVC/static/src/js/frontend_customization.js',
        ],
    },
    'data': [
        'views/backend_assets.xml',
        'views/backend_menu_customization.xml',
        'views/frontend_assets.xml',
        'views/website_templates.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
