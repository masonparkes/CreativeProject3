angular.module('bigThing', [])
    .controller('mainCtrl', mainCtrl)
        
        function mainCtrl ($scope) {
            $scope.pros=[];
            $scope.cons=[];
            //Console.log("this");
            $scope.addCon = function(stuff) {
                $scope.cons.push({
                    text: stuff.reason,
                    weight: parseInt(stuff.weight,10)
                    });
                $scope.Entry.reason="next Item";
                $scope.Entry.weight="importance from 1-10";
            };
            $scope.addPro = function(stuff) {
                $scope.pros.push({
                    text: stuff.reason,
                    weight: parseInt(stuff.weight,10)
                    });
                $scope.Entry.reason="next Item";
                $scope.Entry.weight="importance from 1-10";
            };
            $scope.done = function(){
                //Console.log("winner");
            }
        }

    
