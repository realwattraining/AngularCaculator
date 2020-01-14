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
            $scope.symbol = "";
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
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.setPoint();
            }

        } else if ($valbtn === "%") {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.validationCal("%");
            }

        } else if ($valbtn === "sqrt") {

            if ($scope.valnumber === "" || $scope.valnumber === undefined) {

            } else {
                $scope.sqrtValue();
            }
        } else {
            if ($scope.valnumber === "" || $scope.valnumber === undefined) {
                $scope.valnumber = $valbtn;
            } else {
                $scope.valnumber = $scope.valnumber + $valbtn;
            }

        }


    }

    //create funtion set Point to number
    $scope.setPoint = function() {
        var c = 0;
        var val2;
        var a = 0;
        var v = 0;
        $scope.Value1();
        if ($scope.temVal1 != 0) {
            for (var i = 0; i < $scope.temVal1.length; i++) {
                if ($scope.temVal1[i] === ".") {
                    c = 1;
                }
            }
            if (c == 1) {
                $scope.valnumber = $scope.valnumber;
            }
            if (c == 0) {
                $scope.valnumber = $scope.valnumber + ".";
            }
        }
        $scope.Value2();
        // alert($scope.temVal2);
        if ($scope.temVal2 != "") {
            $scope.setPoint2();
        }


    }

    // Create function setPoint Value two
    $scope.setPoint2 = function() {
        var c = 0;
        $scope.Value2();
        for (var i = 1; i <= $scope.temVal2.length; i++) {
            if ($scope.temVal2[i] === ".") {
                c = 1;
            }
        }
        if (c == 1) {
            $scope.valnumber = $scope.valnumber;
        }
        if (c == 0) {
            $scope.valnumber = $scope.valnumber + ".";
        }
    }

    // create sqrt function
    $scope.sqrtValue = function() {
        $scope.Value2();
        $scope.Value1();
        $scope.resultshow();
        if ($scope.result == 0) {
            if ($scope.temVal1 != "") {
                $scope.result = Math.sqrt($scope.temVal1);
            } else if ($scope.temVal2 != "") {
                $scope.result = Math.sqrt($scope.temVal1);
            } else {
                $scope.result = Math.sqrt(0);
            }
        } else {
            $scope.result = Math.sqrt($scope.result);
        }

    }

    //Create function get value1 
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

    //Create function get value2
    $scope.Value1 = function() {
        var minus;
        $scope.temVal1 = "";
        for (var i = 0; i < $scope.valnumber.length; i++) {
            if ($scope.valnumber[i] === "*" || $scope.valnumber[i] === "-" || $scope.valnumber[i] === "+" || $scope.valnumber[i] === "/" || $scope.valnumber[i] === "%") {
                break;
            }
            $scope.temVal1 = $scope.temVal1 + $scope.valnumber[i];
        }
        console.log($scope.temVal1);

    }

    // Create function get symbol
    $scope.getSymbol = function() {
        for (var i = 1; i < $scope.valnumber.length; i++) {
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
            } else {
                $scope.result = 0;
            }
            console.log($scope.result);

        }
        //create function error Message
    $scope.error = function($valbtn) {
            $scope.error = "you can't use symbol (" + $valbtn + ") Double in this value ";
        }
        // create function validation calculator symbol
    $scope.validationCal = function($valbtn) {
        $scope.tem = 0;
        for (var i = 1; i < $scope.valnumber.length; i++) {
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




}]);