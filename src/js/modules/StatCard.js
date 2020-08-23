export class StatCard {
    constructor(item, total, statTemplate) {
        this.date = item[0]; // дата публикации
        this.num = item[1]; // число упоминаний в заголовках
        this.total = total; // общее количество статей
        this.statTemplate = statTemplate; // шаблон карточки
    }

    template() {
        const getWeekDay = (date, format) => {
            return format[date.getDay()];
        };
        const daysCrop = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'cб'];
        const statCard = this.statTemplate.cloneNode(true);
        const currentDate = new Date(this.date);
        statCard.querySelector('.line__day').textContent = `${currentDate.getDate().toString()}, ${getWeekDay(currentDate, daysCrop)}`;
        statCard.querySelector('.line__quan').style.width = (this.num / this.total * 100) + '%';
        statCard.querySelector('.line__perc').textContent = this.num;

        this.card = statCard;

        return statCard;
    }

    create() {
        this.template();
        return this.card;
    }
}