'use strict';

(function(fn) {
    window.console = window.console || {};
    var methods = [
		'assert',
		'clear',
		'count',
		'debug',
		'dir',
		'dirxml',
		'error',
		'group',
		'groupCollapsed',
		'groupEnd',
		'info',
		'log',
		'profile',
		'profileEnd',
		'table',
		'time',
		'timeEnd',
		'timeline',
		'timelineEnd',
		'timeStamp',
		'trace',
		'warn'
	];
	for (var i = 0; i < methods.length; i++) {
		var method = methods[i];
		if(typeof window.console[method] !== 'function') {
			window.console[method] = fn;
		}
	}
}(function(){}));