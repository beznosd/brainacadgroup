// Animated menu scroll

document.querySelector('.store').onclick = scroll;
document.querySelector('.style').onclick = scroll;
document.querySelector('.history').onclick = scroll;
document.querySelector('.designer').onclick = scroll;

function scroll() {

	var menuItems = document.querySelectorAll('nav span');
	var targetTop = document.getElementById(this.getAttribute('class')).offsetTop;

	// clear callbacks from all menu items
	[].forEach.call(menuItems, function(item){
		item.onclick = null;
	});

	if (window.pageYOffset < targetTop) { // go bottom
		var iBottom = setInterval(function() {
			var documentHeight = document.documentElement.scrollHeight;
			var wBottomScroll = window.pageYOffset + document.documentElement.clientHeight;
		
			// get the element or bottom of the page
			if ( window.pageYOffset >= targetTop || wBottomScroll === documentHeight) {
				// reset callbacks
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iBottom);
				return false;
			}
			
			window.scrollBy(0, 30);
		}, 15);
	} else { // go top
		var iTop = setInterval(function(){

			// get the element or top of the page
			if ( window.pageYOffset <= targetTop || window.pageYOffset === 0) {
				// reset callbacks
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iTop);
				return false;
			}

			window.scrollBy(0, -30);
		}, 15);
	}

}


// Top scroller

/*
* Your code ...
*/