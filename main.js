$(document).ready(function(){

	/* FadeIn function */
	function fadeIn(el, time) {

  		el.style.opacity = 0;

	  	var last = +new Date();

	  	var tick = function() {
		    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
		    last = +new Date();

		    if (+el.style.opacity < 1) {
		      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		    }
	 	 };

	  tick();
	}

	/* Apelare FadeIn dupa 2 secunde */

	setTimeout(function () {

		var el = document.getElementById("info");

		fadeIn(el, 3000);

	}, 2000);

	/* Apelare FadeIn la click pe Read More */

	$("#read-m").on('click', function() {

		var el = document.getElementById("using");

		fadeIn(el, 3000);
	});

	$("#read-m1").on('click', function() {

		var el = document.getElementById("using1");

		fadeIn(el, 3000);
	});

	// Actiune la click pe Help //

	$("#help-button").on('click', function() {
			if( $(".help-menu").css('display') == 'none') {
				$('.help-menu').css('display','block');
			} else {
				$('.help-menu').css('display','none');
			}
	});

	// Scroll animat pe meniu //

	var links = ['#about','#why_join','#faq','#our_team','#statistics','#prof-calc','#top-banner'];

	for (var i = 0, len = links.length; i < len; i++) {
		$('a[href^="'+links[i]+'"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body, footer').stop().animate({
		            scrollTop: target.offset().top
		        }, 2000);
		    }
		});
	}

	// Cuvintele cu Mesaj //

	if (window.china) {
		var mesaje = [
						 '更像我们更好的为您的钱包！',
						 '认为聪明 !',
						 '让我们为你们服务！',
						 '你所要做的就是验证你的统计数据和钱包余额！',
						 '让我们一起成长！'
					 ];
	} else {
		var mesaje = [
					 'More Miners better for your wallet!',
					 'Think smart!',
					 'Let Us do Your job!',
					 'All you have to do is to verify your statistics and wallet balance!',
					 'Let\'s grow together!'
				 ];
	}


	var counter = 0;
    var element = document.getElementById('word');
	var x = $("#word");
	var inst = setInterval(change, 7000);
	var dinst = setInterval(regen, 7000);

	function change() {
        fadeIn(element, 3000);
		x.text(mesaje[counter]);
		x.animate({
			paddingLeft: "30px",
			opacity: 1
		},4000)

		counter++;

		if (counter >= mesaje.length) {
		    counter = 0;
		}

	}

	function regen() {
		x.animate({
			paddingLeft: "0px",
			opacity: 0
		},10);
	}

});
