// Owl carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1.3
        },
        600:{
            items:2.3
        },
        1024:{
            items:3.2
        }
    }
})

// responsive
// var owl = $('.owl-carousel');
// $('.owl-carousel').owlCarousel({
    // loop:true,
    // margin:10,
    // responsiveClass:true,
	// pagination:false,
	// autoplay:false,
    // responsive:{
        // 0:{
            // items:1,
            // nav:true
        // },
        // 600:{
            // items:3,
            // nav:true
        // },
        // 960:{
            // items:5
        // },		
        // 1000:{
            // items:5,
            // nav:true,
            // loop:true
        // }
    // }
// });

//Navbar Drop down 

$(function(){
	var navbar = $('.navbar');
	var navlink = $('.nav-link');
	var navbarBrand = $('.navbar-brand');
 
 
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
			navlink.removeClass('nav-link-scroll');
			navbarBrand.removeClass('navbar-brand-scroll');
 
			
		} else {
			navbar.addClass('navbar-scroll');
			navlink.addClass('nav-link-scroll');
			navbarBrand.addClass('navbar-brand-scroll');
 
		}
	});
});

// Scrollable Navbar to Whole body

	$(document).ready(function(){
	  // Add scrollspy to <body>
	  $('body').scrollspy({target: ".navbar", offset: 50});   

	  // Add smooth scrolling on all links inside the navbar
	  $("#collapsibleNavbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		}  // End if
	  });
	});

