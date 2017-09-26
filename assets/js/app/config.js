(function() {
    'use strict';

    var app = angular.module('app');

    var appConfig = {
        appErrorPrefix: '[BD Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Basket Devil',
        siteBaseUri: 'http://localhost:5000',
        version: '1.0.0'
    };

    app.value('appConfig', appConfig);
})();