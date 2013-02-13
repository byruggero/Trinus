/**
 * @class Utils
 * @extends --
 * This is the definition class for the languages of the application
 */
 Ext.define('Utils.Core', {
    lang:{
        es:{
            appName: 'TRINUS',
            sorryMsg:'¡Lo sentimos, algo salio mal! :(',
                erase:'Eliminar',
                accept:'Aceptar',
                decline:'Rechazar',
                members:'Comunidad',
                name:'Nombre',
                description:'Descripción',
                save:'Guardar',
                saving:'Guardando ...',
                email:'Email',
                password:'Contraseña',
                login:'Iniciar Sesión',
                starting :'Iniciando ...',
                passwordRecover:'Recuperar Contraseña',
                passwordRecoverEmail:'Escribe tu Email'
        }
    },
    ajax:function(obj){
        var o = Ext.applyIf({
            disableCaching:false,
            method :'GET',
            extraParams :{
                //auth_token: Cursame.User.get('token')
            }
        },obj);
        //Ext.data.JsonP.request(o);
        Ext.Ajax.request(o);
    }
});

var Utils = Ext.create('Utils.Core'),
    lang = Utils.lang.es;

