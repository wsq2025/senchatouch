Ext.define('MyApp.view.First',{
    extend: 'Ext.Panel',
    xtype: 'firstpanel',
    config: {
		layout: 'fit',
		items: [{
		    xtype: 'list',
            flex: 7,
		    deleteable: true,
		    itemId: 'adjunctUploadList',
			hasUploadTool: true,
			plugins: [
                {
                    xclass: 'Ext.plugin.ListPaging',
                    autoPaging: true,
                    loadMoreText: '加载更多数据...',
                    noMoreRecordsText: ''
                }
            ]
		},{
            xtype: 'button',
            docked: 'bottom',
            flex: 1,
            text: '加载',
            action: 'btn'
        }]
	},

	initialize: function () {
	    var me = this;
	    me.callParent();
        me.listView = this.down('list');
        me.listView.fireEvent('',)
	    me.initialized = true;
	},
});