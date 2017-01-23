'use strict'
angular.module('tab.home',[])
    .controller('homeCtrl', ['$scope','$http','$ionicSlideBoxDelegate','$ionicScrollDelegate', function($scope,$http,$ionicSlideBoxDelegate,$ionicScrollDelegate) {
        var homeObj=this;
        $scope.hidTheTopBar=true;
        this.model = {
            activeIndex:0
        };
        this.pageClick = function(index){
            $scope.model.activeIndex = 2;
        };

        this.slideHasChanged = function($index){

        };
        $scope.delegateHandle = $ionicSlideBoxDelegate;

        homeObj.itemData=[
            {
                title:'北戴河阿尔卡迪亚滨海度假酒店-园景双床房（含双早）',
                subtitle:'秦皇岛 北戴河区 黄金海岸海滨高尔夫球会',
                img:'app/img/1.png',
                price:'480'
            },
            {
                title:'廊坊阿尔卡迪亚国际酒店-B座舒适标间（含双早）',
                subtitle:'廊坊 广阳区 祥云道83号，近会展中心200米',
                img:'app/img/2.png',
                price:'348'
            },
            {
                title:'南京阿尔卡迪亚国际酒店-豪华双人间（含双早）',
                subtitle:'南京 六合区 龙池街道环龙池路20号',
                img:'app/img/3.png',
                price:'408'
            },
            {
                title:'沧州阿尔卡迪亚国际酒店-高级双人房（含双早）',
                subtitle:'沧州 运河区 黄河西路33号，近朝阳街',
                img:'app/img/4.png',
                price:'378'
            },
            {
                title:'聊城阿尔卡迪亚国际温泉酒店-高级标准间（含双早）',
                subtitle:'聊城 东昌府区 湖南路与昌润路交叉口东500米路北，近昌润路',
                img:'app/img/1.png',
                price:'438'
            },
            {
                title:'南戴河-杯澜佐邻佑里酒店公寓-园景公寓',
                subtitle:'秦皇岛市北戴河新区香海湾路与夏威夷大道交叉口，近北戴河新区政府',
                img:'app/img/2.png',
                price:'230'
            },
            {
                title:'廊坊阿卡酒店（盛江南会所分店）-高级标准间（含双早）',
                subtitle:'聊城 东昌府区 湖南路与昌润路交叉口东500米路北，近昌润路',
                img:'app/img/3.png',
                price:'258'
            }
        ]

        $scope.scrolls=function(){
            console.log('----------------');
        }

        $scope.test=function(){

            if($ionicScrollDelegate.getScrollPosition().top>=500){
                $scope.hidTheTopBar=false;
            }else{
                $scope.hidTheTopBar=true;
            }
        }

        $http({
            url:'http://172.16.1.144:3008/userInfo',
            method:'POST',
            params:{token:'123456st56de'}
        }).success(function(data){
            console.log(data.phone);
        })
    }])
