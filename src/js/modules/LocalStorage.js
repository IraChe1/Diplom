// класс хранилища данных
export class LocalStorage {

    getData(key) {
        return JSON.parse(localStorage.getItem(key));
    };

    setData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

}