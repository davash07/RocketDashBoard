(function(){
    var app = angular.module('app',[
        'ui.bootstrap']);
    app.controller('AppCtrl', ['$scope','$timeout', '$http', function($scope, $timeout, $http) {
        $scope.cards = [];
        $scope.boards = [];
        $scope.quadroDefault= "q65dArv6";
        $scope.parseInt = parseInt;
        $scope.CurrentDate = new Date();
        var token = '7624c37e41770770d71000f7f2dc13b9b1647cbb6bbe1c1ff28e214a0564fb5b';
        // $.ajax.get('https://api.trello.com/1/tokens/c4a90c8735f980c1257a90a8c205c03f58c971dc21aade2c3f6b66de1f6e8d1c/webhooks/?key=c8b7f2e9a6f82f88b47f767ed2122822')
        // .success(function (data, req, res) {
        //     $scope.datos = data;
        //     res.header('Access-Control-Allow-Origin', "*");
        //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        //     res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
        //     res.send(200);
        // });
        $scope.reload = function () {

            // $http({
            //     method: 'JSONP',
            //     url: 'http://api.sundevs.com/api/v1/cards/quantity',
            //     cache: false,
            //     success: function (data) {
            //         $scope.quantity = data;
            //
            //     }
            // });

            $.ajax({
                type: "GET",
                data: JSON.stringify(data),
                url: "http://api.sundevs.com/api/v1/cards/quantity",
                contentType: "application/json",
                success: function(data) {
                    $scope.quantity = data;
                },
                error:function (data) {
                    alert(data);
                }
            });
            // $http.get('http://api.sundevs.com/api/v1/cards/quantity').success(function (data, req, res) {
            //     res.header('Access-Control-Allow-Origin', "*");
            //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
            //     res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
            //     res.send(200);
            //     $scope.quantity = data;
            // });
            $http.get('http://api.sundevs.com/api/v1/cards/show').success(function (data,req, res) {
                res.header('Access-Control-Allow-Origin', "*");
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
                res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
                res.send(200);
                if (data.card != null){
                    var audio = new Audio('sound.mp3');
                    audio.play();
                    swal({
                        title: data.card.name_board,
                        type: 'error',
                        text: 'Se ha incluido un nuevo bug' ,
                        timer: 10000
                    }).then(
                        function () {},
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                console.log('I was closed by the timer')
                            }
                        }
                    );
                    //  alert('dasdas');
                    //  alert( data.card.members[0].fullname);
                    // // alert();alert
                }
            });

            $timeout(function(){
                $scope.reload();
            },3000)
        };
        $scope.reload();
        $scope.urlsimgs= "&authtoken=6a701202eb76ebf85132b6ba39f6831d";
        $scope.listOfCustomers = null;

        $http.get('http://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d')
            .success(function (data) {
                $scope.listOfCustomers = data.response.result;

            }).error(function () {
            });
        $http.get('apizoho.json').success(function(data) {
            $scope.info = data;
        });
        $scope.ver=function(value){
            $scope.app=value;
        };
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'unsplash.it/' + newWidth + '/300',
                text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
                id: currIndex++
            });
        };

        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }

        $scope.max = 200;

        $scope.random = function() {
            var value = Math.floor(Math.random() * 100 + 1);
            var type;

            if (value < 25) {
                type = 'success';
            } else if (value < 50) {
                type = 'info';
            } else if (value < 75) {
                type = 'warning';
            } else {
                type = 'danger';
            }

            $scope.showWarning = type === 'danger' || type === 'warning';

            $scope.dynamic = value;
            $scope.type = type;
        };

        $scope.random();

        $scope.randomStacked = function() {
            $scope.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
                var index = Math.floor(Math.random() * 4);
                $scope.stacked.push({
                    value: Math.floor(Math.random() * 30 + 1),
                    type: types[index]
                });
            }
        };

        $scope.randomStacked();
    }]);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

})();
