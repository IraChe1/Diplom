import "./about.css";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const slider = document.querySelector('.swiper-container');
const swiper = new Swiper(slider, {
    slidesPerView: 3,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});