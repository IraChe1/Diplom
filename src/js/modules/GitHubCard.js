// класс карточки с коммитом
export class GitHubCard {
    constructor(name, email, date, message, avatar, url, cardTemplate) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.message = message;
        this.avatar = avatar;
        this.url = url;
        this.cardTemplate = cardTemplate;
    }

    template() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        const getMonth = (date, format) => {
            return format[date.getMonth()];
        };
        const newCard = this.cardTemplate.cloneNode(true);
        const currentDate = new Date(this.date);
        newCard.querySelector('.commit__title').textContent = this.name;
        newCard.querySelector('.commit__subtitle').textContent = this.email;
        newCard.querySelector('.card__date').textContent = `${currentDate.getDate().toString()} ${getMonth(currentDate, months)}, ${currentDate.getFullYear()}`;
        newCard.querySelector('.card__paragraph').textContent = this.message;
        newCard.querySelector('.commit__avatar').setAttribute('src', this.avatar);
        newCard.querySelector('.card').setAttribute('href', this.url);

        this.card = newCard;

        return newCard;
    }

    create() {
        this.template();
        return this.card;
    }
}