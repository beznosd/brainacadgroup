var slider = document.querySelector('.slider');
var slidesWrapper = document.querySelector('.slides');

var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

var slides = document.getElementsByClassName('slide');

var slidesCount = slides.length;

slidesWrapper.style.width = (slidesCount * 800) + 'px';

var currentImg = 0;

arrowLeft.onclick = slideLeft;
arrowRight.onclick = slideRight;

function slideLeft() {
	if (currentImg == 0) {
		currentImg = slidesCount - 1;
	} else {
		currentImg--;
	}
	slidesWrapper.style.marginLeft = -(currentImg * 800) + 'px';
}

function slideRight() {
	if (currentImg == (slidesCount - 1)) {
		currentImg = 0;
	} else {
		currentImg++;
	}
	slidesWrapper.style.marginLeft = -(currentImg * 800) + 'px';
}

var interval = setInterval(function(){
	slideRight();
}, 4000);

slider.onmouseover = function() {
	arrowLeft.style.opacity = '1';
	arrowRight.style.opacity = '1';
	clearInterval(interval);
}

slider.onmouseout = function() {
	arrowLeft.style.opacity = '0';
	arrowRight.style.opacity = '0';
	interval = setInterval(function(){
		slideRight();
	}, 4000);
}

