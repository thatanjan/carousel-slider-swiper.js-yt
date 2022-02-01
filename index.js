new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	keyboard: {
		enabled: true,
	},
	mousewheel: true,
	

	// creative effect
	// effect: 'creative',
	// creativeEffect: {
	// 	prev: {
	// 		shadow: true,
	// 		translate: [0, 0, -400],
	// 	},
	// 	next: {
	// 		translate: ['100%', 0, 0],
	// 	},
	// },


	// effect: 'cube',

	// effect: 'cards'

	// effect: 'coverflow',
})
