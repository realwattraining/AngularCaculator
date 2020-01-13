var app = angular.module("myapp", []);
app.controller("controller", ["$scope", function($scope) {
    var valnumber = 0;
    var val1 = 0;
    var val2 = 0;
    var point = ".";
    var result = 0;
    var clear = 0;
    var error = false;
    var tem = 0;
    var temVal1 = 0;
    var temVal2 = 0;
    var symbol = "";


    // Crate Function valueBtn
    $scope.valueButton = function($valbtn) {
        if ($valbtn === "c") {
            $scope.valnumber = "";
            $scope.result = 0;
        } else if ($valbtn == "*") {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.validationCal("*");
            }

        } else if ($valbtn === "-") {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.validationCal("-");
            }

        } else if ($valbtn === "+") {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.validationCal("+");
            }

        } else if ($valbtn === "/") {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.validationCal("/");
            }


        } else if ($valbtn === "=") {
            $scope.resultshow();

        } else if ($valbtn === ".") {

        } else if ($valbtn === "%") {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.validationCal("%");
            }

        } else if ($valbtn === "+/-") {

            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.validationCalModelo("+/-");
            }
        } else {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {
                $scope.valnumber = $valbtn;
            } else {
                $scope.valnumber = $scope.valnumber + $valbtn;

            }

        }

    }

    //Create function val1 
    $scope.Value2 = function() {
        var a = 0;
        var val2 = "";
        var v;
        for (var i = 0; i < $scope.valnumber.length; i++) {
            if ($scope.valnumber[i] === "*" || $scope.valnumber[i] === "-" || $scope.valnumber[i] === "+" || $scope.valnumber[i] === "/" || $scope.valnumber[i] === "%") {
                a = i;
            }
            if (a != 0) {
                a++;
                val2 = val2 + $scope.valnumber[a];
            }
        }
        v = val2.split("undefined", "1");
        $scope.temVal2 = v[0];
    }

    //Create function val2
    $scope.Value1 = function() {
        $scope.temVal1 = 0;
        for (var i = 0; i < $scope.valnumber.length; i++) {
            if ($scope.valnumber[i] === "*" || $scope.valnumber[i] === "-" || $scope.valnumber[i] === "+" || $scope.valnumber[i] === "/" || $scope.valnumber[i] === "%") {
                break;
            }
            $scope.temVal1 = $scope.temVal1 + $scope.valnumber[i];
        }
        //val1 = $scope.temVal1.split("undefined", 0);
        console.log($scope.temVal1);

    }

    // Create function get symbol
    $scope.getSymbol = function() {
        for (var i = 0; i < $scope.valnumber.length; i++) {
            if ($scope.valnumber[i] === "*" || $scope.valnumber[i] === "-" || $scope.valnumber[i] === "+" || $scope.valnumber[i] === "/" || $scope.valnumber[i] === "%") {
                $scope.symbol = $scope.valnumber[i];
                break;
            }
            console.log($scope.symbol);
        }
    }

    // Create function Result
    $scope.resultshow = function() {
            $scope.Value1();
            $scope.Value2();
            $scope.getSymbol();
            if ($scope.symbol === "*") {
                $scope.result = Number($scope.temVal1) * Number($scope.temVal2);
            } else if ($scope.symbol === "+") {
                $scope.result = Number($scope.temVal1) + Number($scope.temVal2);
            } else if ($scope.symbol === "-") {
                $scope.result = Number($scope.temVal1) - Number($scope.temVal2);
            } else if ($scope.symbol === "/") {
                $scope.result = Number($scope.temVal1) / Number($scope.temVal2);
            } else if ($scope.symbol === "%") {
                $scope.result = Number($scope.temVal1) % Number($scope.temVal2);
            }
            console.log($scope.result);

        }
        //create function error title
    $scope.error = function($valbtn) {
            $scope.error = "you can't use symbol (" + $valbtn + ") Double in this value ";
        }
        // create function validation calculator symbol
    $scope.validationCal = function($valbtn) {
            $scope.tem = 0;
            for (var i = 0; i < $scope.valnumber.length; i++) {
                if ($scope.valnumber[i] === "*" || $scope.valnumber[i] === "-" || $scope.valnumber[i] === "+" || $scope.valnumber[i] === "/" || $scope.valnumber[i] === "%") {
                    $scope.tem = 1;
                }
            }
            if ($scope.tem === 1) {
                //$scope.error("*");
            } else {
                $scope.valnumber = $scope.valnumber + $valbtn;
            }
        }
        // Create function sybol plus or devid before number
    $scope.validationCalModelo = function($valbtn) {
        $scope.tem = 0;
        for (var i = 0; i < $scope.valnumber.length; i++) {
            if ($scope.valnumber[i] === "+" || $scope.valnumber[i] === "-") {
                $scope.tem = 1;
                break;
            } else {
                $scope.valnumber = "+" + $scope.valnumber;
            }
        }
        if ($scope.tem == 1) {

        }
    }




}]);