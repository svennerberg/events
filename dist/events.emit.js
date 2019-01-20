/*!
 * events v1.0.0
 * A tiny event delegation helper library.
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/events
 */

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], (function () {
			return factory(root);
		}));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.events.emit = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	return function (type, elem, detail) {

		// Make sure there's an event type
		if (!type) return;

		// Variables
		elem = elem || window;
		detail = detail || {};

		// Create a new event
		var event = new CustomEvent(type, {
			bubbles: true,
			cancelable: true,
			detail: detail
		});

		// Dispatch the event
		elem.dispatchEvent(event);

	};

}));