(function(){
    'use strict'
    angular.module('app').factory('dataService', ['$http', '$q', function ($http, $q) {
        var service = {};
        // Clients CRUD
        service.getClients = function () {
            var deferred = $q.defer();
            $http.get('/Client/Index').then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;

        };
        service.getUsersById = function (id) {
            var deferred = $q.defer();
            $http.get('Client/Details/' + id).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        };

        service.addClient = function (client) {
            var deferred = $q.defer();
            $http.post('Client/Create', client).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
            return deferred.promise;

        };
        service.editClient = function (client) {
            var deferred = $q.defer();
            $http.post('/Client/Edit', client).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
            return deferred.promise;

        };

        service.deleteClient = function (id) {
            var deferred = $q.defer();
            $http.post('/Client/Delete', { id: id }).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
            return deferred.promise;

        };
        // Admin CRUD
        service.listAdmin = function () {
           
                var deferred = $q.defer();
                $http.get('/Admin/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
        };
        service.getAdminById = function (id) {
            var deferred = $q.defer();
            $http.get('Admin/Details/' + id).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        };

        service.addAdmin = function (admin) {
            var deferred = $q.defer();
            $http.post('Admin/Create', admin).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        };

        service.editAdmin = function (admin) {
            var deferred = $q.defer();
            $http.post('/Admin/Edit', admin).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
            return deferred.promise;

        };

        service.deleteAdmin = function (id) {
            var deferred = $q.defer();
            $http.post('/Admin/Delete', { id: id }).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
            return deferred.promise;

        };
         // Categories CRUD
        service.listCategorie = function()
        {
            var deferred = $q.defer();
            $http.get('Categories/Index').then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }

        service.getCategorieById = function(id)
        {
            var deferred = $q.defer();
            $http.get('Categories/Details/' + id).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }
        service.addCategorie = function(categorie)
        {
            var deferred = $q.defer();
            $http.post('Categories/Create', categorie).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.editCategorie = function(categorie)
        {
            var deferred = $q.defer();
            $http.post('Categories/Edit', categorie).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.deleteCategorie = function(id)
        {
            var deferred = $q.defer();
            $http.post('Categories/Delete/' , { id: id }).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }

        //sousCategorie Crud 

        service.listSousCategorie = function()
        {
            var deferred = $q.defer();
            $http.get('sousCategorie/Index').then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.getSousCategorieById = function(id)
        {
            var deferred = $q.defer();
            $http.get('sousCategorie/Details/' + id).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.addSousCategorie = function(sousCat)
        {
            var deferred = $q.defer();
            $http.post('sousCategorie/Create', sousCat).then(function () {
                deferred.resolve();
            }, function () {
                deferrred.reject();
            })
            return deferred.promise;
        }
        service.editSousCategorie = function(sousCat)
        {
            var deferred = $q.defer();
            $http.post('sousCategorie/Edit', sousCat).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.deleteSousCategorie = function(id)
        {
            var deferred = $q.defer();
            $http.post('sousCategorie/delete', { id: id }).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.getCat = function()
        {
            var deferred = $q.defer();
            $http.get('Categories/getCatId').then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        // Crud Prodiut
        service.listProduit = function()
        {
            var deferred = $q.defer();
            $http.get('Produit/Index').then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.getProduitById = function(id)
        {
            var deferred = $q.defer();
            $http.get('Produit/Details/' + id).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.addProduit = function(prd)
        {
            var deferred = $q.defer();
            $http.post('Produit/Create', prd).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })

            return deferred.promise;
        }
        service.editProduit = function(prd)
        {
            var deferred = $q.defer();
            $http.post('Produit/Edit', prd).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.deleteProduit = function(id)
        {
            var deferred = $q.defer();
            $http.post('Produit/Delete', { id: id }).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        // Crud Commande
        service.listCmd = function()
        {
            var deferred = $q.defer();
            $http.get(' Commande/listCmd').then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.addCmd = function(cmd)
        {
            var deferred = $q.defer();
            $http.post('Commande2/Create',cmd).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
          

          return   deferred.promise;
        }
        service.deleteCmd = function(id)
        {
            var deferred = $q.defer();
            $http.post('Commande/Annuler', { id: id }).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        // curd message
        service.listeClientMessage = function()
        {
            var deferred = $q.defer();
            $http.get('clientMessage/Index').then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.addCltMessage = function(cltMsg)
        {
            var deferred = $q.defer();
            $http.post('clientMessage/Create', cltMsg).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        service.deleteMessage = function(id)
        {
            var deferred = $q.defer();
            $http.post('clientMessage/Delete', { id: id }).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            })
            return deferred.promise;
        }
        return service;
    }]);
})();