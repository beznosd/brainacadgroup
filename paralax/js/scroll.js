document.querySelector('.store').onclick = scroll;
document.querySelector('.style').onclick = scroll;
document.querySelector('.history').onclick = scroll;
document.querySelector('.designer').onclick = scroll;

document.querySelector('.scroller').onclick = goTop;
document.querySelector('.home').onclick = goTop;

function scroll() {
	var  targetTop = document.getElementById(this.getAttribute('class')).offsetTop;
	var menuItems = document.querySelector('nav span');
	var header = document.querySelector('.menu');

	[].forEach.call(menuItems, function(item){
		item.onclick = null;
	})

	if (window.pageYOffset < targetTop) {
		var iBottom = setInterval(function(){
			var documentHeight = document.documentElement.scrollHeight;
			var wBottomScroll = window.pageYOffset + document.documentElement.clientHeight;

			// get the element
			if (window.pageYOffset  + header.clientHeight >= targetTop) {

				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				})
				clearInterval(iBottom);
				window.scrollTo(0, targetTop - header.clientHeight);
				return false;
			}

			// get the bootom of the page
			if (wBottomScroll === documentHeight) {
				
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				})

				clearInterval(iBottom);
				return false;
			}

			window.scrollBy(0, 30);
		}, 15);
	} else {
			var iTop = setInterval(function(){
			
			if (window.pageYOffset + header.clientHeight <= targetTop) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				})


				clearInterval(iTop);
				return false;
			}

			if (window.pageYOffset === header.clientHeight) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				})

				clearInterval(iTop);
				return false;				
			}


			window.scrollBy(0, -30);
		}, 15);
	}
};

function goTop() {
	// var menuItems = document.querySelector('nav span');
	var header = document.querySelector('.menu');
	var iTop = setInterval(function(){
			
			if (window.pageYOffset <= header.clientHeight) {

				clearInterval(iTop);
				return false;
			}


			window.scrollBy(0, -30);
		}, 15);

}