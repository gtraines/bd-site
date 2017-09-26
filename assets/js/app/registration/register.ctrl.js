/**
 * Created by graham on 9/24/17.
 */

 (function() {
     'use strict';
 
     angular
         .module('app')
         .controller('RegisterController', RegisterController);
 
    RegisterController.$inject = ['$scope', 'RegisterService'];
     function RegisterController($scope, RegisterService) {
         var vm = this;
         vm.trySubmit = trySubmit;

         activate();
 
         ////////////////
 
         function activate() { 
            vm.formData = {
                user: {
                    
                },
                organization: {
                    
                }
            }
         }

         function trySubmit(isFormValid) {
            console.log(vm.registrationForm);
            
            if (isFormValid) {
                RegisterService.postRegistration(
                    vm.formData, 
                    postSuccess, 
                    postError);
            }
         }

         function postSuccess(data) {
             console.log(data);
         }

         function postError(data) {
             console.log(data);
         }
     }
 })();