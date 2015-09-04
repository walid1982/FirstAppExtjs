/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('walid.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'walid.view.main.MainController',
        'walid.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: 'main',
    tbar: [{
        text: 'load Data',
        handler: 'onClickLoadData'
    }],
    items: [{
        title: 'Dynamic',
        xtype: 'grid'

    }]

});
