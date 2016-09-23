$(document).ready(function(){

	/*
	* Simple events
	*/


	// $('.block').click(function(){
	// 	console.log('clicked!');
	// });

	// $('.block').on('click', function(){
	// 	console.log('block clicked!');
	// });

	b = $('.block');

	// b.trigger('click');
	// b.click();

	// b.mouseenter(function(){
	// 	console.log('mouse enter');
	// });

	// b.mouseleave(function(){
	// 	console.log('mouse mouseleave');
	// });

	// Event Helpers
	// b.hover(function(){
	// 	console.log('hovered!');
	// });

	// b.on("mouseenter mouseleave", function() {
	//     console.log( "mouse hovered over or left a div" );
	// });

	// b.on({
	//     mouseenter: function() {
	//         console.log( "hovered over a div" );
	//     },
	//     mouseleave: function() {
	//         console.log( "mouse left a div" );
	//     },
	//     click: function() {
	//         console.log( "clicked on a div" );
	//     }
	// });

	// b.on( "click", { foo: "bar" }, function( event ) {
	// 	console.log( "event data: " + event.data.foo );
	// });

	// b.one("click", function() {
	//     console.log( "You just clicked this for the first time!" );
	// });

	// var i = 1;

	// function clickHandler() {
	// 	console.log('clicked');
	// 	if (i === 3) {
	// 		$(this).off('click', clickHandler);
	// 	}
	// 	i++;
	// }

	// b.on('click', clickHandler);

	// b.off('click', clickHandler);


	// b.dblclick(function(e){
	// 	console.log(e);
	// 	console.log('double click');
	// });

	// b.mousemove(function(e){
	// 	console.log('x => ' + e.originalEvent.x + ' y => ' + e.originalEvent.y);
	// });


	// $(document.body).keypress(function(e){
	// 	console.log(e.which);
	// });

	// $(document.body).contextmenu(function(e){
	// 	e.preventDefault();
	// 	console.log('pageX => ' + e.pageX);
	// 	console.log('pageX => ' + e.pageY);
	// });
	
	/*
	* Dynamic generated elements
	*/

	$(document.body).on('click', '.block2', function(){
		console.log('block 2 clicked!');
	});

	var block2 = document.createElement('div');
	block2.className = 'block2';
	document.body.appendChild(block2);

	// $('.block2').click(function(){
	// 	console.log('block 2 clicked');
	// });

	

	// https://api.jquery.com/category/events/event-object/

});