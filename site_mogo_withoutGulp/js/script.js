
document.addEventListener("DOMContentLoaded", function(){

/*Setup custom scrollbar plugin*/
// $('.acc__panel').mCustomScrollbar({
// theme: 'dark-3',
// alwaysShowScrollbar: 1
// });

/*Accordion*/
var acc = document.getElementsByClassName('accordion');
var panel = document.getElementsByClassName('acc__panel');
var i;
var j;
var k;

for (i = 0; i < acc.length; i++) {

	acc[i].onclick = function() {
		
		for (k = 0; k < acc.length; k++) {
			acc[k].classList.remove('arrowDown'); //Стрелка вверх для всех элементов меню (buttons) аккордеона
		}
		this.classList.add('arrowDown'); //Стрелка вниз для активного элемента (button) меню
		
		for (j = 0; j < panel.length; j++) {    
				panel[j].classList.remove('active'); //Делаем все пункты (div) не активными, 
			}
		this.nextElementSibling.classList.add('active'); //а затем активируем пукт меню (div), который следует за кликнутой кнопкой
	}
}

/*SLider*/

var slider = document.querySelector('.slider');
var slidesWrapper = document.querySelector('.slides');

var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

var slides = document.getElementsByClassName('slide');
var slidesCount = slides.length;

var slideWidth = (slider.clientWidth);

[].forEach.call(slides, function(slide){
	slide.style.width = slideWidth + 'px';
});

slidesWrapper.style.width = (slidesCount * slideWidth) + 'px';

var currentImg = 0;

arrowLeft.onclick = slideLeft;
arrowRight.onclick = slideRight;

function slideLeft() {
	if (currentImg == 0) {
		currentImg = slidesCount-1;
	} else {
		currentImg--;
	}
	slidesWrapper.style.marginLeft = -(currentImg * slideWidth) + 'px';
}

function slideRight() {
	if (currentImg == (slidesCount-1)) {
		currentImg = 0;
	} else {
		currentImg++;
	}
	slidesWrapper.style.marginLeft = -(currentImg * slideWidth) + 'px';
}

var interval = setInterval(slideRight, 3000);

slider.onmouseover = function() {
	arrowLeft.style.opacity = '1';
	arrowRight.style.opacity = '1';
	clearInterval(interval);
}

slider.onmouseout = function(){
	arrowLeft.style.opacity = '0';
	arrowRight.style.opacity = '0';
	interval = setInterval(slideRight, 3000);
}
});














