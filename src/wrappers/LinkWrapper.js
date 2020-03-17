import React from 'react';
import { NavLink } from 'react-router-dom';

// import { Container } from './styles';

export default function LinkWrapper(props) {
	return <NavLink activeStyle={{ fontWeight: 'bold' }} {...props} />;
}
