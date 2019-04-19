Ext.define('MyApp.view.HomePanel',{
    extend: 'Ext.Container',
    xtype: 'homepanel',
    config: {
        layout: 'fit',
        items: [{
            xtype: 'tabpanel',
            activeItem: 1,
            tabBar: {
                docked: 'top',
                scrollable: 'horizontal',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                }
            },
            ui: 'light',
            items: [
                {
                xtype: 'allcontent',
                title: '全部'
            },
            {
                xtype: 'firstpanel',
                title: '推荐'
            },{
                xtype: 'classcontentpanel',
                title: '分类'
            }
        ]
        }]
    }
})