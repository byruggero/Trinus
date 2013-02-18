/**
 * @class Trinus.view.phone.InfoContainer
 * @extends Ext.Container
 * This the top container of the trinus app
 */
Ext.define('Trinus.view.phone.InfoContainer', {
    extend: 'Ext.Panel',
    xtype: 'infocontainer',

    config: {
        top: 8,
        left: 3,
        width: '98%',
        height: '80px',
        layout: {
            type: 'hbox',
            align: 'strechmax'
        },
        items: [{
            xtype: 'container',
            html: 'direccion',
            data: {
                main: '',
                secondary: ''
            },
            tpl: Ext.create('Trinus.view.DireccionTpl'),
            flex: 8
        }, {
            xtype: 'button',
            iconCls:'user',
            flex: 1,
            iconMask:true
        }]
    }
});