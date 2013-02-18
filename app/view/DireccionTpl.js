/**
 * @class Trinus.view.DireccionTpl
 * @extends Ext.XTemplate
 * The template to show the address
 */
Ext.define('Trinus.view.DireccionTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = ['<div class="address">',
            '<div class="main">',
				'<p>{main}</p>',
            '</div>',
            '<div class="secondary">',
				'<p>{secondary}</p>',
            '</div>',
            '</div>'];
        this.callParent(html);
    }
});