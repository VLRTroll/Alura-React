import validator from 'validator';
import { Validation } from './Validator';

const FormConstraints: Validation = {
	nome: [
		{
			invalidMessage: 'O campo nome deve ser preenchido!',
			validation: value => !validator.isEmpty(value)
		}
	],
	livro: [
		{
			invalidMessage: 'O campo livro deve ser preenchido!',
			validation: value => !validator.isEmpty(value)
		}
	],
	preco: [
		{
			invalidMessage: 'O campo preço deve ser preenchido!',
			validation: value => !validator.isEmpty(value)
		},
		{
			invalidMessage: 'O preço deve ser um valor entre 0.00 e 10000.00!',
			validation: value => value >= 0 && value <= 100000
		}
	]
};
export default FormConstraints;
