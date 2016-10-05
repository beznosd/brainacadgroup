window.onscroll = function() {

	var wScroll = window.pageYOffset;

	// Header

	var logo = document.querySelector('.logo');
	logo.style.transform = 'translate(0px, ' + wScroll / 2 + '%)';

	var backBird = document.querySelector('.back-bird');
	backBird.style.transform = 'translate(0px, ' + wScroll / 4 + '%)';

	var foreBird = document.querySelector('.fore-bird');
	foreBird.style.transform = 'translate(0px, -' + wScroll / 30 + '%)';

	// Models

	var clothesPics = document.querySelector('.clothes-pics');
	if (wScroll > clothesPics.offsetTop - 350) {
		var figures = clothesPics.getElementsByTagName('figure');		
		[].forEach.call(figures, function(figure, i){
			setTimeout(function(i){
				figure.classList.add('is-showing');
			}, 150 * (i + 1));
		});
	}

	/*
	* Your code for circle with paralax
	*/

	var largeWindow = document.querySelector('.large-window'),
		windowTint = document.querySelector('.window-tint'),
		startPoint =largeWindow.offsetTop - document.documentElement.clientHeight;

	if (wScroll > startPoint) {
		// console.log(wScroll+ ',' + startPoint + ', ' + (wScroll-startPoint) + ', ' + document.documentElement.clientHeight  );
		windowTint.style.opacity = (wScroll-startPoint) / document.documentElement.clientHeight;
	}	

	// blog post

	var blogPosts = document.querySelector('.blog-posts'),
		post1 = document.querySelector('.post-1'),
		post3 = document.querySelector('.post-3');

	if (wScroll > blogPosts.offsetTop - document.documentElement.clientHeight) {

		var offset = wScroll - blogPosts.offsetTop + 200;
		offset = Math.min(0,offset);

		post1.style.transform = 'translate(' + offset + 'px, ' + Math.abs(offset*0.2) + 'px)';
		post3.style.transform = 'translate(' + -offset + 'px, ' + Math.abs(offset*0.2) + 'px)';		
	}


	var header = document.querySelector('.menu');

	if (wScroll >= header.clientHeight) {
		header.style.paddingTop = '15px';
		header.style.paddingBottom = '15px';
		header.style.fontSize = '1.2rem';
	} else {
		header.style.paddingTop = '35px';
		header.style.paddingBottom = '35px';
		header.style.fontSize = '1.5rem';
	}

	var scroller = document.querySelector('.scroller');
	if (wScroll >= document.documentElement.clientHeight) {
		scroller.style.right = '40px';
	} else {
		scroller.style.right = '-40px';

	}


}