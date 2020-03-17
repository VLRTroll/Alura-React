import PopUp from '../components/PopUp';

export default class FormValidator {
	constructor(validation) {
		this.validation = validation;
	}

	validate(state) {
		const results = Object.entries(this.validation).map(([field, rules]) =>
			rules.reduce((response, rule) => {
				const isValid = rule.validation(state[field]);
				if (!isValid) PopUp.show(rule.invalidMessage, false);

				return response && isValid;
			}, true)
		);

		return results.every(r => r);
	}
}
