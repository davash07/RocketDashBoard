(function(){
    var app = angular.module('app',[
        'ui.bootstrap']);

    app.controller('AppCtrl', ['$scope','$timeout', '$http', function($scope, $timeout, $http) {
        $scope.color='ok';
        $scope.cards = [];
        $scope.boards = [];
        $scope.quadroDefault= "q65dArv6";
        $scope.parseInt = parseInt;
        $scope.CurrentDate = new Date();
        var token = '7624c37e41770770d71000f7f2dc13b9b1647cbb6bbe1c1ff28e214a0564fb5b';

        $scope.reload = function () {
                // $.ajax({
                //    type:'GET',
                //     url: 'https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d',
                //     dataType: 'json',
                //     xhrFields: {
                //         withCredentials: false
                //     },
                //     headers: {
                //         "Accept" : "application/json; charset=utf-8",
                //         "Access-Control-Allow-Origin" : "*"
                //     },
                //     success: function (data) {
                //         $scope.resultGet = data.response.result;
                //         $scope.getEmployeeName = function () {
                //             for (var i = 0; i < data.result.length; i++) {
                //                 // if ($scope.result[i].Project_Name === empId) {
                //                 $scope.Zoho = data.result[i].Project_Name;
                //                 // }
                //
                //             }
                //         };
                //     },
                //     error: function (xhr) {
                //         alert('Error ' + xhr.responseText);
                //     }
                //
                // });
                //

                // $http.get("https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d")
                //     .success(function(data) {
                //     $scope.resultGet = data.response;
                //     alert(data.response.result);
                //
                //         // for (var i = 0, l = data.response.result.length; i < l; i++) {
                //         //     alert(data.response.result.id[i] + i + "sada");
                //         // }
                //
                // }).error(function() {
                //     alert('fallo');
                // });
            // var data = { name_application: "name app", model_id: boardid };
            // $.ajax({
            //     type: "POST",
            //     data: JSON.stringify(data),
            //     url: "http://api.sundevs.com/api/v1/trellomodels/create",
            //     contentType: "application/json",
            //     success: function(result) {
            //         if (result.success == true) {
            //             alert("board registrada");
            //         }
            //     }
            // });
            $.ajax({
                type: 'GET',
                url: 'http://api.sundevs.com/api/v1/cards/quantity',
                dataType: 'json',
                xhrFields: {
                    withCredentials: false
                },
                headers: {
                    "Accept" : "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin" : "*"
                },
                success: function (data) {
                    $scope.quantity = data;
                }
            });
            // file:///Users/devios/WebstormProjects/RocketDashBoard/app/view/view.html
            $http.get('http://api.sundevs.com/api/v1/cards/show').success(function (data) {

                if (data.card != null){
                    var audio = new Audio('sound.mp3');
                    audio.play();
                    if (data.card.members != ""){
                        if (data.card.members.length == 1){
                            swal({
                                title: data.card.name_board,
                                type: 'error',
                                text: 'Se ha incluido un nuevo bug con los siguientes integrantes:' + '<br>' + data.card.members[0].fullname,
                                timer: 10000
                            }).then(
                                function () {},
                                function (dismiss) {
                                    if (dismiss === 'timer') {
                                        console.log('I was closed by the timer')
                                    }
                                }
                            );
                        }

                        if (data.card.members.length == 2){
                            swal({
                                title: data.card.name_board,
                                type: 'error',
                                text: 'Se ha incluido un nuevo bug con los siguientes integrantes: ' + '<br>' + data.card.members[0].fullname + '<br>' + data.card.members[1].fullname ,
                                timer: 10000
                            }).then(
                                function () {},
                                function (dismiss) {
                                    if (dismiss === 'timer') {
                                        console.log('I was closed by the timer')
                                    }
                                }
                            );
                        }

                        if (data.card.members.length == 3){
                            swal({
                                title: data.card.name_board,
                                type: 'error',
                                text: 'Se ha incluido un nuevo bug con los siguientes integrantes:' + '<br>' + data.card.members[0].fullname + '<br>' + data.card.members[1].fullname + '<br>' + data.card.members[2].fullname ,
                                timer: 10000
                            }).then(
                                function () {},
                                function (dismiss) {
                                    if (dismiss === 'timer') {
                                        console.log('I was closed by the timer')
                                    }
                                }
                            );
                        }

                        if (data.card.members.length == 4){
                            swal({
                                title: data.card.name_board,
                                type: 'error',
                                text: 'Se ha incluido un nuevo bug con los siguientes integrantes:' + '<br>' + data.card.members[0].fullname + '<br>' + data.card.members[1].fullname + '<br>' + data.card.members[2].fullname + '<br>' + data.card.members[3].fullname ,
                                timer: 10000
                            }).then(
                                function () {},
                                function (dismiss) {
                                    if (dismiss === 'timer') {
                                        console.log('I was closed by the timer')
                                    }
                                }
                            );
                        }

                        if (data.card.members.length == 5){
                            swal({
                                title: data.card.name_board,
                                type: 'error',
                                text: 'Se ha incluido un nuevo bug con los siguientes integrantes:' + '<br>' + data.card.members[0].fullname + '<br>' + data.card.members[1].fullname + '<br>' + data.card.members[2].fullname + '<br>' + data.card.members[3].fullname + '<br>' + data.card.members[4].fullname ,
                                timer: 10000
                            }).then(
                                function () {},
                                function (dismiss) {
                                    if (dismiss === 'timer') {
                                        console.log('I was closed by the timer')
                                    }
                                }
                            );
                        }
                    }else{
                        swal({
                            title: data.card.name_board,
                            type: 'error',
                            text: 'Se ha incluido un nuevo bug',
                            timer: 10000
                        }).then(
                            function () {},
                            function (dismiss) {
                                if (dismiss === 'timer') {
                                    console.log('I was closed by the timer')
                                }
                            }
                        );
                    }

                    //  alert('dasdas');
                    //  alert( data.card.members[0].fullname);
                    // // alert();alert
                }
            });

            $timeout(function(){
                $scope.reload();
            },15000)
        };
        $scope.reload();
        $scope.urlsimgs= "&authtoken=6a701202eb76ebf85132b6ba39f6831d";
        $http.get('apizoho.json').success(function(data) {
            $scope.info = data;
        });
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


})();
