import "./index.css";
import { LocalStorage } from '../js/modules/LocalStorage';
import { NewsApi } from '../js/modules/NewsApi';
import { NewsCard } from '../js/modules/NewsCard';
import { CardContainer } from '../js/modules/CardConteiner';
import { Searching } from '../js/modules/Searching';
import { Form } from '../js/modules/Form';
import { InputValidator } from '../js/modules/InputValidator';


const searchField = document.querySelector('.search');
const newsSection = document.querySelector('#search-result');
const errorMessage = 'Нужно ввести слово для поиска';
const searchButton = searchField.querySelector('.button_search');
const moreButton = document.querySelector('.button_show');
const preloaderElem = document.querySelector('#preloader');
const nothingFoundElem = document.querySelector('#nothing-found');
const pageNotFoundElem = document.querySelector('#page-not-found');
const input = document.querySelector('.search__field');

// конфиг newsapi
const newsApiUrl = 'https://nomoreparties.co/news/v2/everything';

// шаблон карточки
const newsCardTemplate = document.querySelector('#news-card-template').content.querySelector('.card');

// контейнер с карточками
const newsCardContainer = document.querySelector('.news-cards');

// экземпляр класса newsapi
const newsApi = new NewsApi(newsApiUrl);

// экземпляр класса контейнера с карточками
const cardContainer = new CardContainer(newsCardContainer, moreButton, renderCard, getCards);

const preloader = new Searching(preloaderElem);
const sorryBlock = new Searching(nothingFoundElem);
const errorBlock = new Searching(pageNotFoundElem);
const searchForm = new Form(searchField, input);
const inputValidator = new InputValidator(searchField, searchButton, errorMessage);
const dataStorage = new LocalStorage();

searchField.addEventListener('submit', (e) => {
    e.preventDefault();
    cardContainer.clear();
    cardContainer.hide();
    preloader.show();
    errorBlock.hide();
    sorryBlock.hide();
    inputValidator.blockButton();
    const searchWord = document.querySelector('.search__field').value;
    newsApi.getNews(searchWord).then(res => {

            dataStorage.setData('totalResults', res.totalResults);
            dataStorage.setData('articles', res.articles);
            dataStorage.setData('searchValue', searchWord);

            preloader.hide();
            newsSection.classList.remove('search-result_invis');
            if (res.totalResults === 0) {
                sorryBlock.show();
            };
            const cards = dataStorage.getData('articles');
            if (cards.length !== 0) {
                cardContainer.setData();
                cardContainer.show();
                cardContainer.renderSet();
            } else {
                cardContainer.hide();
            };
        })
        .catch(error => {
            console.log('err', error);
            preloader.hide();
            errorBlock.show();
        });
});

function getCards() {
    return dataStorage.getData('articles');
}


function renderCard(item) {
    return new NewsCard(item.title, item.publishedAt, item.description, item.urlToImage, item.url, item.source.name, newsCardTemplate).create();
};

// показать первые три карточки с данными из хранилища
function showNews() {
    const cards = dataStorage.getData('articles');

    if (Array.isArray(cards) && cards.length !== 0) {
        cardContainer.setData();
        cardContainer.show();
        cardContainer.renderSet();
    } else {
        cardContainer.hide();
    }
}

function init() {
    showNews();
    searchForm.setValue(dataStorage.getData('searchValue'));
}

init();