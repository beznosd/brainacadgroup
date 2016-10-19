;{	var slider = document.querySelector('.slider');
	var slidesWrapper = document.querySelector('.slides');

	var arrowLeft = document.querySelector('.arrowLeft');
	var arrowRight = document.querySelector('.arrowRight');

	var slides = document.getElementsByClassName('slide');
	var slidesCount = slides.length;
	var sText = document.getElementsByClassName('slideText');

	var slideWidth = document.querySelector('.container').clientWidth;

	[].forEach.call(slides, function(slide) {
		slide.style.width = slideWidth + 'px';
	})

	slidesWrapper.style.width = (slidesCount * slideWidth + 'px');

	var currentSlide = 0;

	arrowLeft.onclick = slideLeft;
	arrowRight.onclick = slideRight;

	function slideLeft() {
		if( currentSlide == 0 ) {
			currentSlide = slidesCount - 1;
		} else {
			currentSlide--;
		}
		slidesWrapper.style.marginLeft = -(currentSlide * slideWidth) + 'px';
		console.log(currentSlide);
	}

	function slideRight() {
		if( currentSlide == (slidesCount - 1)) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}
		slidesWrapper.style.marginLeft = -(currentSlide * slideWidth) + 'px';
		console.log(currentSlide);
	}
}