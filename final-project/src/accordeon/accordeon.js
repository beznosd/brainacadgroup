"use strict";
var accordeonList = document.querySelectorAll('.accordeon'),
	activeClassName = "accordeon__row_active";
//Constructor for Accordeon
function Accordeon(accordeon) {
	var accordeonHeight = parseInt(getComputedStyle(accordeon).height);
	
	this.accordeon = accordeon;
	this.rows = accordeon.getElementsByClassName('accordeon__row');
	this.textHeight = accordeonHeight;
	
	function _setSize() {
		for (var i = 0; i < this.rows.length; i++) {
			// calculate height of text wrapper with border and padding	
			this.textHeight -= this.rows[i].getElementsByClassName('accordeon__row-header')[0].offsetHeight +
								parseInt(getComputedStyle(this.rows[i]).marginBottom) +
								parseInt(getComputedStyle(this.rows[i]).marginTop);

			this.rows[i].getElementsByClassName('accordeon__row-header')[0].onclick = this.click;
		}
		
		var accordeonTextWrapper = this.rows[0].getElementsByClassName('accordeon__text-wrapper')[0];
		
		// calculate height of text wrapper without border and padding	
		this.textHeight -= parseInt(getComputedStyle(accordeonTextWrapper).borderBottomWidth) +
						parseInt(getComputedStyle(accordeonTextWrapper).borderTopWidth); /* +
						parseInt(getComputedStyle(accordeonTextWrapper).paddingBottom) +
						parseInt(getComputedStyle(accordeonTextWrapper).paddingTop);*/

		for (i = 0; i < this.rows.length; i++) {
			this.rows[i].getElementsByClassName('accordeon__text-wrapper')[0].style.height = this.textHeight+'px';
			// this.rows[i].getElementsByClassName('accordeon__row-text')[0].style.height = this.textHeight+'px';
		}
	};

	_setSize.bind(this)();

};

Accordeon.prototype.click = function() {
	var row = this.parentElement,
		accordeon = row.parentElement;

	if (!row.classList.contains(activeClassName)) {
		accordeon.getElementsByClassName(activeClassName)[0].classList.remove(activeClassName);
		row.classList.add(activeClassName);
	}
};


console.log('start');

 for (var i = 0; i < accordeonList.length; i++) 
	new Accordeon(accordeonList[i]); 


