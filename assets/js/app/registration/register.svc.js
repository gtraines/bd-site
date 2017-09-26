/**
 * Created by graham on 9/24/17.
 */
(function() {
    'use strict';
 
     angular
         .module('app')
         .factory('RegisterService', RegisterService);
 
    RegisterService.$inject = ['$http', 'appConfig'];
     function RegisterService($http, appConfig) {
         var registrationEndpoint = ''
         var service = {
            postRegistration: postRegistration
         }

         return service;
         
         ////////////////
 
         function postRegistration(registrationObject, successCallback, errorCallback) {
            return $http.
                post(appConfig.siteBaseUri + '/register', registrationObject).
                    success(successCallback).
                    error(errorCallback);
        }
     }
})();