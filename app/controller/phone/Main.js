/**
 * @class Trinus.controller.phone.Main
 * @extends Trinus.controller.Main
 * Main controller of the phone version
 */
Ext.define('Trinus.controller.phone.Main', {
    extend: 'Trinus.controller.Main',

    config: {
        refs: {
            main: {
                selector: 'main'
            },
            addressContainer: 'infocontainer container',
            map: 'trinusmap'
        },
        control: {
            'loginform': {
                logeado: 'onUserLogin'
            },
            'trinusmap': {
                addresschange: 'onAddressChange'
            },
            'trinusmenu button': {
                tap: 'onTrinusMenuTap'
            },
            'main container button': {
                tap: 'setCurrenLocation'
            },
            'infocontainer button': {
                tap: 'showUserOptions'
            },
            'drivercontainer button': {
                tap: 'backToMapPanel'
            },
            'usercontainer button': {
                tap: 'backToMapPanel'
            }
        }
    },
    onUserLogin: function (argument) {
        var me = this;
        me.getMain().animateActiveItem(1, {
            type: 'slide',
            direction: 'left'
        });
    },
    onAddressChange: function (map, obj, data) {
        var dir = obj.formatted_address.split(','),
            mainAddress = dir.shift();
        dir = dir.join(', ');
        this.getAddressContainer().setData({
            main: mainAddress,
            secondary: dir
        });
    },
    onTrinusMenuTap: function (btn) {
        if (btn.action === 'getCab') {
            this.getCab(this.getMap().getClientAddress());
        } else {
            this.getMain().animateActiveItem(2, {
                type: 'slide',
                direction: 'up'
            });
        }
    },
    getCab: function (data) {
        var me = this,
            invocation = new XMLHttpRequest(),
            params = 'idCliente=' + Ext.decode(localStorage.getItem('Usuario')).idCliente +
                '&direccion=' + data.address + '&latitud=' + data.lat + '&longitud=' + data.lng +
                '&observ=' + 'peticion mobile' + '&token=' + localStorage.getItem('Logeado'),
            url = 'http://isystems.com.mx:8181/Trinus/ServletServicioMovil?' + params;
        me.mask('Buscando al taxis, por favor espere..');
        if (invocation) {
            invocation.open('POST', url, true);
            invocation.onreadystatechange = function (response) {
                if (response.target.readyState == 4 && response.target.status == 200) {
                    var r = Ext.decode(response.target.responseText);
                    me.mask();
                    if (r.result === "ok") {
                        Ext.Msg.alert('Información', "La petición se ha procesado con éxito.", me.pedirDatosTaxi.bind(_this, r.idServicio));
                    } else {
                        Ext.Msg.alert('Información', r.result);
                    }
                }
            };
            invocation.send();
        }
    },
    pedirDatosTaxi: function (idServicio) {
        var me = this,
            invocation = new XMLHttpRequest(),
            params = 'idCliente=' + Ext.decode(localStorage.getItem('Usuario')).idCliente +
                '&estatus=ACEPTADO&token=' + localStorage.getItem('Logeado'),
            url = 'http://isystems.com.mx:8181/Trinus/DatosTaxista?' + params;
        me.mask('Buscando al taxista mas cercano, por favor espere..');
        if (invocation) {
            invocation.open('POST', url, true);
            invocation.onreadystatechange = function (response) {
                if (response.target.readyState == 4 && response.target.status == 200) {
                    var r = Ext.decode(response.target.responseText);
                    me.mask();
                    if (r.result === "ok") {
                        //me.taxistaOnMap(r, idServicio);
                    } else {
                        Ext.Msg.alert('Información', r.result);
                    }
                }
            };
            invocation.send();
        }
    },
    mask: function (msg) {
        var me = this;
        if (msg) {
            me.getMain().setMasked({
                xtype: 'loadmask',
                message: msg
            });
        } else {
            me.getMain().setMasked(false);
        }
    },
    setCurrenLocation: function () {
        this.getMap().clearMarkers();
        this.getMap().setCurrentPosition();
    },
    showUserOptions: function () {
        this.getMain().animateActiveItem(3, {
            type: 'slide',
            direction: 'left'
        });
    },
    backToMapPanel:function(btn){
        if(btn.action === 'salir'){//limpiamos sesión
            localStorage.removeItem('Usuario');
            localStorage.removeItem('Logeado');
            this.getMain().animateActiveItem(0, {
                type: 'slide',
                direction: 'right'
            });
        }
        else if(btn.action === 'back'){
            this.getMain().animateActiveItem(1, {
                type: 'slide',
                direction: 'right'
            });
        }
        else{
            this.getMain().animateActiveItem(1, {
                type: 'slide',
                direction: 'down'
            });
        }
    }
});