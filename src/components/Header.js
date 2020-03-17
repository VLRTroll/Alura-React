import React from 'react';
import LinkWrapper from '../wrappers/LinkWrapper';

export default function Header() {
	return (
		<nav>
			<div className='nav-wrapper blue lighten-2'>
				<LinkWrapper activeStyle={{}} to='/' className='brand-logo'>
					Logo
				</LinkWrapper>
				<ul className='right'>
					<li>
						<LinkWrapper to='/Autores'>Autores</LinkWrapper>
					</li>
					<li>
						<LinkWrapper to='/Livros'>Livros</LinkWrapper>
					</li>
					<li>
						<LinkWrapper to='/Sobre'>Sobre</LinkWrapper>
					</li>
				</ul>
			</div>
		</nav>
	);
}
