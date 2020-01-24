(function () {
    'use strict'
    angular.module('app', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/clt', {
            controller : 'cltController' ,
            templateUrl:'/app/client/templates/client/listClient.html'
            })
            .when('/addclient', {
                controller: 'addclient',
                templateUrl: '/app/client/templates/client/addClient.html'
            })
             .when('/updateClient/:id', {
                 controller: 'editclient',
                 templateUrl: '/app/client/templates/client/editClient.html'
             })
            .when('/adm', {
                controller: 'admController',
                templateUrl : '/app/client/templates/admin/listAdmin.html'
            })
            .when('/addAdmin', {
                controller: 'addAdmin',
                templateUrl: '/app/client/templates/admin/addAdmin.html'
            })
            .when('/updateAdmin/:id', {
                controller: 'editAdmin',
                templateUrl: '/app/client/templates/admin/editAdmin.html'
            })
            .when('/cat', {
                controller: 'categrorieCtrl',
                templateUrl: '/app/client/templates/categories/listCategorie.html'
            })
            .when('/addCat', {
                controller: 'addCat',
                templateUrl: '/app/client/templates/categories/addCategorie.html'
            })
             .when('/updateCat/:id', {
                 controller: 'editcat',
                 templateUrl: '/app/client/templates/categories/editCategorie.html'
             })
            .when('/sousCat', {
                controller: 'sousCat',
                templateUrl:'/app/client/templates/sousCategories/listSousCat.html'
            })
            .when('/addSousCat', {
                controller: 'addSousCat',
                templateUrl: '/app/client/templates/sousCategories/addSousCat.html'
            })
            .when('/editSousCat/:id', {
                controller: 'editSousCat',
                templateUrl: '/app/client/templates/sousCategories/editSousCat.html'
            })
            .when('/prd', {
                controller: 'prdController',
                templateUrl:'/app/client/templates/Produit/listProduits.html'
            })
            .when('/addProduit', {
                controller: 'addProduit',
                templateUrl: '/app/client/templates/Produit/addProduit.html'
            })
            .when('/editProduit/:id', {
                controller: 'editProduit',
                templateUrl: '/app/client/templates/Produit/editProduit.html'
            })
            .when('/home', {
                controller: 'homeCtl',
                templateUrl :'/app/client/templates/home/index.html'
            })
            .when('/cmd', {
                controller: 'listCmd',
                templateUrl :'/app/client/templates/Cmd/listCmd.html'
            })
            .when('/addCmd/:id', {
                controller: 'addCmd',
                templateUrl : '/app/client/templates/Cmd/addCmd.html'
            })
            .when('/homee', {
                controller: 'homee',
                templateUrl:'/app/client/templates/home/home.html'
            })
            .when('/album', {
                controller: 'homeCtl',
                templateUrl: '/app/client/templates/home/album.html'
            })
            .when('/blog', {
                controller: 'blog',
                templateUrl: '/app/client/templates/home/blog.html'
            })
            .when('/mail', {
                controller: 'addMessage',
                templateUrl: '/app/client/templates/home/mail.html'
            })
            .when('/singl', {
                controller: 'singl',
                templateUrl: '/app/client/templates/home/single.html'
            })
            .when('/typo', {
                controller: 'typo',
                templateUrl: '/app/client/templates/home/typo.html'
            })
            .when('/error', {
                controller: 'error',
                templateUrl: '/app/client/templates/home/404.html'
            })
            .when('/listMsg', {
                controller: 'mail',
                templateUrl: '/app/client/templates/message/listMsg.html'
            })
        .otherwise({ redirectTo: '/homee' });
    }])


})();