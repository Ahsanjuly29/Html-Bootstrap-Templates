// Basic
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1.3
        },
        600:{
            items:3.3
        },
        1000:{
            items:4
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