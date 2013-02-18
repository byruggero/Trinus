/**
 * @class Trinus.view.DriverContainer
 * @extends Ext.Container
 * This te driver information container
 */
Ext.define('Trinus.view.DriverContainer', {
    extend: 'Ext.Container',
    xtype:'drivercontainer',
    
    config:{   
    	baseCls: 'trinusBackground', 
    	items:[{
    		xtype:'toolbar',
    		docked:'top',
    		items:[{
    			xtype:'spacer'
    		},{
    			iconCls:'arrow_up',
    			iconMask:true
    		}]
    	}],
    	tpl : [
    		'<div class="driver-container">',
    		'<div class="driver-img">',
    			 '<img class="avatar" src="./resources/images/driver.png"></br>',    			 
    		'</div>',
    		'<div class="driver-name">{nombre}</div>',
    		'<div class="car-number">{unidad}</div>',
            '</div>'].join(' ')
    }
});