(function($) {
	/*
		======== A Handy Little QUnit Reference ========
		http://api.qunitjs.com/

		Test methods:
			module(name, {[setup][ ,teardown]})
			test(name, callback)
			expect(numberOfAssertions)
			stop(increment)
			start(decrement)
		Test assertions:
			ok(value, [message])
			equal(actual, expected, [message])
			notEqual(actual, expected, [message])
			deepEqual(actual, expected, [message])
			notDeepEqual(actual, expected, [message])
			strictEqual(actual, expected, [message])
			notStrictEqual(actual, expected, [message])
			throws(block, [expected], [message])
	*/

	/**
	 * test case:
	 *	<div id="qunit-fixture">
	 *		<div id="start">
	 *			<div>
	 *				<div>
	 *					<div id="e1" class="c">e1</div>
	 *				</div>
	 *			</div>
	 *			<div id="e2" class="c">
	 *				e2
	 *			</div>
	 *			<div id="e3" class="c">
	 *				e3
	 *				<div id="e4" class="c">child of e3</div>
	 *			</div>
	 *		</div>
	 *	</div>
	 */

	module("jQuery#closestDescendant", {
		// This will run before each test in this module.
		setup: function() {
			this.elem = $("#start");
		}
	});


	test(".closestDescendant('.c')", function() {
		expect(1);
		deepEqual(this.elem.closestDescendant(".c").get(), $("#e2").get(), "should be #c1-2");
	});

	test(".closestDescendant('.c', true)", function() {
		expect(1);
		var s = "";
		this.elem.closestDescendant(".c", true).each(function(){ s += this.id;});
		equal(s, "e2e3e1","should find all 3 first matches");
	});


}(jQuery));
