export class InputValidator {
    constructor(form, submitBtn, errorMessage) {
        this.form = form;
        this.submitBtn = submitBtn;
        this.errorMessage = errorMessage;
        this.setEventListeners();
        this.setSubmitButtonState();
    }

    checkInputValiditi(input) {
        input.setCustomValidity("");

        if (input.validity.valueMissing) {
            input.setCustomValidity(this.errorMessage);
        }

        this.setErrorText(input);
        this.setSubmitButtonState();
    }

    setErrorText(input) {
        const errorElem = input.closest('.search').querySelector('.error');
        errorElem.textContent = input.validationMessage;
    }

    setSubmitButtonState() {
        const state = this.form.checkValidity();
        if (state) {
            this.submitBtn.removeAttribute('disabled');
            this.submitBtn.classList.remove(`button_invalid`);
        } else {
            this.submitBtn.setAttribute('disabled', true);
            this.submitBtn.classList.add(`button_invalid`);
        }
    }

    blockButton() {
        this.submitBtn.setAttribute('disabled', true);
        this.submitBtn.classList.add(`button_invalid`);
    }

    setEventListeners() {
        this.form.addEventListener('input', (evt) => this.checkInputValiditi(evt.target));
    }

}