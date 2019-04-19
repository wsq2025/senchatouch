Ext.define('MyApp.view.Detail',{
    extend: 'Ext.Panel',
    xtype: 'detailspanel',
    config: {
        layout: 'fit',
        detailsdata: null,
        items: [
          {
            xtype: 'commontitletool',
            docked: 'top'
        },{
            xtype: 'panel',
            layout: 'vbox',
            style: 'backgroudcolor:#000',
            items: [{
                xtype: 'fieldset',
                flex: 1,
                title: '欢迎来到阿郎直播间',
                items:{
                    xtype: 'container',
                    layout: 'fit',
                    items: {
                        xtype: 'panel',
                        frame: true,
                        layout: 'hbox',
                        items: [
                        {
                        region: 'west',
                        xtype: 'fieldset',
                        //title: '视频',
                        height: 200,
                        flex: 1,
                        // items:{
                        //     xtype: 'video'
                        // }
                    },{
                        region: 'east',
                        xtype: 'fieldset',
                        //title: '贵族',
                        height: 200,
                        flex: 1,
                        items: [{
                            xtype: 'tabpanel',
                            activeItem: 1,
                            tabBar: {
                                docked: 'top',
                                scrollable: 'horizontal',
                                // layout: {
                                //     pack: 'center',
                                //     type: 'hbox'
                                // }
                            },
                            ui: 'light',
                            items:[{
                                title: '日榜',
                                layout: 'fit',
                            },{
                                title: '周榜',
                                layout: 'fit',
                            },{
                                title: '总榜',
                                layout: 'fit',
                            }]
                        }]
                    }
                        ]
                    }
                }
            },{
                xtype: 'fieldset',
                flex: 1,
                title: '鱼吧'
            }]
        }
    ]
    },
    initView: function(){
        var me = this;
    },
    popudata: function(data){
        this.setDetailsdata(data);

    }
})