# oldie

A bundle of polyfills for Old IE.


### addEventListener
Needed for ie8

<https://github.com/jonathantneal/EventListener>

### classList
Needed for ie8 and ie9

<https://github.com/remy/polyfills>

### console
Needed for ie8

Sham for window.console, that kills errors for undefined console methods.

### es5 shim
Needed for ie8. Polyfills array and tring methods amogst others.

<https://github.com/es-shims/es5-shim>

Warning: some unsupported features such as `Object.defineProperty` may still fail in ie8. See [documentation](https://github.com/es-shims/es5-shim) for es5-sham

### html5 shiv
Needed for ie8. Polyfills HTML5 elements.

<https://github.com/aFarkas/html5shiv>

### requestAnimationFrame
Needed for ie8 and ie9

<https://gist.github.com/paulirish/1579671>


### Usage

```html
<!--[if IE]>
<script src="oldie.js"></script>
<![endif]-->
```


### Dev setup

To install dependencies:

```
$ npm install
$ bower install
```

To build:

```
$ gulp bundle
```

To run tests:

```
$ npm install -g karma-cli
$ karma start
```
