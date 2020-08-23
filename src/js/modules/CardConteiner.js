// класс контейнера с карточками
export class CardContainer {
    constructor(container, moreButton, renderCard, getCards) {
        this.container = container;
        this.cards = [];
        this.getCards = getCards;
        this.page = 0;
        this.moreButton = moreButton;
        this._renderCard = renderCard;

        this.moreButton.addEventListener('click', () => {
            this.page++;
            this.renderSet()
        })
    }

    setData() {
        this.cards = this.getCards();
    }

    renderSet() {
        const cardsPerTime = 3;
        const cardsSet = this.cards.slice(this.page * cardsPerTime, (this.page + 1) * cardsPerTime);

        if (cardsSet.length) {
            const fragment = document.createDocumentFragment();

            cardsSet.forEach(item => {
                fragment.appendChild(this._renderCard(item));
            });

            this.container.appendChild(fragment);
        }

        if (cardsSet.length < cardsPerTime) {
            this.moreButton.classList.add('button_invis');
        } else {
            this.moreButton.classList.remove('button_invis');
        }
    }

    show() {
        document.querySelector('.search-result').classList.remove('search-result_invis');
    }

    hide() {
        document.querySelector('.search-result').classList.add('search-result_invis');
    }

    clear() {
        this.page = 0;
        this.container.textContent = '';
    };
}