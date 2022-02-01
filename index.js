const wrapper = document.querySelector('.swiper-wrapper')

// const glideSlidesEl = document.querySelector('.glide__slides');
//
for (let i = 0; i < 5; i++) {
	const slide = document.createElement('div')

	slide.classList.add('swiper-slide')

	const imageWrapper = document.createElement('div')
	imageWrapper.classList.add('image__wrapper')

	const img = document.createElement('img')
	img.src = `./images/${i + 1}.jpg`

	imageWrapper.appendChild(img)

	slide.appendChild(imageWrapper)
	wrapper.appendChild(slide)
}

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
