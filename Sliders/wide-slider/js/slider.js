var slider = document.querySelector('.slider');
var slidesWrapper = document.querySelector('.slides');

var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

var slides = document.getElementsByClassName('slide');

var slidesCount = slides.length;

var sliderWidth = slider.clientWidth;

[].forEach.call(slides, function(slide){
	slide.style.width = sliderWidth + 'px';
});
slidesWrapper.style.width = (slidesCount * sliderWidth) + 'px';

var currentImg = 0;

// Creating controls
var controlsParent = document.querySelector('.controls');
var controls = [];
for (var i = 0; i < slidesCount; i++) {
	var control = document.createElement('span');
	control.className = 'slide-'+i;
	control.onclick = slideTo;
	controlsParent.appendChild(control);
	controls.push(control);
}
controls[currentImg].classList.add('active');

arrowLeft.onclick = slideLeft;
arrowRight.onclick = slideRight;

function slideLeft() {
	controls[currentImg].classList.remove('active');
	if (currentImg == 0) {
		currentImg = slidesCount - 1;
	} else {
		currentImg--;
	}
	controls[currentImg].classList.add('active');
	slidesWrapper.style.marginLeft = -(currentImg * sliderWidth) + 'px';
}

function slideRight() {
	controls[currentImg].classList.remove('active');
	if (currentImg == (slidesCount - 1)) {
		currentImg = 0;
	} else {
		currentImg++;
	}
	controls[currentImg].classList.add('active');
	slidesWrapper.style.marginLeft = -(currentImg * sliderWidth) + 'px';
}

function slideTo() {
	var slideNum = this.classList[0].split('-')[1];
	var margin = sliderWidth * slideNum;
	controls[currentImg].classList.remove('active');
	currentImg = slideNum;
	controls[currentImg].classList.add('active');
	slidesWrapper.style.marginLeft = -margin + 'px';
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


