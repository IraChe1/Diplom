// класс статуса поиска
export class Searching {
    constructor(section) {
        this.section = section;
    }

    show() {
        this.section.classList.remove('news-search_invis');
    }

    hide() {
        this.section.classList.add('news-search_invis');
    }
}