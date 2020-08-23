export class StatList {
    constructor(container, title, renderStatCard, getData) {
        this.container = container;
        this.title = title; // месяц
        this.renderStatCard = renderStatCard;
        this.getData = getData;
    }

    create() {
        const articles = this.getData('articles');

        const totalResults = articles.length; //28

        const dataToRender = {};
        articles.forEach(item => {
            const dateAsString = item.publishedAt.split('T')[0];
            if (dataToRender[dateAsString]) {
                dataToRender[dateAsString] = dataToRender[dateAsString] + 1;
            } else {
                dataToRender[dateAsString] = 1;
            }
        });

        const dataAsArray = Object.entries(dataToRender);

        dataAsArray.sort((a, b) => {
            if (a[0] < b[0])
                return 1;
            if (a[0] > b[0])
                return -1;
            return 0;
        });

        const fragment = document.createDocumentFragment();
        dataAsArray.forEach(item => fragment.appendChild(this.renderStatCard(item, totalResults)));;
        this.container.appendChild(fragment);
        const getMonth = (date, format) => {
            return format[date.getMonth()];
        };
        const monthsNominate = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

        if (articles.length) {
            const currentDate = new Date();
            this.title.textContent = `дата (${getMonth(currentDate, monthsNominate)})`;
        } else {
            return [];
        }
    }
}