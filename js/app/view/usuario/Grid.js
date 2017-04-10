Ext.define('CrudExt.view.usuario.Grid',{
	extend: 'Ext.grid.Panel',
	title		: 'Lista de usuários',
	itemId		: 'usuarioGrid',
	xtype		: 'usuariogrid',
	store 		: 'Usuarios',
    selType: 'checkboxmodel',
	initComponent: function(){

		this.columns = [
			{ header: 'Id',  dataIndex: 'id' },
			{
        text: 'Nombre (Filtro)',
        sortable: true,
        dataIndex: 'Nombre',
        groupable: false,
        width: 120,
        //locked: true,
        renderer: function(v, cellValues, rec) {
            return rec.get('Nombre');
        },
        editor: {
            xtype: 'textfield'
        },
        items    : {
            xtype: 'textfield',
            flex : 1,
            margin: 2,
            enableKeyEvents: true,
            listeners: {
                keyup: function() {
                    var store = this.up('tablepanel').store;
                    store.clearFilter();
                    if (this.value) {
                        store.filter({
                            property     : 'Nombre',
                            value         : this.value,
                            anyMatch      : true,
                            caseSensitive : false
                        });
                    }
                },
                buffer: 500
            }
        }
    },
	        { header: 'Email', dataIndex: 'email'}
		];

		this.dockedItems = [
			{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						xtype: 'button',
						text: 'Adicionar usuario',
						iconCls: 'add',
						action: 'add'
					},
					{
						text: 'Eliminar usuario',
						iconCls: 'delete',
						action: 'delete'
					},
					{
						text: 'Editar usuario',
						iconCls: 'edit',
						action: 'edit'
					}
				]
			},
			{
		        xtype: 'pagingtoolbar',
		        store: 'Usuarios',
		        dock: 'bottom',
		        displayInfo: true
		    }
		];

		this.callParent(arguments);
	}

});
