(function () {
    'use strict'
    angular.module('app').controller('cltController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        $scope.clients = [];
        getData();
        function getData()
        {
            dataService.getClients().then(function (result) {
                $scope.clients = result;
            })
        }
        $scope.deleteClient = function (id) {
            dataService.deleteClient(id).then(function () {
                toastr.success('client deleted');
                getData();
                $location.path('/clt');

            }, function () {
                toastr.error('error to delete ');
            })
        };
        $scope.sortBy = function(column)
        {
            $scope.sortColumn = column;
            $scope.reverse = !$scope.reverse;
        }
        

    }])
   .controller('addclient', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
       $scope.addClient = function (client) {
           dataService.addClient(client).then(function () {
               toastr.success('Client Created');
               $location.path('/Client/Login');
           }, function () {
               toastr.error('client not created');
           });
       };
   }])
     .controller('editclient', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
         $scope.client = {};
         dataService.getUsersById($routeParams.id).then(function (result) {
             $scope.client = result;
         }, function () {
             toastr.error('error to find codeClt' + $routeParams.id);
         });
         $scope.updateClient = function (client) {
             dataService.editClient(client).then(function () {
                 toastr.success("client edited");
                 $location.path('/clt');
             }, function () {
                 toastr.error('error to edit  client');
             })
         }

     }])
    .controller('admController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        $scope.admins = [];
        getData();
        function getData() {
            dataService.listAdmin().then(function (result) {
                $scope.admins = result;
            })
        }
        $scope.deleteAdmin = function (id) {
            dataService.deleteAdmin(id).then(function () {
                toastr.success('admin deleted');
                $location.path('/adm');
                getData();

            }, function () {
                toastr.error('error to delete ');
            })
        };

    }])
    .controller('addAdmin', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        $scope.addAdmin = function (admin) {
            dataService.addAdmin(admin).then(function () {
                toastr.success('Admin Created');
                $location.path('/adm');
            }, function () {
                toastr.error('ADmin not created');
            });
        };
    }])
    .controller('editAdmin', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
        $scope.admin = {};
        dataService.getAdminById($routeParams.id).then(function (result) {
            $scope.admin = result;
        }, function () {
            toastr.error('error to find Admin' + $routeParams.id);
        });
        $scope.updateAdmin = function (admin) {
            dataService.editAdmin(admin).then(function () {
                toastr.success("admin edited");
                $location.path('/adm');
            }, function () {
                toastr.error('error to edit  admin');
            })
        }

    }])
    .controller('categrorieCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        $scope.categories = [];
        getData();
        function getData() {
            dataService.listCategorie().then(function (result) {
                $scope.categories = result;
            })
            $scope.deleteCategori = function (id) {
                dataService.deleteCategorie(id).then(function () {
                    toastr.success('categorie deleted');
                    $location.path('/cat');
                    getData();

                }, function () {
                    toastr.error('error to categorie ');
                })
            };
        }
       
    }])
      .controller('addCat', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
          $scope.addCat = function (categorie) {
              dataService.addCategorie(categorie).then(function () {
                  toastr.success('categorie Created');
                  $location.path('/cat');
              }, function () {
                  toastr.error('categorie not created');
              });
          };
      }])
    
    .controller('editcat', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
        $scope.categorie = {};
        dataService.getCategorieById($routeParams.id).then(function (result) {
            $scope.categorie = result;
        }, function () {
            toastr.error('error to find Admin' + $routeParams.id);
        });
        $scope.updateCat = function (categorie) {
            dataService.editCategorie(categorie).then(function () {
                toastr.success("categorie edited");
                $location.path('/cat');
            }, function () {
                toastr.error('error to edit  categorie');
            })
        }

    }])
    .controller('sousCat', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        $scope.sousCat = [];
        
        getData();
        function getData()
        {
            dataService.listSousCategorie().then(function (result) {
                $scope.sousCat = result;
            })
          
        }
        $scope.deleteSousCategorie = function(id)
        {
            dataService.deleteSousCategorie(id).then(function () {
                toastr.success('sous Categore  num ' + id + 'a ete supprimer');
                $location.path('/sousCat');
            }, function () {
                toastr.error('erreur de supprimer la sous categorie num ' + id);
            })
        }
        $scope.sortBy = function (column)
        {
            $scope.sortColumn = column;
            $scope.reverse = !$scope.reverse ;
        }
    }])
    .controller('addSousCat', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        $scope.categories = [];
        getData();
        function getData() {
            dataService.listCategorie().then(function (result) {
                $scope.categories = result;
            })
        }
        $scope.addSousCat = function(souCat)
        {

            dataService.addSousCategorie(souCat).then(function () {
                toastr.success('sous Categorie ajoutée');
                $location.path('/sousCat');
            }, function () {
                toastr.error('erreur');
            })
        }
    }])
    .controller('editSousCat', ['$scope', '$location', '$routeParams', 'dataService', function ($scope, $location, $routeParams, dataService) {
        $scope.sousCat = {}
        dataService.getSousCategorieById($routeParams.id).then(function (result) {
            $scope.sousCat = result;
        })
        $scope.updateSousCat = function(sousCat)
        {
            dataService.editSousCategorie(sousCat).then(function () {
                toastr.success('sous Categorie modifiée');
                $location.path('/sousCat');
            }, function () {
                toastr.error('erreur');
            })
        }


    }])
    
    .controller('prdController', ['$scope', '$location', 'dataService', function ($scope,$location,dataService) {
        $scope.produits = [];
        getData();
        function getData()
        {
            dataService.listProduit().then(function (result) {
                $scope.produits = result;
            })
        }
        $scope.deleteProduit = function(id)
        {
            dataService.deleteProduit(id).then(function () {
                toastr.success('produit supprimee');
                $location.path('/prd');
                getData();
            }, function () {
                toastr.error('erreur');
                $location.path('/prd');
            })

        }
        $scope.sortBy = function(value)
        {
            $scope.sortColumn = value;
            $scope.reverse = !$scope.reverse;
        }
        
    }])
    .controller('addProduit', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        $scope.addProduit = function(prd)
        {
            dataService.addProduit(prd).then(function () {
                toastr.success('produit ajoutee');
                $location.path('/prd');
            }, function () {

                toastr.error('erreur');
                $location.path('/prd');
            })
        }
        $scope.categories = [];
        dataService.listCategorie().then(function(result){
            $scope.categories = result;
        })

        $scope.onFileSelected = function (event) {
            console.log(event);
        }
    }])
    .controller('editProduit', ['$scope', '$location', '$routeParams', 'dataService', function ($scope, $location, $routeParams, dataService) {
        $scope.prd = {};
        dataService.getProduitById($routeParams.id).then(function (result) {
            $scope.prd = result;
        })
        $scope.updateProduit = function(prd)
        {
            dataService.editProduit(prd).then(function () {
                toastr.success('produit modifiee');
                $location.path('/prd');
            }, function () {
                toastr.error('erreur');
                $location.path('/prd');
            })
        }
    }])
    .controller('homeCtl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.produits = [];
        $scope.categories = [];
        $scope.sousCategories = [];
        $scope.cpt = 0;
        getData();
        getData1();
        function getData() {
            dataService.listProduit().then(function (result) {
                $scope.produits = result;
            })
            dataService.listCategorie().then(function (result) {
                $scope.categories = result;
            })
           
        }
        function getData1()
        {
            dataService.listSousCategorie().then(function (result) {
                $scope.sousCategories = result;
            })
        }
    }])
    .controller('listCmd', ['$scope', '$location','dataService', function ($scope,$location, dataService) {
        $scope.cmds = [];
        getData();
        function getData()
        {
            dataService.listCmd().then(function (result) {
                $scope.cmds = result;
            })
        }
       
        $scope.sortBy = function (value) {
            $scope.sortColumn = value;
            $scope.reverse = !$scope.reverse;
        }
    }])
    .controller('addCmd', ['$scope', '$location', '$routeParams', 'dataService', function ($scope, $location, $routeParams, dataService) {
       
        $scope.addCmd = function(cmd)
        {
            dataService.addCmd(cmd).then(function () {
                toastr.success('ajoutee');
                $location.path('/album');
            }, function () {
                toastr.error('erreur');
                $location.path('/album');
            })

        }
        $scope.prd = {};
        getData();
        function getData() {
            dataService.getProduitById($routeParams.id).then(function (result) {
                $scope.prd = result;
            })
        }

    }])
    .controller('homee', ['$scope', 'dataService', function ($scope, dataservice) {
    }])
    .controller('album', ['$scope', 'dataService', function ($scope, dataservice) {
    }])
    .controller('blog', ['$scope', 'dataService', function ($scope, dataservice) {
    }])
    .controller('mail', ['$scope', '$location','dataService', function ($scope,$location, dataService) {
        $scope.meassages = [];
        getData();
        function getData() {
            dataService.listeClientMessage().then(function (result) {
                $scope.meassages = result;
            })
        }
        $scope.deleteMeassge = function(id)
        {
            dataService.deleteMessage(id).then(function () {
                toastr.success('message supprimee');
                $location.path('/listMsg');
            }, function () {
                toastr.error('arreur');
                $location.path('/listMsg');
            })
        }
        
        

    }])
        .controller('addMessage', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.addMessage = function(cltMsg)
            {
                dataService.addCltMessage(cltMsg).then(function () {
                    toastr.success('message envoyee');
                    $location.path('/mail');
                }, function () {
                    toastr.error('erreur');
                    $location.path('/mail');
                })

            }
        }])
    .controller('singl', ['$scope', 'dataService', function ($scope, dataservice) {
    }])
    .controller('typo', ['$scope', 'dataService', function ($scope, dataservice) {
    }])
    .controller('error', ['$scope', 'dataService', function ($scope, dataservice) {
    }])

})();