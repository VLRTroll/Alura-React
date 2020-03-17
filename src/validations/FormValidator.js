import PopUp from '../components/PopUp';

export default class FormValidator {
	constructor(validation) {
		this.validation = validation;
	}

	validate(state) {
		const results = Object.entries(this.validation).map(([key, field]) => {
			const isValid = field.validation(state[key]);
			if (!isValid) PopUp.show(field.invalidMessage, false);

			return isValid;
		});

		return results.every(r => r);
	}
}
