angular.module('bigThing', [])
    .controller('mainCtrl', mainCtrl)
        
        function mainCtrl ($scope) {
            $scope.pros=[];
            $scope.cons=[];
            //Console.log("this");
            
            $scope.addCon = function(stuff) {
                if (!(Number.isInteger($scope.Entry.weight)) && ($scope.Entry.weight > 10
                    || $scope.Entry.weight < 1)) {
                    alert("Value must be an integer between 1 and 10!");
                }
                else {
                    $scope.cons.push({
                        text: stuff.reason + " (" + stuff.weight + ")",
                        weight: parseInt(stuff.weight,10)
                        });
                    $scope.Entry.reason="";
                    $scope.Entry.weight="";
                }
            };
            $scope.addPro = function(stuff) {
                if (!(Number.isInteger($scope.Entry.weight)) && ($scope.Entry.weight > 10
                    || $scope.Entry.weight < 1)) {
                    alert("Value must be an integer between 1 and 10!");
                }
                else {
                    $scope.pros.push({
                        text: stuff.reason + " (" + stuff.weight + ")",
                        weight: parseInt(stuff.weight,10)
                        });
                    $scope.Entry.reason="";
                    $scope.Entry.weight="";
                }
            };
            $scope.done = function(){
                var proCount=0;
                var conCount=0;
                for (var i=0;i<$scope.pros.length;i++)
                    
                   {var pro=$scope.pros[i];
                       proCount+=pro.weight};
                for (i=0;i<$scope.cons.length;i++)
                    {var con=$scope.cons[i];
                    conCount+=con.weight};
                alert('cons: ' + conCount + " and pros: " + proCount);
                if (conCount<(proCount/2))
                {$scope.message="Definitely do it!"}
                else if (conCount>=proCount - 1)
                {$scope.message="Maybe do it?"}
                else if (conCount<proCount)
                {$scope.message="You should do it!"}
                else if (proCount<conCount)
                {$scope.message="You might regret it!"}
                else
                {$scope.message="Pros and Cons are equally matched! What will tip the balance?"};
            }
            $scope.clear=function(){
                $scope.cons=[];
                $scope.pros=[];
                $scope.message="";
            }
        }

    
