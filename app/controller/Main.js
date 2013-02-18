Ext.define('Trinus.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			main: {
				selector: 'main'
			}
		},
		control: {
			'loginform':{
				logeado:'onUserLogin'
			}
		}
	}
});