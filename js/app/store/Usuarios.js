Ext.define('CrudExt.store.Usuarios',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Usuarios',
	pageSize	: 20,
	model		: 'CrudExt.model.Usuario',
	proxy		: {
		type: 'ajax',
		api: {
			create  : 'http://localhost/Grilla/index.php/user/add',
		    read    : 'http://localhost/Grilla/index.php/user/listar',
		    update  : 'http://localhost/Grilla/index.php/user/update',
		    destroy : 'http://localhost/Grilla/index.php/user/delete'
		},
		actionMethods: {
			create  : 'POST',
		    read    : 'POST',
		    update  : 'POST',
		    destroy : 'POST'
		},
		reader: {
			type: 'json',
			root: 'data',
			rootProperty: 'data',
			successProperty: 'success',
			messageProperty: 'message'
		},
		writer: {
			type: 'json',
			writeAllFields: true,
			root: 'data',
			encode: true
		}
	}
});
