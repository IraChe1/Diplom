// класс формы поиска
export class Form {
    constructor(form, input) {
        this.form = form;
        this.input = this.form.querySelector('.search__field');
    }

    setValue(value) {
        if (value) {
            this.input.setAttribute('value', value);
        }
    }

}