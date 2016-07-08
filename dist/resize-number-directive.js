(function (angular) {
    'use strict';
    angular.module('resizeNumber',[])
    .directive('resizeNumber', function () {
        return {
            restrict: 'E',
            scope: {
                tag: '@',
                value: '@',
                maxFontSize: '@',
                minFontSize: '@',
                defaultNumberSize: '@',
                decreaseRate: '@'
            },
            link: function (scope, element, attrs) {

                // reactive to value attribute
                attrs.$observe('value', function (newValue) {

                    scope.value = newValue;

                    var _valueSize = (scope.value).toString().length,
                        _el = null,
                        _diff = 0,
                        _fontSize = 0;

                    // check if there is a tag
                    if(scope.tag) {
                        _el = document.createElement(scope.tag)
                        _el.innerHTML = scope.value;
                        element.html(_el.outerHTML);
                    }
                    else {
                        element.html(scope.value);
                    }

                    // check if it needs the treatment
                    if(_valueSize > scope.defaultNumberSize) {

                        // calculate the difference between the default number size
                        // and the current one
                        _diff = (_valueSize - scope.defaultNumberSize) * scope.decreaseRate;
                        _fontSize = (scope.maxFontSize - _diff);

                        // deal with min value
                        if(_fontSize < scope.minFontSize) {
                            _fontSize = scope.minFontSize;
                        }
                    }
                    else {
                        _fontSize = scope.maxFontSize;
                    }

                    // set font-size
                    if(scope.tag) {
                        element.find(scope.tag).css('font-size', _fontSize + 'px');
                    }
                    else {
                        element.css('font-size', _fontSize + 'px');
                    }
                });
            }
        }
    });
})(angular);