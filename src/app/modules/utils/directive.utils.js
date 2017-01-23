'use strict'

//公用组件
angular.module('swalk.utils',[])
    .directive('thumbnailItem',[function(){
        return {
            restrict:'EA',
            scope:{
                resource:'@',
                clickEvent:'&'
            },
            link:function(scope,elem,attr){
                scope.item=JSON.parse(scope.resource);
            },
            templateUrl:'app/modules/utils/linkimg.tpl.html'
        }
    }])
