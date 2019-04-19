Ext.define('MyApp.view.Second',{
    extend: 'Ext.Panel',
    xtype: 'settingpanel',
    config: {
        scrollable: false,
        layout: 'fit',
        align: 'center',
        items: [
            {
                xtype: 'commontitletool',
                docked: 'top'
            },
            {
                xtype: 'fieldset',
                docked: 'top',
                title: '通用设置',
                items: [{
                    xtype: 'searchfield',
                    lable: '字号设置'
                },
                {
                    xtype: 'checkboxfield',
                    label: '无图模式',
                    name: 'txmode'
                },
                {
                    xtype: 'checkboxfield',
                    label: '自动下载',
                    name: 'download'
                },
                {
                    xtype: 'selectfield',
                    label: '字号设置',
                    name: 'size',
                    options:[
                        {text: '大',  value: 'first'},
                        {text: '中', value: 'second'},
                        {text: '小',  value: 'third'}
                        ]
                }]
            },
            {
                docked: 'top',
                xtype: 'fieldset',
                title: '高级设置',
                items:[{
                    xtype: 'selectfield',
                    label: '页面渲染模式',
                    name: 'xrmode'
                }]
            },
            {
                xtype: 'panel',
                docked: 'bottom',
                items:[{
                    xtype: 'button',
                    align: 'right',
                    text: '保存',
                    action: 'set_save'
                }]
            }
        ]
    },
    initialize: function(){
        var me = this;
        //me.removeAll(true,true);

        me.contenP = me.down('fieldset');
        me.txmode = me.findField('checkboxfield','txmode');
        me.download = me.findField('checkboxfield','download');
        me.size = me.findField('selectfield','size');
        me.xrmode = me.findField('selectfield','xrmode');

        me.size.on({
            scope: me,
            change: 'changesize'
        });
        me.download.on({
            scope: me,
            check: 'ddcheck'
        })
    },
    changesize: function(me, newValue, oldValue, eOpts){
        var data = [];
        if(newValue === 'first'){
            //Ext.Msg.alert('提示信息', '字体太大屏幕无法适应！');
            //this.xrmode.setHidden(true);
            //this.xrmode.clear();
            this.xrmode.setOptions([{text: '1',  value: 'first'},
                                {text: '2', value: 'second'},
                                {text: '3',  value: 'third'}]);
        }
        else{
            //this.xrmode.clear();
            this.xrmode.setOptions([{text: '4',  value: 'first'},
                                {text: '5', value: 'second'},
                                {text: '6',  value: 'third'}]);
        }
        
    },
    findField: function (type, name) {
        console.log(this.contenP);
        var com = null;
        if(name !== 'xrmode'){
            com = this.contenP.down(Ext.String.format('{0}[name={1}]', type, name));
        }
        else{
            com = this.items.items[2].items.items[0];
        }
        if(com){
            return com;
        }
        console.error('cannot find' + type + ':' + name);
        return null;
    },
})