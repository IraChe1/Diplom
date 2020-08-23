// класс newsapi
export class NewsApi {
    constructor(newsApiUrl) {
            this.url = newsApiUrl;
        }
        // получить новости
    getNews(searchValue) {
        const apiKey = 'ed6abaedbb3d4a13a77604e947236efb';
        const url = this.url + '?q=' + searchValue + '&language=ru' + '&from=' + '2020-08-16' + '&apiKey=' + apiKey + '&pageSize=100';
        return fetch(url)
            .then(res => {
                if (res.ok) return res.json()
                return Promise.reject(`Ошибка: ${res.status}`)
            });
    }
}