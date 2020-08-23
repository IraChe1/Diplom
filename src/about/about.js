import "./about.css";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { GitHubApi } from '../js/modules/GitHubApi';
import { GitHubCard } from '../js/modules/GitHubCard';
import { SwiperList } from '../js/modules/SwiperList';

// конфиг гитхаба
const gitHubConfig = {
    url: 'https://api.github.com/repos/IraChe1/Diplom/commits',
    headers: {
        authorization: 'ce41641e54e59a3784726f96b33470318ee165a0',
        'Content-Type': 'application/json'
    },
};

// шаблон карточки
const commitTemplate = document.querySelector('#commit-template').content.querySelector('.swiper-slide');

// контейнер с карточками
const commitsList = document.querySelector('.swiper-wrapper');

// экземпляр класса гитхаб апи
const gitHubApi = new GitHubApi(gitHubConfig);

// запрос коммитов и их рендер в карточки
gitHubApi.getCommits().then(res => {
        const cards = res.map(item => {
            const card = new GitHubCard(item.commit.author.name, item.commit.author.email, item.commit.author.date, item.commit.message, item.author.avatar_url, item.html_url, commitTemplate);
            return card.create();
        });
        const swiper = new SwiperList(commitsList, cards);
        swiper.render();
        swiperStart();
    })
    .catch(error => console.log(error));


function swiperStart() {
    Swiper.use([Navigation, Pagination]);

    const slider = document.querySelector('.swiper-container');
    new Swiper(slider, {
        slidesPerView: 'auto',
        // slidesPerGroup: 2,
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
}