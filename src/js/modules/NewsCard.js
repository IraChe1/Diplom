// класс карточки с новостью
export class NewsCard {
    constructor(title, date, message, img, url, src, cardTemplate) {
        this.title = title;
        this.date = date;
        this.message = message;
        this.img = img;
        this.url = url;
        this.src = src;
        this.cardTemplate = cardTemplate;
    }

    template() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        const getMonth = (date, format) => {
            return format[date.getMonth()];
        };
        const newsCard = this.cardTemplate.cloneNode(true);
        const currentDate = new Date(this.date);
        newsCard.querySelector('.card__title').textContent = this.title;
        newsCard.querySelector('.card__date').textContent = `${currentDate.getDate().toString()} ${getMonth(currentDate, months)}, ${currentDate.getFullYear()}`;
        newsCard.querySelector('.card__paragraph').textContent = this.message;
        newsCard.querySelector('.card__img').setAttribute('style', `background-image: url(${this.img})`);
        newsCard.setAttribute('href', this.url);
        newsCard.querySelector('.card__src').textContent = this.src;

        this.card = newsCard;
        return newsCard;
    }

    create() {
        this.template();
        return this.card;
    }
}