#Angular Resize Number Directive

An AngularJS directive to resize the font of a box that has a number that is increasing a lot and messing things up :)

## How to install

`$ bower install angular-resize-number-directive`

## How to use

1. Include the `<script src="angular-resize-number-directive.min.js"></script>` in your HTML document.

2. Include the `resizeNumber` dependency in your Angular module:

``` javascript
angular.module('app', ['resizeNumber']);
```

3. Call the directive with its parameters:
``` html
<resize-number tag="h1" value="12345678" max-font-size="40" min-font-size="20" default-number-size="5" decrease-rate="2"></resize-number>
```

## Parameters

```
tag (optional)           A container beyond the one made by the directive to wrap the number
value                    The actual value. It can be a constant value or an expression
max-font-size            The max size of the font
min-font-size            The min size of the font
default-number-size      The length where the directive starts to work on
decrease-rate            The decrease rate
```

## LICENSE 

MIT
