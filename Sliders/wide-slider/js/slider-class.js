;(function(){
	
	function Slider(isArrows, isControls, autoChange, autoChangeTime, stopOnHover) {

		// set user properties

		this.isArrows = (isArrows === false) ? isArrows : true;
		this.isControls = (isControls === false) ? isControls : true;
		this.autoChange = (autoChange === false) ? autoChange : true;
		this.autoChangeTime = (!parseInt(isFinite(autoChangeTime))) ? autoChangeTime : 3000;
		this.stopOnHover = (stopOnHover === false) ? stopOnHover : true;

		// set class properties

		this.slider = document.querySelector('.slider');
		this.slidesWrapper = document.querySelector('.slides');

		this.arrowLeft = document.querySelector('.arrow-left');
		this.arrowRight = document.querySelector('.arrow-right');

		this.slides = document.getElementsByClassName('slide');

		this.slidesCount = this.slides.length;
		this.sliderWidth = this.slider.clientWidth;

		this.currentImg = 0;
		this.interval = null;

		// style slider

		[].forEach.call(this.slides, function(slide){
			slide.style.width = this.sliderWidth + 'px';
		}.bind(this));
		this.slidesWrapper.style.width = (this.slidesCount * this.sliderWidth) + 'px';


		// initialize arrows
		if (this.isArrows) {
			this.arrowLeft.onclick = this.slideLeft.bind(this);
			this.arrowRight.onclick = this.slideRight.bind(this);

			this.slider.addEventListener('mouseover', this.showArrows.bind(this));
			this.slider.addEventListener('mouseout', this.hideArrows.bind(this));
		}

		// initialize timer 

		if (this.autoChange) {
			this.startInterval();
			
			if (this.stopOnHover) {
				this.slider.addEventListener('mouseover', this.clearInterval.bind(this));
				this.slider.addEventListener('mouseout', this.startInterval.bind(this));
			}
		}

		// initialize slider bottom controls

		if (this.isControls) {
			var controlsParent = document.querySelector('.controls');

			this.controls = [];
			for (var i = 0; i < this.slidesCount; i++) {
				var control = document.createElement('span');
				control.className = 'slide-'+i;
				control.onclick = this.slideTo.bind(this, control);
				controlsParent.appendChild(control);
				this.controls.push(control);
			}
			this.controls[this.currentImg].classList.add('active');
		}
		
	}

	Slider.prototype.slideLeft = function() {
		if (this.isControls) {
			this.controls[this.currentImg].classList.remove('active');
		}
		if (this.currentImg == 0) {
			this.currentImg = this.slidesCount - 1;
		} else {
			this.currentImg--;
		}
		if (this.isControls) {
			this.controls[this.currentImg].classList.add('active');
		}
		this.slidesWrapper.style.marginLeft = -(this.currentImg * this.sliderWidth) + 'px';
	}

	Slider.prototype.slideRight = function() {
		if (this.isControls) {
			this.controls[this.currentImg].classList.remove('active');
		}
		if (this.currentImg == (this.slidesCount - 1)) {
			this.currentImg = 0;
		} else {
			this.currentImg++;
		}
		if (this.isControls) {
			this.controls[this.currentImg].classList.add('active');
		}
		this.slidesWrapper.style.marginLeft = -(this.currentImg * this.sliderWidth) + 'px';
	}

	Slider.prototype.slideTo = function(control) {
		var slideNum = control.classList[0].split('-')[1];
		var margin = this.sliderWidth * slideNum;
		this.controls[this.currentImg].classList.remove('active');
		this.currentImg = slideNum;
		this.controls[this.currentImg].classList.add('active');
		this.slidesWrapper.style.marginLeft = -margin + 'px';
	}

	Slider.prototype.showArrows = function() {
		this.arrowLeft.style.opacity = '1';
		this.arrowRight.style.opacity = '1';
	}

	Slider.prototype.hideArrows = function() {
		this.arrowLeft.style.opacity = '0';
		this.arrowRight.style.opacity = '0';
	}

	Slider.prototype.startInterval = function() {
		this.interval = setInterval(function(){
			this.slideRight();
		}.bind(this), this.autoChangeTime);
	}

	Slider.prototype.clearInterval = function() {
		clearInterval(this.interval);
	}

	new Slider(false, false, true, 5000, false);

})();