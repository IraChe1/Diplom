export class YourQuestion {
    constructor(element, getData) {
        this.element = element;
        this.searchValue = this.element.querySelector('.note__span_search-value');
        this.mentionsInText = this.element.querySelector('.note__span_in-text');
        this.mentionsInTitle = this.element.querySelector('.note__span_in-title');
        this.getData = getData;
    }

    create() {
        const data = this.getData();
        this.searchValue.textContent = data.searchValue;
        this.mentionsInText.textContent = data.totalResults;
        this.mentionsInTitle.textContent = data.articles;
    }
}