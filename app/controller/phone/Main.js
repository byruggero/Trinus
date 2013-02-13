/**
 * @class Trinus.controller.phone.Main
 * @extends Trinus.controller.Main
 * Main controller of the phone version
 */
Ext.define('Trinus.controller.phone.Main', {
	extend: 'Trinus.controller.Main',

	config: {
		refs: {},
		control: {}
	},
	init: function() {
		this.callParent();
	},
	onLogin: function(form) {
	},
	launch: function() {
		// alert('Trinus.controller.phone.Main');
	}
});
