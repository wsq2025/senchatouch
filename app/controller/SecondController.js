Ext.define('MyApp.controller.SecondController',{
    extend: 'Ext.app.Controller',
    config: {
        refs:{
            save: 'settingpanel button[action=set_save]',
            settingInfo: 'main settingpanel',
            back: 'commontitletool button[action=backRoute]'
        },
        control:{
            save: {
                tap: 'SaveSetting'
            },
            back: {
                tap: 'doback'
            }
        }
    },
    doback: function(){
        var view = Ext.create('MyApp.view.Main');
        Ext.Viewport.setActiveItem(view);
    },
    SaveSetting: function(btn, e, eOpts){
        var me = this.getSettingInfo();
        MyApp.app.data[0] = [];
        MyApp.app.data[0].push([
            {'txmode': me.txmode.getChecked()},
            {'download': me.download.getChecked()},
            {'size': me.size.record.raw},
            {'xrmode': me.xrmode.record.raw}
        ])
    }
});