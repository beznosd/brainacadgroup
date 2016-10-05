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
//*******************************************************************************
    var circle = document.querySelector('.window-tint');
    var circleBox = document.querySelector('.large-window');
    var o_O = (wScroll-circleBox.offsetTop+(circle.scrollHeight/1.2))/(circle.scrollHeight);
    if (o_O < 0.75) {
        circle.style.background = 'rgba(0,0,0,' + o_O + ')';
    }
    console.log(circle.style.background);
//*******************************************************************************
}