Ext.define('MyApp.model.NormalListItem', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'img', type: 'string' },
            { name: 'top', type: 'string' },
            { name: 'mid', type: 'string' },
            { name: 'down', type: 'string' },
            { name: 'key', type: 'string' },
            { name: 'tag', type: 'auto', defaultValue: null }
        ]
    }
});