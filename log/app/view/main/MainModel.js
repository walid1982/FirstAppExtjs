/**
 * This class is the view model for the Main view of the application.
 */

Ext.define('walid.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    // extend: Ext.data.Store,
    // extend: 'Ext.data.Store',
    alias: 'viewmodel.main',

    stores: {
        personnelstore: {
            fields: ['name', 'email', 'phone', 'addresse'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/gridResponse.json',
                reader: {
                    type: 'json',
                    rootProperty: 'dataAndMetaData.records',
                    id: 'storelist',
                    keepRawData: true

                }
            }
        }


    }
});
