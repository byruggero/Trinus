/**
 * @class Trinus.view.phone.TrinusMenu
 * @extends Ext.Container
 * This the bottom menu of the trinus app
 */
Ext.define('Trinus.view.phone.TrinusMenu', {
    extend: 'Ext.Container',
    xtype: 'trinusmenu',

    config: {
        layout: {
            type: 'hbox',
            align: 'strechmax'
        },
        defaults: {
            xtype: 'button'
        },
        items: [{
            text: 'Pedir Taxi',
            action:'getCab',
            flex: 6
        }, {
            iconCls:'info_plain2',
            action:'showDriverInfo',
            iconMask:true,
            flex: 1
        }]
    }
});