import React, { useRef } from 'react';
import Validator from '../validations/Validator';
import FormConstraints from '../validations/FormValidator';

export default function Formulario({ onsubmit }) {
	const input_nome = useRef('');
	const input_livro = useRef('');
	const input_preco = useRef('');

	const resetForm = () => {
		input_nome.current.value = '';
		input_livro.current.value = '';
		input_preco.current.value = '';
		input_nome.current.focus();
	};

	const handleSubmit = event => {
		event.preventDefault();

		const state = {
			nome: input_nome.current.value,
			livro: input_livro.current.value,
			preco: input_preco.current.value
		};

		if (Validator.isValid(state, FormConstraints)) {
			onsubmit(state);
			resetForm();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='row'>
				<div className='input-field col s4'>
					<label className='input-field' htmlFor='nome'>
						Nome
					</label>
					<input
						ref={input_nome}
						type='text'
						name='nome'
						className='validate'
					/>
				</div>

				<div className='input-field col s4'>
					<label className='input-field' htmlFor='livro'>
						Livro
					</label>
					<input
						ref={input_livro}
						type='text'
						name='livro'
						className='validate'
					/>
				</div>

				<div className='input-field col s4'>
					<label className='input-field' htmlFor='preco'>
						Preço
					</label>
					<input
						ref={input_preco}
						type='number'
						name='preco'
						className='validate'
					/>
				</div>
			</div>

			<button className='waves-effect waves-light btn blue lighten-2'>
				Salvar
			</button>
		</form>
	);
}
