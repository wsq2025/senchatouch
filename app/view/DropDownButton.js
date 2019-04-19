Ext.define('MyApp.view.DropDownButton',{
    extend: 'Ext.Button',
    xtype: 'dropdownbtn',
    config: {
        ui: 'plain',

        iconCls: 'icon-ellipsis-v',
        /*参数*/
        para: null,

        home: true,

        login: true,

        items: []
    }
    ,
    initialize: function() {
        this.callParent();
        // var isPhone = false;
        // this.overlay = Ext.Viewport.add({
        //     xtype: 'formpanel',
        //     layout: 'vbox',
        //     padding: '0.4em',
        //     modal: true,
        //     hideOnMaskTap: true,
        //     hidden: true,
        //     width: isPhone ? '50%' : '30%',
        //     minWidth: isPhone ? 250 : 400,
        //     contentEl: 'content',
        //     styleHtmlContent: true,
        //     scrollable: null,
        //     items: []
        // });

        // this.on({
        //     scope: this,
        //     tap: 'onClick'
        // });

        this.initialized = true;

        this.updateIconCls(this.getIconCls());

        //this.updateItems();
    }
})