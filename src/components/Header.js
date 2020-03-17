import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<nav>
			<div className='nav-wrapper blue lighten-2'>
				<Link to='/' className='brand-logo'>
					Logo
				</Link>
				<ul className='right'>
					<li>
						<Link to='/Autores'>Autores</Link>
					</li>
					<li>
						<Link to='/Livros'>Livros</Link>
					</li>
					<li>
						<Link to='/Sobre'>Sobre</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
