import "./analytics.css";
import { LocalStorage } from '../js/modules/LocalStorage';
import { YourQuestion } from '../js/modules/YourQuestion';
import { StatCard } from '../js/modules/StatCard';
import { StatList } from '../js/modules/StatList';

const yourQuestionElem = document.querySelector('.note');
const analyticsListElem = document.querySelector('.analytics__row');
const statTemplate = document.querySelector('#analytics-card-template').content.querySelector('.line');
const currentMonth = document.querySelector('#month');
const dataStorage = new LocalStorage();
const yourQuestion = new YourQuestion(yourQuestionElem, getNews);


function getNews() {
    return {
        searchValue: dataStorage.getData('searchValue')[0].toUpperCase() + dataStorage.getData('searchValue').slice(1),
        totalResults: dataStorage.getData('totalResults'),
        articles: dataStorage.getData('articles').length
    }
}

function renderStatCard(item, totalResults) {
    return new StatCard(item, totalResults, statTemplate).create();
};


const statList = new StatList(analyticsListElem, currentMonth, renderStatCard, dataStorage.getData);

function init() {
    yourQuestion.create()
    statList.create();
}

init();