/*
 * closestDescendant
 * https://github.com/tlindig/jquery-closest-descendant
 *
 * Copyright (c) 2014 Tobias Lindig
 * Licensed under the MIT license.
 */

(function($) {

    /**
     * Get the first element(s) that matches the selector by traversing down
     * through descendants in the DOM tree level by level. It use a breadth
     * first search (BFS), that mean it will stop search and not going deeper in
     * the current subtree if the first matching descendant was found.
     *
     * @param  {selectors} selector -required- a jQuery selector
     * @param  {boolean} findAll -optional- default is false, if true, every
     *                           subtree will be visited until first match
     * @param  {boolean} sortByAppearance -optional- default is false, if true,
     *                           element(s) are returned in the order they appear in the DOM
     * @return {jQuery} matched element(s)
     */
    $.fn.closestDescendant = function(selector, findAll, sortByAppearance) {

        if (!selector || selector === '') {
            return $();
        }

        findAll = findAll ? true : false;
        sortByAppearance = sortByAppearance ? true : false;

        var resultSet = $();

        this.each(function() {

            var $this = $(this);

            // breadth first search for every matched node,
            // go deeper, until a child was found in the current subtree or the leave was reached.
            var queue = [];
            queue.push($this);
            while (queue.length > 0) {
                var node = queue.shift();
                var children = node.children();
                for (var i = 0; i < children.length; ++i) {
                    var $child = $(children[i]);
                    if ($child.is(selector)) {
                        resultSet.push($child[0]); //well, we found one
                        if (!findAll) {
                            return false; //stop processing
                        }
                    } else {
                        queue.push($child); //go deeper
                    }
                }
            }
        });

        // Reorder elements in the same order as they appear in the DOM 
        if (sortByAppearance)
        {
            resultSet = resultSet.sort(function(a, b) 
            {
                if (a === b) { return 0; }
                if (!a.compareDocumentPosition) { return a.sourceIndex - b.sourceIndex; } // IE8 and below}
                if (a.compareDocumentPosition(b) & 2) { return 1; } // b comes before a
                return -1;
            });        
        }
        
        return resultSet;
    };
})(jQuery);
