$(document).ready(function () {
	"use strict";
	
	//Mean Menu
	jQuery('header .main-menu').meanmenu({
		meanScreenWidth: "767"
	});

	//Sticky Nav
	$(".edu-navbar").sticky({ topSpacing: 0 });
	
	//Scroll Spy		
		$('body').scrollspy({ target: '.edu-navbar' });
		 $(window).on('load', function(e){
		  $('#status').fadeOut();
		  $('#preloader').delay(350).fadeOut('slow');
		  $('body').delay(350).css({'overflow':'visible'});
		})
		 $('body').scrollspy({ target: ".edu-navbar'" })
	
	// Contact Form
	
	$('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(750,function() {
		$('#message').hide();
 		$('#submit')
			.after('')
			.attr('disabled','disabled');
		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');
			}
		);
		});
		return false;
	});
	
	//Video Popup	
		$('.video-iframe').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'https://www.youtube.com/embed/JVcSuvkcHDA?start=221&autoplay=1'
					}
				},
				srcAction: 'iframe_src'
			}
		});	

   //Popup
		$('.gallery-single-item').magnificPopup({
			delegate: 'li .port-view',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	//jQuery Counter	
	
	$('.counter').counterUp({
			delay: 10,
			time:1000
		});			
	
 	// ************ Search On Click
        $(".search_btn").on("click", function(event) {
            event.preventDefault();
            $("#search").addClass("open");
            $("#search > form > input[type='search']").focus();
        });

        $("#search, #search button.close").on("click keyup", function(event) {
            if (event.target == this || event.target.className == "close" || event.keyCode == 27) {
                $(this).removeClass("open");
            }
        });

	// Slick slider	index version
	
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true
	});
	$('.slider-nav').slick({
		slidesToShow:3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		height:true,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		variableWidth: false,
		arrows: true

	});
	

	$("#faculty_read_more_id").click(function(){
	   
		$(this).text($(this).text() == 'Read more...' ? 'Hide' : 'Read more...');
		$("#faculty_slider_01_id").toggle();
	});

    $("#faculty_read_more_id2").click(function(){
        
		$(this).text($(this).text() == 'Read more...' ? 'Hide' : 'Read more...');
		$("#faculty_slider_01_id2").toggle();
	});
	
	/*

	$('#faculty_slider').attr("width", "100%")

	$('#faculty_slider').owlCarousel({
		items : 4,
		loop:true,
    margin:10,
		nav:true,
		lazyLoad : true,
		autoWidth:true,
		autoplayHoverPause: false,
		autoPlay:true,
		autoplayTimeout:500,
    responsive:{
        				
				0: {
					items: 1,
					nav: false
				},
				480: {
					items: 1,
					nav: false
				},
				768: {
					items: 2,
					nav: true
				},
				992: {
					items: 4,
					nav: true,
					loop: false
				}

    }
})
*/

	$("#parent-say-02").owlCarousel({
		items :3,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		autoplayHoverPause: false,
		autoPlay:true,
		autoplayTimeout:1000,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 2,
				nav: true,
				loop: false
			}
		}
    });
	

	// custom ravi
	// Parent Say's index-02 
	$("#parent-say-02-01").owlCarousel({
		items :6,
		lazyLoad : true,
		loop:true,
		autoPlay:true,
		autoplayHoverPause:false,
		autoplayTimeout:1000,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 2,
				nav: true,
				loop: true
			}
		}
    });


	// Courses-carousel index-03 
	

	$("#courses-carousel-03").owlCarousel({
		items :4,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	// Courses-carousel index-04 	
	$("#courses-carousel-04").owlCarousel({
		items :1,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });

	// Blog-carousel index-03 
	$("#bolg-carousel-03").owlCarousel({
		items :3,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });

	// Partners carousel index-03 
	$("#partners-carousel-03").owlCarousel({
        items : 6,
        lazyLoad : true,
        navigation : false,
        navigationText : ["", ""],
        pagination: false,
        responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 2,
				nav: false
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
				loop: false
			}
		},
        afterAction: function (el) {
            //remove class active
            this
            .$owlItems
            .removeClass('active')

            //add class active
            this
            .$owlItems //owl internal $ object containing items
            .eq(this.currentItem + 3)
            .addClass('active')    
        } 
	});
	// Success carousel index-04 	
	$("#success-carousel-04").owlCarousel({
		items :1,
		lazyLoad : true,
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :false,
		pagination: true,
		responsive: false
    });	
	// Bolg carousel index-04 	
	$("#bolg-carousel-01").owlCarousel({
		items :1,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive:false
    });

	$("#single-carousel-03").owlCarousel({
		items :4,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    }); 

		
		
});
