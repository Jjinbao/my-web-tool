'use strict'

angular.module('swalk', ['ionic','tab.home','tab.stay','tab.holiday','tab.mine','swalk.utils'])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/modules/tabs.html",
                controller: 'rootTabCtrl'
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "app/modules/home/home.html",
                        controller: 'homeCtrl',
                        controllerAs:'homeObj'
                    }
                }
            })
            .state('tabs.stay', {
                url: "/stay",
                views: {
                    'stay-tab': {
                        templateUrl: "app/modules/stay/stay.html",
                        controller: 'stayCtrl'
                    }
                }
            })
            .state('tabs.holiday', {
                url: "/holiday",
                views: {
                    'holiday-tab': {
                        templateUrl: "app/modules/holiday/holiday.html",
                        controller:'holidayCtrl'
                    }
                }
            })
            .state('tabs.mine', {
                url: "/mine",
                views: {
                    'mine-tab': {
                        templateUrl: "app/modules/mine/mine.html",
                        controller:'mineCtrl'
                    }
                }
            })
            /*.state('tabs.listen-list', {
                url: "/:tid",
                views: {
                    'list-tab': {
                        templateUrl: "templates/listen/list.html",
                        controller: 'tpoListenList'
                    }
                }
            })
            .state('tabs.listen-practice', {
                url: "/:tpoid/:sid",
                views: {
                    'list-tab': {
                        templateUrl: "templates/listen/practice-root.html",
                        controller: 'listenPracticeCtrl'
                    }
                }
            })
            .state('tabs.listen-practice.son', {
                url: "/:template",
                views: {
                    'practice-root': {
                        templateUrl: function(routeParams) {
                            return 'templates/listen/' + routeParams.template + '.html'
                        }
                    }
                }
            })
            .state('tabs.listen-test', {
                url: "/:sid",
                views: {
                    'list-tab': {
                        templateUrl: "templates/listen/root-page.html",
                        controller: 'listenTestCtrl'
                    }
                }
            })
            .state('tabs.listen-test.son', {
                url: "/:template",
                views: {
                    'listen-root': {
                        templateUrl: function(routeParams) {
                            return 'templates/listen/' + routeParams.template + '.html'
                        },
                        controller:'answerCtrl'
                    }
                }
            })

            .state('tabs.speak-list', {
                url: "/:tid",
                views: {
                    'list-tab': {
                        templateUrl: "templates/speak/speak-list.html",
                        controller: 'tpoSpeakList'
                    }
                }
            })
            .state('tabs.speak-page', {
                url: "/:tpoid/:sid",
                views: {
                    'list-tab': {
                        templateUrl: "templates/speak/speak-root-page.html",
                        controller: 'speakQuestionPage'
                    }
                }
            })
            .state('tabs.speak-page.son', {
                url: "/:template",
                views: {
                    'speak-root': {
                        templateUrl: function(routeParams) {
                            return 'templates/speak/' + routeParams.template + '.html'
                        }

                    }
                }
            });*/

        $urlRouterProvider.otherwise("/tab/home");
    })

    /*所有控制器的父控制器*/
    .controller('rootTabCtrl', ['$scope',function($scope) {

    }])

    //隐藏底部导航栏
    .directive('hideTabs', function($rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                scope.$on('$ionicView.beforeEnter', function() {
                    scope.$watch(attributes.hideTabs, function(value) {
                        $rootScope.hideTabs = value;
                    });
                });

                scope.$on('$ionicView.beforeLeave', function() {
                    $rootScope.hideTabs = false;
                });
            }
        };
    });



