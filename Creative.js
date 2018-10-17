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
                $scope.Entry.reason="";
                $scope.Entry.weight="";
            };
            $scope.addPro = function(stuff) {
                $scope.pros.push({
                    text: stuff.reason,
                    weight: parseInt(stuff.weight,10)
                    });
                $scope.Entry.reason="";
                $scope.Entry.weight="";
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
                if (conCount<proCount)
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

    
