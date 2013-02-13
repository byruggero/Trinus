/**
 * @class Trinus.profile.Phone
 * @extends Ext.app.Profile
 * This is the phone profile
 */
Ext.define('Trinus.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    config: {
        name: 'phone',
		namespace: 'phone',
		controllers: ['Main'],
		views: ['Main']
    },
	isActive: function(){
		return Ext.os.is.Phone;
	},
	launch: function(){
		Ext.create('Trinus.view.phone.Main');
	}
});