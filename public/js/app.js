var app = angular.module('myApp', ['ngRoute']);
//ROUTING
    app.config(function($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl : 'public/home.html'
        })
        .when('/about',{
            templateUrl : 'public/about.html'
        })
        .when('/products',{
            templateUrl : 'public/products.html'
        })
        .when('/enquiry',{
            templateUrl : 'public/enquiry.html'
        })
        .when('/contact',{
            templateUrl : 'public/contact.html'
        })
        .otherwise({
           redirectTo : '/' 
        });
    });


app.controller('myCtrl', function($scope){
    
 

    console.log("Connection Established. Angular is Working...");
    
    $scope.showData = function(){
        
        $scope.navs = [
            
         
            {
                "name" : "Home",
                "URL": ""
            },
            {
                "name" : "About",
                "URL": "about"
            },
            {
                "name" : "Products",
                "URL": "products"
            },
            {
                "name" : "Enquiry",
                "URL": "enquiry"
            },
            {
                "name" : "Contact",
                "URL": "contact"
            }
            
            
        ]
    }
    
    $scope.selected = 0;

    $scope.select= function(index) {
       $scope.selected = index; 
    };
      /*  $scope.select = function(item) {
            
            $scope.selected = item;
            
        };
    
        $scope.isActive = function(item){
        return $scope.selected === item;  
        }; */
    
    
});


















