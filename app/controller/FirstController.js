Ext.define('MyApp.controller.FirstController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            first: 'firstpanel list',
            btn: 'firstpanel button[action=btn]',

        },
        control: {
            first: {
                itemtap: 'listtap'
            },
            btn: {
                tap: 'okbtn'
            }
        }
    },
    okbtn: function (btn, e, eOpts) {
        var data = [];
        data.push({
            name: '户外',
            img: '../resources/icons/Icon_Android48.png',
            down: '生存挑战类节目'
        }, {
                name: '美食',
                img: '../resources/icons/Icon_Android48.png',
                down: '美味生活类节目'
            }, {
                name: '游戏',
                img: '../resources/icons/Icon_Android48.png',
                down: '电子竞技类节目'
            });
        var view = btn.up('panel').down('list');
        var normal = '<div class="common-list-div"><img src={0} class="common-list-left-image"/><div class="common-list-text-wapper"><div class="common-list-top-text">{1}</div><div class="common-list-middle-text">{2}</div><div class="common-list-buttom-text">{3}</div></div></div>';
        var tpl = Ext.String.format(normal, '{img}', '{top}', '{mid}', '{down}');
        view.setItemTpl(tpl);
        var store = Ext.create('Ext.data.Store', {
            pageSize: 2,
            remoteFilter: true,
            remoteSort: true,
            model: 'MyApp.model.NormalListItem'
        });
        view.setStore(store);
        if (Ext.isEmpty(data)) return;
        data.forEach(function (d) {
            store.add(Ext.create(store.getModel(), {
                mid: d.name,
                img: d.img,
                down: d.down,
                tag: d
            }));
        });
    },
    listtap: function (me, index, target, record, e, eOpts) {
        var view = Ext.create('MyApp.view.Detail');
        me.add(view);
        Ext.Viewport.setActiveItem(view);
    }
});