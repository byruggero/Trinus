/**
 * @class Trinus.view.phone.Main
 * @extends Trinus.view.Main
 * This is the view class for our iphone application
 */

Ext.define('Trinus.view.phone.Main', {
	extend: 'Trinus.view.Main',
	requires: ['Trinus.view.phone.LoginForm'],

	config: {
		items: [{
			xtype:'loginform'
		}]
	}
});
