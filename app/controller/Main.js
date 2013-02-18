Ext.define('Trinus.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: {
                selector: 'main'
            }
        },
        control: {
            'loginform': {
                logeado: 'onUserLogin'
            }
        }
    },
    launch: function () {
        if (localStorage.getItem("Usuario") || localStorage.getItem("Logeado")) {
            this.getMain().setActiveItem(1);
        }
    }
});