Ext.application({
    requires: ['Ext.container.Viewport' ],
    name : 'extjs',
    controllers : ['monitores'],

    launch: function () {

        Ext.create('Ext.container.Viewport',
        {
            layout : 'anchor',
            items : [{
                xtype: 'monitoresGrid'
            }]
        });
    }
});
