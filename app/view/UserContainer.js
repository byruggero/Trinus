/**
 * @class Trinus.view.UserContainer
 * @extends Ext.Container
 * This the user information container
 * @author Armando González <@manduks>
 */
 Ext.define('Trinus.view.UserContainer', {
    extend: 'Ext.form.Panel',
    xtype: 'usercontainer',
    requires: [
    'Ext.form.*',
    'Ext.field.*',
    'Ext.Button',
    'Ext.Toolbar'
    ],

    config: {
        //baseCls: 'trinusBackground',
        items: [ {
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                iconCls: 'arrow_left',
                action:'back',
                iconMask: true
            },{
                xtype: 'spacer'
            }, {
                text: 'Salir',
                action:'salir',
                iconMask: true
            }]
        },{
            xtype: 'fieldset',
            title: 'Información Personal',
            instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '35%'
            },
            items: [
            {
                xtype         : 'textfield',
                name          : 'name',
                label         : 'Name',
                placeHolder   : 'Tom Roy',
                autoCapitalize: true,
                required      : true,
                clearIcon     : true
            },
            {
                xtype: 'passwordfield',
                name : 'password',
                label: 'Password'
            },
            {
                xtype      : 'emailfield',
                name       : 'email',
                label      : 'Email',
                placeHolder: 'me@sencha.com',
                clearIcon  : true
            },
            {
                xtype: 'checkboxfield',
                name : 'cool',
                label: 'Cool'
            },
            {
                xtype: 'textareafield',
                name : 'bio',
                label: 'Bio'
            }]
        }]
    }
});