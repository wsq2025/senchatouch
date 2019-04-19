Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        activeindex: 2,
        tabBarPosition: 'bottom',
        items: [
            {
                title: '主页',
                iconCls: 'home',
                layout: 'fit',
                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                    //height: 400,
                    xtype: 'firstpanel',
                    align: 'center',
                }]
            },
            {
                title: '发现',
                iconCls: 'search',
                items: []
            },
            {
                layout: 'fit',
                title:'设置',
                iconCls: 'settings',
                items:[
                    {
                    xtype: 'settingpanel',
                    align: 'center',
                }]
            },
            {
                title:'消息',
                iconCls: 'more'
            },
            {
                title:'我',
                iconCls: 'user'
            }
        ]
    },
    initialize: function(){
        var me =this;
        // me.card = me.down('carousel');
        // me.card.element.on({
        //     scope: me,
        //     swipe: 'swip'
        // })
    },
    swip: function(e, node, options, eOpts ){
        var me =this;
        if(e.direction === 'left'){

                var panel = Ext.create('Ext.Panel',{
                    items:{
                        html: "Six Item"
                    }
                })
                // me.card.add(panel);
                // me.card.setActiveItem(panel);
                me.card.add(panel)
        }
        
    }
});
