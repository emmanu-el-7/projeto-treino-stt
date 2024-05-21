import React, { useState } from 'react';
import './main.css';
import SideMenu from '../../components/Menu/SideMenu';
import Header from '../../components/Menu/Header';
import Home from './Home';

function Main() {
	const [active, setActive] = useState(false);

	const handleToggleActive = () => {
		setActive(!active);
	};

	return (
		<main>
			<SideMenu active={active} />
			<div className={`banner ${active ? 'active' : undefined}`}>
				<Header toggleActive={handleToggleActive} />
				<div className='container-fluid'>
					<Home />
				</div>
			</div>
		</main>
	);
}

export default Main;
