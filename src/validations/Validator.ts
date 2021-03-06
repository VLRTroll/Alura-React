import PopUp from '../components/PopUp';

type ValidationFields = {
	invalidMessage: string;
	validation: (value: any) => boolean;
};

export type Validation = { [prop: string]: ValidationFields[] };

export default class Validator {
	static isValid(state: any, constraints: Validation) {
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
