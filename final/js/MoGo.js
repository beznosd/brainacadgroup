
//Accordione

var acc = document.getElementsByClassName("accordion"); //button
var pan = document.getElementsByClassName("panel"); //content

for (var i = 0; i < acc.length; i++) {
	acc[i].onmouseover = function() {

		for (var j = 0; j < acc.length; j++) {
			acc[j].classList.remove('active'); 
		}

		this.classList.add('active');
			
		for (var j = 0; j < pan.length; j++) {    
			pan[j].classList.remove('show');
		}

		this.nextElementSibling.classList.add('show');
	}
}

// slider

 $(document).ready(function(){
      $('.carousel').carousel();
    });

 //scroll

(function($){
        $(window).on("load",function(){
            $(".panel").mCustomScrollbar();
        });
    })(jQuery);