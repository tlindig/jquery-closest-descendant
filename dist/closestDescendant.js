/*! .closestDescendant( selector [, options ] ) - v0.0.1 - 2013-04-05
* https://github.com/tlindig/jquery-closest-descendant
* Copyright (c) 2013 Tobias Lindig; Licensed MIT */
(function( $ ) {

	$.fn.closestDescendant = function(selector, firstMatchStops) {

		if (!selector || selector === '') {
			return $();
		}

		firstMatchStops = firstMatchStops !== false ? true : false;

		var resultSet = $();

		this.each(function() {

			var $this = $(this);

			// breadth first search for every matched node,
			// go deeper, until a child was found in the current subtree or the leave was reached.
			var queue = [];
			queue.push( $this );
			while ( queue.length > 0 ) {
				var node = queue.shift();
				var children = node.children();
				for ( var i = 0; i < children.length; ++i ) {
					var $child = $(children[i]);
					if ( $child.is( selector ) ) {
						resultSet.push( $child[0] ); //well, we found one
						if ( firstMatchStops ) {
							return false;//stop processing
						}
					} else {
						queue.push( $child ); //go deeper
					}
				}
			}
		});

		return resultSet;
	};
})(jQuery);

(function( $ ) {
	// Collection method.
	$.fn.awesome = function() {
		return this.each(function(i) {
			// Do something awesome to each selected element.
			$(this).html('awesome' + i);
		});
	};

	// Static method.
	$.awesome = function(options) {
		// Override default options with passed-in options.
		options = $.extend({}, $.awesome.options, options);
		// Return something awesome.
		return 'awesome' + options.punctuation;
	};

	// Static method default options.
	$.awesome.options = {
		punctuation: '.'
	};

	// Custom selector.
	$.expr[':'].awesome = function(elem) {
		// Is this element awesome?
		return $(elem).text().indexOf('awesome') !== -1;
	};

})( jQuery );
