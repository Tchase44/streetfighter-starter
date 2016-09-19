$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();		
	})
	.mousedown(function(){
		// HADOUKEN!!!!
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throw').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},500,
			function(){
				$('.hadouken').hide();
				$('.hadouken').css('left','520px')
			});
	})
	.mouseup(function(){
		$('.ryu-throw').hide();
		$('.hadouken').hide();
		$('.ryu-ready').show();
	});
	// $(document).keydown(function(){
				// $('.ryu-still').hide();
				// $('.ryu-ready').hide();
				// $('.cool').show();
				// playMusic();
			// })
	 // .keyup(function(){
			// $('.cool').hide();
			// $('.ryu-still').show();
	// });

	// new solution from sorce code
	 $(document).keydown(function(e) {
    	if (e.keyCode == 88) {
    	  playMusic();
    	  $('.ryu-ready').hide();
    	  $('.ryu-still').hide();
    	  $('.cool').show();
    	};
  	}).keyup(function(e) {
    	if (e.keyCode == 88) {
    	  $('#careless')[0].pause();
    	  $('#careless')[0].load();
    	  $('.cool').hide();
    	  $('.ryu-ready').show();
    	};
   });
});
var coolSound = false;
function playMusic () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#hadouken-sound')[0].pause();
    // $('#careless')[0].load()
    $('#careless')[0].play();
  };
};
function playHadouken (){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};
// function playMusic (){
	// $('#careless')[0].volume = 0.5;
	// $('#careless')[0].load();
	// $('#careless')[0].play();
// };
 