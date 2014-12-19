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

	module( "Default", {
		setup: function(){
				$( '#qunit-fixture' ).find( '.collapsible' ).collapsible();
		}
	});

	test( "Global Initialization", function() {
		ok( $( "html" ).is( ".enhanced" ), "Has global initialization class." );
	});

	test( "Initialization", function() {
		ok( $( "#default.collapsible" ).is( ".collapsible-enhanced" ), "Has individual initialization class." );
		ok( $( "#default .collapsible-content" ).not( ":hidden" ).length, "Content is visible by default." );
	});

	test( "Aria", function() {
		ok( $( "#default .collapsible-header" ).is( "[role=button]" ), "Role added." );
		ok( $( "#default .collapsible-header" ).is( "[aria-expanded]" ), "aria-expanded added." );
	});

	test( "Click the header", function() {
		$( "#default .collapsible-header" ).trigger( "click" );
		ok( $( "#default .collapsible-content" ).is( ":hidden" ), "Content is hidden after header click." );

		$( "#default .collapsible-header" ).trigger( "click" );
		ok( !$( "#default .collapsible-content" ).is( ":hidden" ), "Content is visible after header second click." );
	});

	module( "Collapsed Initialization", {
		setup: function(){
				$( '#qunit-fixture' ).find( '.collapsible' ).collapsible();
		}
	});

	test( "Initialization", function() {
		ok( $( "#collapsed .collapsible-content" ).is( ":hidden" ), "Content is hidden by default." );
	});

	test( "Click the header", function() {
		$( "#collapsed .collapsible-header" ).trigger( "click" );
		ok( !$( "#collapsed .collapsible-content" ).is( ":hidden" ), "Content is visible after header click." );

		$( "#collapsed .collapsible-header" ).trigger( "click" );
		ok( $( "#collapsed .collapsible-content" ).is( ":hidden" ), "Content is hidden after header second click." );
	});

	module( "Collapsed Initialization", {
		setup: function(){
				$( '#qunit-fixture' ).find( '.collapsible' ).collapsible();
		}
	});

	test( "Click the header", function() {
		$( "#accordion-a .collapsible-header" ).trigger( "click" );
		ok( !$( "#accordion-a .collapsible-content" ).is( ":hidden" ), "First accordion collapsible content is visible after header click." );

		$( "#accordion-b .collapsible-header" ).trigger( "click" );
		ok( !$( "#accordion-b .collapsible-content" ).is( ":hidden" ), "Second accordion collapsible content is visible after header click." );
		ok( $( "#accordion-a .collapsible-content" ).is( ":hidden" ), "First accordion collapsible content is visible after second collapsible header click." );
	});

}(jQuery));