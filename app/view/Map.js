/**
 * @class Trinus.view.Map
 * @extends Ext.Map
 * This the map panel for trinus
 * @author Armando González <@manduks>
 */
Ext.define('Trinus.view.Map', {
    extend: 'Ext.Map',
    alias: 'widget.mymap',

    xtype: 'trinusmap',

    mapMarkers: [],

    config: {
        mapOptions: {
            center: new google.maps.LatLng(19.3103434, -99.17033780000001),
            //mapTypeId: google.maps.MapTypeId.SATELLITE,
            zoom: 17
        }
    },

    clearMarkers: function () {
        for (var i = 0; i < this.mapMarkers.length; i++) {
            this.mapMarkers[i].setMap(null);
        }
    },

    initialize: function (argument) {
        var me = this;
        if (navigator.geolocation) {
            setTimeout(function () {
                me.setCurrentPosition();
            }, 1000);
        } else {
            alert('Tu navegador no soporta la API de geolocalizacion');
        }
    },

    setCurrentPosition: function () {
        var me = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            var gMap = me.getMap(),
                latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                marker;

            gMap.setCenter(latlng);

            marker = new google.maps.Marker({
                map: gMap,
                animation: google.maps.Animation.DROP,
                position: latlng,
                draggable: true,
                //icon: 'resources/images/jogging.png',
                markerId: 1
            });

            google.maps.event.addListener(marker, 'click', function (pos) {
                me.toggleBounce.call(me, marker, pos);
            });
            google.maps.event.addListener(marker, 'dragend', function (marker) {
                me.parseLatLngToAddress(marker.latLng);
            });

            me.mapMarkers[0] = marker;
            me.parseLatLngToAddress(latlng);
        }, me.gestionaErroresGeo);

    },
    parseLatLngToAddress: function (latlng) {
        var me = this,
            geocoder = new google.maps.Geocoder();

        geocoder.geocode({
            'latLng': latlng
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    //me.getMap().setZoom(17);
                    me.clientAddress = results[0].formatted_address;
                    me.fireEvent('addresschange', me, results[0], results);
                }
            }
        });
    },

    toggleBounce: function (marker, pos) {
        var lat = pos.latLng.lat(); // lat of click
        var lng = pos.latLng.lng(); // lng of click
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    },

    gestionaErroresGeo: function (err) {
        if (err.code === 0) {
            alert("error desconocido");
        }
        if (err.code == 1) {
            alert("El usuario no ha compartido su posicion");
        }
        if (err.code == 2) {
            alert("no se puede obtener la posicion actual");
        }
        if (err.code == 3) {
            alert("timeout recibiendo la posicion");
        }
    },
    getClientAddress: function () {
        var me = this,
            position = me.mapMarkers[0].position;
        return {
            lat: position.Ya,
            lng: position.Za,
            address: me.clientAddress
        };
    }
});