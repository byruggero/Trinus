/**
 * @class Trinus.view.phone.LoginForm
 * @extends Ext.form.Panel
 * This is the login panel for the trinus app
 */
Ext.define('Trinus.view.phone.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.Img'],

    config: {
        ui: 'login',
        padding: '15 15 15 15',
        baseCls: 'trinusBackground',
        items: [{
            xtype: 'image',
            margin: '30 0 0 0',
            height: 80
        }, {
            xtype: 'fieldset',
            defaults: {
                required: true
            },
            items: [{
                xtype: 'emailfield',
                name: 'email',
                placeHolder: lang.email,
                value: '5544444444',
                clearIcon: true
            }, {
                xtype: 'passwordfield',
                name: 'password',
                placeHolder: lang.password,
                value: '444',
                clearIcon: true
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'button',
                text: '<div class = "movi-color">' + lang.login + '</div>',
                ui: 'accept',
                scope: this,
                handler: function (btn) {
                    var form = btn.up('formpanel'),
                        obj = form.getValues();

                    form.setMasked({
                        xtype: 'loadmask',
                        message: lang.starting
                    });

                    var invocation = new XMLHttpRequest(),
                        url = 'http://isystems.com.mx:8181/Trinus/ServletLogin?movil=' + obj.email + '&password=' + obj.password;
                    if (invocation) {
                        invocation.open('POST', url, true);
                        invocation.onreadystatechange = form.logear.bind(form);
                        invocation.send();
                    }
                }
            }]
        }, {
            xtype: 'button',
            text: '<div class = "movi-color" style = "color:white;">' + lang.passwordRecover + '</div>',
            baseCls: 'mm',
            cls: 'mm',
            handler: function (btn) {}
        }]
    },
    logear: function (response) {
        if (response.target.readyState == 4 && response.target.status == 200) {
            var r = Ext.decode(response.target.responseText);
            if (r.result === "ok") {
                localStorage.setItem("Logeado", r.token); //Se guarda un identificador para no perder la session
                localStorage.setItem("Usuario", Ext.encode(r));
                this.fireEvent("logeado", r);
                this.setMasked(false);
            } else {
                Ext.Msg.alert('Aviso!', r.result, Ext.emptyFn);
                this.setMasked(false);
            }
        }
    }
});