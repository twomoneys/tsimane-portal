$(window).load(function(){

	'use strict';

/* ==============================================
PAGE LOADER
============================================== */
	
	$(".mid").delay(0).fadeOut();
	$(".outter").delay(0).fadeOut();
	$("#pageloader").delay(300).fadeOut("slow");

/* ==============================================
HOME PAGE IMAGE SLIDER (SUPER SLIDES)
=============================================== */

 	$('#fullscreen , .p-section').superslides({
	 	play: 12000,
	    animation: 'fade',
	    inherit_height_from: window,
    });

/* ==============================================
PROJECT 01 HOME (SUPER SLIDES)
=============================================== */

 	$('#project').superslides({
	 	play: 8000,
	    animation: 'fade',
	    inherit_width_from: window,
		inherit_height_from: '.home_project',
    });

/* ==============================================
FLEX SLIDER FOR HOME TEXTS V1
=============================================== */	
		
    $('.v1 .text-slider').flexslider({
        animation: "slide",
		selector: "ul.home-texts li.slide",
		controlNav: false,
		directionNav: true,
		touch: true, 
		slideshowSpeed: 5000,  
		direction: "vertical",
        start: function(slider){
        	$('body').removeClass('loading'); 
        }
     });

/* ==============================================
FLEX SLIDER FOR HOME TEXTS V2
=============================================== */	
		
    $('.v2 .text-slider').flexslider({
        animation: "fade",
		selector: "ul.home-texts li.slide",
		controlNav: false,
		directionNav: true,
		animationSpeed: 500,
		slideshowSpeed: 5000,  
		direction: "vertical",
        start: function(slider){
        	$('body').removeClass('loading'); 
        }
     });


/* ==============================================
SOFT SCROLL EFFECT FOR NAVIGATION LINKS
=============================================== */	

	$('.scroll').bind('click', function(event) {
		var $anchor = $(this);
		var headerH = $('#navigation, #navigation-sticky').outerHeight();
		$('html, body').stop().animate({
		scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');
		event.preventDefault();
	});


/* ==============================================
WHAT WE DO EFFECTS
=============================================== */

	var $containerFirst = $('.w-items');

		$containerFirst.isotope({
			resizable: false, 
			//masonry: { columnWidth: $containerFirst.width() / 5 },
			itemSelector : '.w-item' ,
			hiddenStyle: { opacity: 0, },
			visibleStyle: { opacity: 1,},
			transformsEnabled: false,
		});

	    var $optionSets = $('#w-options .w-option-set'),
	          $optionLinks = $optionSets.find('a');

	          // Your First Selected Item
	          $containerFirst.isotope({ filter: '.movie' });

	    $optionLinks.click(function(){
	        var $this = $(this);

	        // don't proceed if already selected
	        if ( $this.hasClass('selected') ) {
	          return false;
	        }
	        var $optionSet = $this.parents('.w-option-set');
	        $optionSet.find('.selected').removeClass('selected');
	        $this.addClass('selected');

	        // make option object dynamically, i.e. { filter: '.my-filter-class' }
	        var options = {},
	            key = $optionSet.attr('data-option-key'),
	            value = $this.attr('data-option-value');
	        // parse 'false' as false boolean
	        value = value === 'false' ? false : value;
	        options[ key ] = value;
	        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	          // changes in layout modes need extra logic
	          changeLayoutMode( $this, options )
	        } else {
	          // otherwise, apply new options
	          $containerFirst.isotope( options );
	        }
	        
	        return false;
	    });


/* ==============================================
ANIMATED SKILL BARS
=============================================== */

	jQuery('.progress-bar').appear(function(){
		datavl = $(this).attr('data-value'),
		$(this).animate({ "width" : datavl + "%"}, '300');
	}); 

/* ==============================================
MOBILE BACKGROUND FOR VIDEO BACKGROUNDS
=============================================== */

$(window).load(function(){
	'use strict';
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.mbYTP_wrapper').addClass('mobile-bg');
		$('section , div').addClass('b-scroll');
		$('.animated').addClass('visible');
		$('.nav-inner div.nav-menu ul.nav li a').click(function () {
			$(".nav-menu").slideToggle("2000")
		});
	}
	else{
		if (jQuery.browser.mozilla) {}
		else if (jQuery.browser.safari) {}
		else{
			// Select to link
			$('a.ex-link').click(function(){
				var Exlink = this.getAttribute('href');		
				// Fade In Page Loader
		  		$('#pageloader').fadeIn(350, function(){		  
				    document.location.href = Exlink;
			  	});
			  return false;
			});
		}

		//ANIMATED ITEMS
	    $('.animated').appear(function() {
		    var elem = $(this);
		    var animation = elem.data('animation');
		    if ( !elem.hasClass('visible') ) {
		       	var animationDelay = elem.data('animation-delay');
		        if ( animationDelay ) {
		            setTimeout(function(){
		                elem.addClass( animation + " visible" );
		            }, animationDelay);
		        } else {
		            elem.addClass( animation + " visible" );
		        }
		    }
		});

	}

}); 


/* ==============================================
CHECK FOR INTERNET EXPLORER
=============================================== */

	$(window).load(function(){
		//Check if browser is IE or not
        if (navigator.userAgent.search("MSIE") >= 0) {
            $('br').addClass('iebr');
           	var logoH = $('.logo img').outerHeight();
           	$('.logo').css({"margin-top": - logoH / 2 + 'px'});
        } else{}
	});
