/**
 * @class Trinus.view.phone.Main
 * @extends Trinus.view.Main
 * This is the view class for our iphone application
 */
Ext.define('Trinus.view.phone.Main', {
    extend: 'Trinus.view.Main',
    requires: ['Trinus.view.phone.LoginForm',
        'Trinus.view.Map',
        'Trinus.view.phone.TrinusMenu',
        'Trinus.view.DireccionTpl',
        'Trinus.view.phone.InfoContainer',
        'Trinus.view.DriverContainer',
        'Trinus.view.UserContainer'],

    config: {
        items: [{
            xtype: 'loginform'
        }, {
            xtype: 'container',
            itemId: 'app',
            layout: {
                type: 'vbox',
                align: 'strechmax'
            },
            items: [{
                xtype: 'infocontainer'
            }, {
                xtype: 'trinusmap',
                flex: 7
            }, {
                xtype: 'button',
                bottom: '14%', //este posicionamiento va de acuerdo al flex
                left: '1%',
                width: 64,
                height: 64,
                iconCls: 'locate',
                iconMask: true,
                handler: function (b, e) {
                    e.preventDefault(); //para que no se llame el sitio de google maps
                }
            }, {
                xtype: 'trinusmenu',
                flex: 1
            }]
        }, {
            xtype: 'drivercontainer',
            data: {
                nombre: 'Pedro Picapiedra',
                unidad: 123414125,
                placas: 'SAD2314FDG'
            }
        }, {
            xtype: 'usercontainer'
        }]
    }
});