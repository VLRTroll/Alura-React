import PopUp from '../components/PopUp';

export default class Validator {
	static isValid(state, constraints) {
		const results = Object.entries(constraints).map(([field, rules]) =>
			rules.reduce((response, rule) => {
				const isValid = rule.validation(state[field]);
				if (!isValid) PopUp.show(rule.invalidMessage, false);

				return response && isValid;
			}, true)
		);

		return results.every(r => r);
	}
}
