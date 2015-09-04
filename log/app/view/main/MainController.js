/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('walid.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onClickLoadData: function() {
        var gridStore = this.getStore('personnelstore');
        var columnArray = gridStore.getProxy().getReader().rawData.dataAndMetaData.columns;
        var x = this.getView().query('grid')[0].reconfigure(gridStore, columnArray);

    }


});
