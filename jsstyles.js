

function me() {
  var img=document.getElementById("dragon");
  img.setAttribute("src", "http://res.cloudinary.com/dx3esa92w/image/upload/v1464943185/cvphoto_smi4db.jpg");
}
function dragon(){
  var img=document.getElementById("dragon");
  img.setAttribute("src", "https://pixabay.com/static/uploads/photo/2015/04/08/04/41/the-chinese-dragon-712149_960_720.jpg");
}
// onfocus
function color(x){
 
  x.style.background="slateblue";
}
// change font

function changeFont(x){
  x.style.fontFamily="Times New Roman";
}
function changeFont2(x){
  x.style.fontFamily="Poiret One, cursive";
}


//type it
if (window.innerWidth > 760){

  $('.type-it').typeIt({
    startDelay:6000,
    lifeLike: true,
    
    cursor:true
  });

/* slider background */
(function($) {
	
	'use strict';
	
	var $slides = $('[data-slides]');
	var images = $slides.data('slides');
	var count = images.length;
	var slideshow = function() {
		$slides
			.css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
			.show(0, function() {
				setTimeout(slideshow, 5000);
			});
	};
	
	slideshow();
	
}(jQuery));

};
$(document).ready(function(){
  
var div = $('#first');

setTimeout(function() {
  div.removeClass('first');
  div.addClass('second', "easeOutBounce");
	
}, 5000);
  
   $(function() {
    $("#dialog").dialog();
  });
  
});

