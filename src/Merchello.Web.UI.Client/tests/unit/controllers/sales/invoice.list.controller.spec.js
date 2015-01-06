'use strict';

describe('Merchello.Dashboards.Sales.ListController', function () {
    var scope, element, $controllerConstructor, controller, httpBackend;

    beforeEach(module('umbraco'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, angularHelper, assetsService, notificationsService, invoiceResource,
                                queryDisplayBuilder, queryResultDisplayBuilder, invoiceDisplayBuilder, invoiceResourceMock) {
        httpBackend = $httpBackend;

        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        element = function() { };
        invoiceResourceMock.register();

        controller = $controller('Merchello.Dashboards.Sales.ListController',
            { $scope: scope, $element: element, angularHelper: angularHelper, assetsService: assetsService, notificationsService: notificationsService,
                invoiceResource: invoiceResource, queryDisplayBuilder: queryDisplayBuilder, queryResultDisplayBuilder: queryResultDisplayBuilder,
                invoiceDisplayBuilder: invoiceDisplayBuilder});

        //scope.$digest resolves the promise against the httpbackend
        scope.$digest();
        //httpbackend.flush() resolves all request against the httpbackend
        //to fake a async response, (which is what happens on a real setup)
        httpBackend.flush();

    }));

    it ('Init should load default invoices', function() {
        //// Assert
        expect (scope.currentPage = 1);
        expect (scope.itemCount).toBe(10);
        expect (scope.invoices[0].getPaymentStatus()).toBe('Paid');
    });

});

