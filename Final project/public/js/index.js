function slideLeft(){0==currentSlide?currentSlide=slidesCount-1:currentSlide--,slidesWrapper.style.marginLeft=-(currentSlide*slideWidth)+"px",console.log(currentSlide)}function slideRight(){currentSlide==slidesCount-1?currentSlide=0:currentSlide++,slidesWrapper.style.marginLeft=-(currentSlide*slideWidth)+"px",console.log(currentSlide)}for(var acc=document.getElementsByClassName("accordion"),pan=document.getElementsByClassName("panel"),i=0;i<acc.length;i++)acc[i].onclick=function(){for(var e=0;e<acc.length;e++)acc[e].firstElementChild.className="accDown";for(var t=0;t<pan.length;t++)pan[t].style.height=0,pan[t].style.padding=0;this.nextElementSibling.style.height="180px",this.nextElementSibling.style.padding="15px",this.firstElementChild.className="accUp"};var slider=document.querySelector(".slider"),slidesWrapper=document.querySelector(".slides"),arrowLeft=document.querySelector(".arrowLeft"),arrowRight=document.querySelector(".arrowRight"),slides=document.getElementsByClassName("slide"),slidesCount=slides.length,sText=document.getElementsByClassName("slideText"),slideWidth=document.querySelector(".container").clientWidth;[].forEach.call(slides,function(e){e.style.width=slideWidth+"px"}),slidesWrapper.style.width=slidesCount*slideWidth+"px";var currentSlide=0;arrowLeft.onclick=slideLeft,arrowRight.onclick=slideRight;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3NsaWRlci5qcyIsImpzL2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJzbGlkZUxlZnQiLCJjdXJyZW50U2xpZGUiLCJzbGlkZXNDb3VudCIsInNsaWRlc1dyYXBwZXIiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJzbGlkZVdpZHRoIiwiY29uc29sZSIsImxvZyIsInNsaWRlUmlnaHQiLCJhY2MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwYW4iLCJpIiwibGVuZ3RoIiwib25jbGljayIsImsiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsYXNzTmFtZSIsImoiLCJoZWlnaHQiLCJwYWRkaW5nIiwidGhpcyIsIm5leHRFbGVtZW50U2libGluZyIsInNsaWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJhcnJvd0xlZnQiLCJhcnJvd1JpZ2h0Iiwic2xpZGVzIiwic1RleHQiLCJjbGllbnRXaWR0aCIsImZvckVhY2giLCJjYWxsIiwic2xpZGUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6IkFBdUJBLFFBQUFBLGFBQ0EsR0FBQUMsYUFDQUEsYUFBQUMsWUFBQSxFQUVBRCxlQUVBRSxjQUFBQyxNQUFBQyxhQUFBSixhQUFBSyxZQUFBLEtBQ0FDLFFBQUFDLElBQUFQLGNBR0EsUUFBQVEsY0FDQVIsY0FBQUMsWUFBQSxFQUNBRCxhQUFBLEVBRUFBLGVBRUFFLGNBQUFDLE1BQUFDLGFBQUFKLGFBQUFLLFlBQUEsS0FDQUMsUUFBQUMsSUFBQVAsY0NwQ0EsSUFBQSxHQUpBUyxLQUFBQyxTQUFBQyx1QkFBQSxhQUVBQyxJQUFBRixTQUFBQyx1QkFBQSxTQUVBRSxFQUFBLEVBQUFBLEVBQUFKLElBQUFLLE9BQUFELElBQ0FKLElBQUFJLEdBQUFFLFFBQUEsV0FFQSxJQUFBLEdBQUFDLEdBQUEsRUFBQUEsRUFBQVAsSUFBQUssT0FBQUUsSUFDQVAsSUFBQU8sR0FBQUMsa0JBQUFDLFVBQUEsU0FHQSxLQUFBLEdBQUFDLEdBQUEsRUFBQUEsRUFBQVAsSUFBQUUsT0FBQUssSUFDQVAsSUFBQU8sR0FBQWhCLE1BQUFpQixPQUFBLEVBQ0FSLElBQUFPLEdBQUFoQixNQUFBa0IsUUFBQSxDQUdBQyxNQUFBQyxtQkFBQXBCLE1BQUFpQixPQUFBLFFBQ0FFLEtBQUFDLG1CQUFBcEIsTUFBQWtCLFFBQUEsT0FDQUMsS0FBQUwsa0JBQUFDLFVBQUEsUURsQkEsSUFBQU0sUUFBQWQsU0FBQWUsY0FBQSxXQUNBdkIsY0FBQVEsU0FBQWUsY0FBQSxXQUVBQyxVQUFBaEIsU0FBQWUsY0FBQSxjQUNBRSxXQUFBakIsU0FBQWUsY0FBQSxlQUVBRyxPQUFBbEIsU0FBQUMsdUJBQUEsU0FDQVYsWUFBQTJCLE9BQUFkLE9BQ0FlLE1BQUFuQixTQUFBQyx1QkFBQSxhQUVBTixXQUFBSyxTQUFBZSxjQUFBLGNBQUFLLGVBRUFDLFFBQUFDLEtBQUFKLE9BQUEsU0FBQUssR0FDQUEsRUFBQTlCLE1BQUErQixNQUFBN0IsV0FBQSxPQUdBSCxjQUFBQyxNQUFBK0IsTUFBQWpDLFlBQUFJLFdBQUEsSUFFQSxJQUFBTCxjQUFBLENBRUEwQixXQUFBWCxRQUFBaEIsVUFDQTRCLFdBQUFaLFFBQUFQIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiO3tcdHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyk7XHJcblx0dmFyIHNsaWRlc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzJyk7XHJcblxyXG5cdHZhciBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3dMZWZ0Jyk7XHJcblx0dmFyIGFycm93UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3dSaWdodCcpO1xyXG5cclxuXHR2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGUnKTtcclxuXHR2YXIgc2xpZGVzQ291bnQgPSBzbGlkZXMubGVuZ3RoO1xyXG5cdHZhciBzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlVGV4dCcpO1xyXG5cclxuXHR2YXIgc2xpZGVXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5jbGllbnRXaWR0aDtcclxuXHJcblx0W10uZm9yRWFjaC5jYWxsKHNsaWRlcywgZnVuY3Rpb24oc2xpZGUpIHtcclxuXHRcdHNsaWRlLnN0eWxlLndpZHRoID0gc2xpZGVXaWR0aCArICdweCc7XHJcblx0fSlcclxuXHJcblx0c2xpZGVzV3JhcHBlci5zdHlsZS53aWR0aCA9IChzbGlkZXNDb3VudCAqIHNsaWRlV2lkdGggKyAncHgnKTtcclxuXHJcblx0dmFyIGN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG5cdGFycm93TGVmdC5vbmNsaWNrID0gc2xpZGVMZWZ0O1xyXG5cdGFycm93UmlnaHQub25jbGljayA9IHNsaWRlUmlnaHQ7XHJcblxyXG5cdGZ1bmN0aW9uIHNsaWRlTGVmdCgpIHtcclxuXHRcdGlmKCBjdXJyZW50U2xpZGUgPT0gMCApIHtcclxuXHRcdFx0Y3VycmVudFNsaWRlID0gc2xpZGVzQ291bnQgLSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y3VycmVudFNsaWRlLS07XHJcblx0XHR9XHJcblx0XHRzbGlkZXNXcmFwcGVyLnN0eWxlLm1hcmdpbkxlZnQgPSAtKGN1cnJlbnRTbGlkZSAqIHNsaWRlV2lkdGgpICsgJ3B4JztcclxuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzbGlkZVJpZ2h0KCkge1xyXG5cdFx0aWYoIGN1cnJlbnRTbGlkZSA9PSAoc2xpZGVzQ291bnQgLSAxKSkge1xyXG5cdFx0XHRjdXJyZW50U2xpZGUgPSAwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y3VycmVudFNsaWRlKys7XHJcblx0XHR9XHJcblx0XHRzbGlkZXNXcmFwcGVyLnN0eWxlLm1hcmdpbkxlZnQgPSAtKGN1cnJlbnRTbGlkZSAqIHNsaWRlV2lkdGgpICsgJ3B4JztcclxuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XHJcblx0fVxyXG59Iiwie1x0dmFyIGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY2NvcmRpb25cIik7XHJcblxyXG5cdHZhciBwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFuZWxcIilcclxuXHJcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrICkge1xyXG5cdFx0YWNjW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdGZvciAoIHZhciBrID0gMDsgayA8IGFjYy5sZW5ndGg7IGsrKykge1xyXG5cdFx0XHRcdGFjY1trXS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYWNjRG93bic7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IHBhbi5sZW5ndGg7IGorKyApIHtcclxuXHRcdFx0IFx0cGFuW2pdLnN0eWxlLmhlaWdodCA9IDA7XHJcblx0XHRcdCBcdHBhbltqXS5zdHlsZS5wYWRkaW5nID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuaGVpZ2h0ID0gMTgwICsgJ3B4JztcclxuXHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUucGFkZGluZyA9IDE1ICsgJ3B4JztcclxuXHRcdFx0dGhpcy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYWNjVXAnO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==
