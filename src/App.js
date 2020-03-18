import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from './pages/Sobre/Sobre';
import Livros from './pages/Livros/Livros';
import Autores from './pages/Autores/Autores';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/sobre' component={Sobre} />
				<Route path='/livros' component={Livros} />
				<Route path='/autores' component={Autores} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
