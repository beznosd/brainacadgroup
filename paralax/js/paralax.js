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

	// Large window

	var largeWindow = document.querySelector('.large-window');
	var windowTint = largeWindow.querySelector('.window-tint');
	if (wScroll > largeWindow.offsetTop - document.documentElement.clientHeight) {
		var opacity = ( wScroll - largeWindow.offsetTop + 500) / (wScroll / 5);
		windowTint.style.opacity = opacity;
	}

	// Blog posts
	var blogPosts = document.querySelector('.blog-posts');
	var post1 = document.querySelector('.post-1');
	var post3 = document.querySelector('.post-3');

	if (wScroll > blogPosts.offsetTop - document.documentElement.clientHeight) {
		console.log('topScroll => ' + wScroll);
		console.log('posts start at => ' + blogPosts.offsetTop);
		var offset = wScroll - blogPosts.offsetTop + 200;
		offset = Math.min(0, offset);

		post1.style.transform = 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)';
		post3.style.transform = 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)';
	}

	// Header colapsing

	var menu = document.querySelector('.menu');
	if ( wScroll > menu.clientHeight ) {
		menu.style.paddingTop = '15px';
		menu.style.paddingBottom = '15px';
		menu.style.fontSize = '1.2rem';
	} else {
		menu.style.paddingTop = '35px';
		menu.style.paddingBottom = '35px';
		menu.style.fontSize = '1.5rem';
	}

}
