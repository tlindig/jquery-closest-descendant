# .closestDescendant( selector [, findAll] )

Breadth first search for the selector.

Get the first element(s) that matches the selector by traversing down through its descendants in the DOM tree level by level. It use a breadth first search (BFS), that mean it will going deeper in a subtree only until the first matching descendant was found in the current subtree.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/tlindig/jquery-closest-descendant/master/dist/closestDescendant.min.js
[max]: https://raw.github.com/tlindig/jquery-closest-descendant/master/dist/closestDescendant.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/closestDescendant.min.js"></script>
<script>
jQuery(function($) {
  $.awesome(); // "awesome"
});
</script>
```

## Documentation

Different to the .find() is, that it will return only the first match element in a subtree.

## Examples

```html
	<div id="start">
		<div>
			<div>
				<div id="e1" class="c">
					e1
				</div>
			</div>
		</div>
		<div id="e2" class="c">
			e2
		</div>
		<div id="e3" class="c">
			e3
			<div id="e4" class="c">
				child of e3
			</div>
		</div>
	</div>
```

```javascript
jQuery('#start').closestDescendant(".c")
// result: Object[div#e2.c]

jQuery('#start').closestDescendant(".c", true)
// result: Object[div#e2.c, div#e3.c, div#e1.c]

jQuery('#start').find('.c')
// result: Object[div#e1.c, div#e2.c, div#e3.c, div#e4.c]
```

