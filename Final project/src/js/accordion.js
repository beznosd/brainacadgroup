{	var acc = document.getElementsByClassName("accordion");

	var pan = document.getElementsByClassName("panel")

	for ( var i = 0; i < acc.length; i++ ) {
		acc[i].onclick = function() {

			for ( var k = 0; k < acc.length; k++) {
				acc[k].firstElementChild.className = 'accDown';
			}

			for ( var j = 0; j < pan.length; j++ ) {
			 	pan[j].style.height = 0;
			 	pan[j].style.padding = 0;
			}

			this.nextElementSibling.style.height = 180 + 'px';
			this.nextElementSibling.style.padding = 15 + 'px';
			this.firstElementChild.className = 'accUp';
		}
	}
}