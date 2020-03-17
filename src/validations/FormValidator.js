import validator from 'validator';

export default class FormValidator {
	constructor(validation) {
		this.validation = validation;
	}

	validate(state) {
		const value = state[this.validation.field];
		const method = validator[`${this.validation.method}`];
		return !method(value, [], state);
	}
}
