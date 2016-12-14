(function(){
    var app = angular.module('app',[
        'ui.bootstrap']);
    app.controller('AppCtrl', ['$scope','$timeout', '$http', function($scope, $timeout, $http) {
        $scope.cards = [];
        $scope.boards = [];
        $scope.quadroDefault= "q65dArv6";
        $scope.parseInt = parseInt;
        var token = '7624c37e41770770d71000f7f2dc13b9b1647cbb6bbe1c1ff28e214a0564fb5b';

        $http.get('https://api.trello.com/1/tokens/c4a90c8735f980c1257a90a8c205c03f58c971dc21aade2c3f6b66de1f6e8d1c/webhooks/?key=c8b7f2e9a6f82f88b47f767ed2122822')
        .success(function (data) {
            $scope.datos = data;
        });

        // id.querySelector(".test").innerHTML = "yy";
        // alert(angular.element("#test").val());
        // alert(angular.element($document[0].querySelector("#test").value));
        // $http.post('http://api.sundevs.com/api/v1/trellomodels/create', JSON.stringify(data)).then(function (data) {
        //
        // });
        /*
        setTimeout(function(){
            window.location.reload();
        }, 32000);*/
        /*swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text:
            'Your public IP will be received ' +
            'via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve) {
                    $.get('https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d')
                        .done(function (data) {
                            swal.insertQueueStep(data.response.result)
                            resolve()
                        })
                })
            }
        }]); */

        $scope.url = "https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d";
        $http({
            method: 'jsonp',
            url: $scope.url,
            params: {
                format: 'jsonp',
                name: 'Super Hero',
                callback: 'JSON_CALLBACK'
            }
        }).then(function (response) {
            alert(response.data);
        });
        $scope.reload = function () {
            $http.get('https://api.sundevs.com/api/v1/cards/show').success(function (data) {
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
            },3000000)
        };
        $scope.reload();


        $scope.urlsimgs= "&authtoken=6a701202eb76ebf85132b6ba39f6831d";
        $scope.listOfCustomers = null;

        $http.get('https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d')
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

    app.controller('calendarCntrl', ['$scope','$timeout', function($scope, $timeout) {
        $scope.cards = [];
        $scope.boards = [];
        $scope.quadroDefault= "q65dArv6";
        Trello.authorize({
            name: "API-Test",
            type: "popup",
            interactive: true,
            expiration: "never",
            success: load,
            scope: { write: true, read: true }
        });
        token = 'Trello.token()';
        $scope.$watch(function () {
            return Trello.authorized();
        }, function (val) {
            $scope.isLoggedIn = val;
            $scope.tok = token;
        });

        function load() {
            loadBoards();
            loadCards();
        }

        function loadBoards() {
            $scope.loadingBoards = true;
            Trello.get("members/me/boards", function (boards){
                angular.extend($scope.boards, boards);
                $scope.loadingBoards = false;
                $scope.poll();
            });
        }
        function loadCards() {
            $scope.loadingCards = true;
            Trello.get("boards/"+ $scope.quadroDefault + "/cards/", function (cards){
                angular.extend($scope.cards, cards);
                $scope.loadingCards = false;
                $scope.poll();
            });
        }
        $scope.fresh = function(){
            load();
        };
        $scope.poll = function() {
            $timeout(function() {
                console.log('poll');
            }, 100);
        };
    }]);
    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

})();
