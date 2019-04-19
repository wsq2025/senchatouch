Ext.define('MyApp.view.CommonBar',{
    extend: 'Ext.TitleBar',
    xtype: 'commontitletool',
    config: {
        docked: 'top',
        ui: 'light',
        items: []
    },
    applyInitialItems: function(items) {
        var me = this,
            btns = [];
        me.extbtns = arguments[0];
        btns.push({
            xtype: 'button',
            align: 'left',
            ui: 'back',
            iconCls: 'arrow_left',
            action: 'backRoute'
        });
        btns.push({
            xtype: 'button',
            align: 'right',
            ui: 'home',
            iconCls: 'home'
        });
        btns.push({
            xtype: 'dropdownbtn',
            align: 'right'
        });
        arguments[0] = btns;
        me.callParent(arguments);
    },
})