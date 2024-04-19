// import header from './modules/header.js';
// header();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
	spaceBetween: 16,
    parallax: true,
    speed: 1000,
    keyboard: {
      enabled: true,
    },
	

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		420: {
			slidesPerView: 1.8,
			spaceBetween: 24,
		},
		576: {
			slidesPerView: 2.2,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24,
		}
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});