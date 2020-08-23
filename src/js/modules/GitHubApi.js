// класс гитхаб апи
export class GitHubApi {
    constructor(config) {
            this.url = config.url;
            this.headers = config.headers;
        }
        // получить коммиты
    getCommits() {
        return fetch(this.url, {
                headers: this.headers
            })
            .then(res => {
                if (res.ok) return res.json()
                return Promise.reject(`Ошибка: ${res.status}`)
            });
    }
}