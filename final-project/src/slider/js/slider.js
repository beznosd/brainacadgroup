;(function() {
	var DEFAULT_ARROWS = 'true',
		DEFAULT_COTROLS = 'true',
		DEFAULT_AUTOCHANGE = '3000',
		DEFAULT_STOPONHOVER = 'true',

		arrows, controls, autoChange, stopOnHover;



	function Slider(slider, isArrows, isControls, autoChange, stopOnHover) {

		this.slider = slider;
		this.isArrows = isArrows;
		this.isControls = isControls;
		this.autoChange = autoChange;
		this.stopOnHover = stopOnHover;

		this.slides = slider.getElementsByClassName('slide');
		this.slidesCount = this.slides.length;
		this.slideWrapper = this.slider.getElementsByClassName('slide-wrapper')[0];
		this.slideWidth = this.slider.clientWidth;

		[].forEach.call(this.slides, function(slide){
			slide.style.width = this.slideWidth + 'px';
		}.bind(this));

		this.slideWrapper.style.width = (this.slidesCount * this.slideWidth) + 'px';

		this.autoChange = autoChange;
		this.stopOnHover = stopOnHover;

		this.currentSlide = 0;
		this.interval = null;

		if (this.isArrows) {
			this.arrowLeft = slider.getElementsByClassName('arrow_left')[0];
			this.arrowLeft.onclick = this.slideLeft.bind(this);

			this.arrowRight = slider.getElementsByClassName('arrow_right')[0];
			this.arrowRight.onclick = this.slideRight.bind(this);
		}

		if (this.autoChange > 0) {
			this.startSlideShow();
		}

		if (this.isControls) {
			var controlsParent = slider.getElementsByClassName('controls')[0];

			this.controls = [];
			for (var i = 0; i < this.slidesCount; i++) {
				var control = document.createElement('span');
				control.className = 'slide-'+i;
				control.onclick = this.slideTo.bind(this, i);
				controlsParent.appendChild(control);
				this.controls.push(control);
			}
			this.controls[this.currentSlide].classList.add('active');
		}

		this.slider.addEventListener('mouseover', this.mouseOver.bind(this));
		this.slider.addEventListener('mouseout', this.mouseOut.bind(this));

		window.addEventListener('resize', this.resize.bind(this));


	}

	Slider.prototype.slideLeft = function() {
		this.slideTo(this.currentSlide === 0 ? this.slidesCount-1 : this.currentSlide-1);
	}

	Slider.prototype.slideRight = function() {
		this.slideTo(this.currentSlide === this.slidesCount-1 ? 0 : this.currentSlide+1);
	}

	Slider.prototype.slideTo = function(slideNumber) {
		var margin = this.slideWidth * slideNumber;

		
		if (this.isControls) {
			this.controls[this.currentSlide].classList.remove('active');
			this.controls[slideNumber].classList.add('active');
		}

		this.currentSlide = slideNumber;
		this.slideWrapper.style.marginLeft = -margin + 'px';

	}

	Slider.prototype.startSlideShow = function() {
		this.interval = setInterval(function(){
			this.slideRight();
		}.bind(this), this.autoChange);
	}

	Slider.prototype.stopSlideShow = function() {
		clearInterval(this.interval);
	}

	Slider.prototype.showArrows = function() {
		this.arrowLeft.style.opacity = '1';
		this.arrowRight.style.opacity = '1';
	}

	Slider.prototype.hideArrows = function() {
		this.arrowLeft.style.opacity = '0';
		this.arrowRight.style.opacity = '0';
	}

	Slider.prototype.mouseOver = function() {
		if (this.stopOnHover && this.autoChange > 0) {
			this.stopSlideShow();
		}

		if (this.isArrows) {
			this.showArrows();
		}
	}

	Slider.prototype.mouseOut = function() {
		if (this.stopOnHover && this.autoChange > 0) {
			this.startSlideShow();
		}

		if (this.isArrows) {
			this.hideArrows();
		}
	}

	Slider.prototype.resize = function() {
		this.slideWidth = this.slider.clientWidth;
		[].forEach.call(this.slides, function(slide){
			slide.style.width = this.slideWidth + 'px';
		}.bind(this));

		this.slideWrapper.style.width = (this.slidesCount * this.slideWidth) + 'px';

		//this.slideTo(this.currentSlider);

	}


	var	sliders = document.querySelectorAll('.slider');

		if (sliders) {
			for (var i = 0; i < sliders.length; i++) {
				var dataset = sliders[i].dataset.sliderInit ? sliders[i].dataset.sliderInit.split(',') : [DEFAULT_ARROWS, DEFAULT_CONTROLS, DEFAULT_AUTOCHANGE, DEFAULT_STOPONHOVER];	

				arrows = (dataset[0] === "true" ) ? true : false;
				controls = (dataset[1] === "true" ) ? true : false;
				autoChange = +dataset[2];
				stopOnHover = (dataset[3] === "true") ? true : false;

				new Slider(sliders[i], arrows, controls, autoChange, stopOnHover);
			}
		}

})();



