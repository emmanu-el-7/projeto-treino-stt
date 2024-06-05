import React, { useState } from 'react';
import {
	AppBar,
	Avatar,
	Toolbar,
	IconButton,
	InputBase,
	Typography,
	Badge,
	Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';

const Header = ({ toggleActive }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<AppBar position='static' className='header-container'>
			<Toolbar className='toolbar'>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='menu'
					onClick={toggleActive}
				>
					<MenuIcon />
				</IconButton>
				<div>
					<IconButton type='button' color='inherit'>
						<SearchIcon />
					</IconButton>
					<InputBase
						className='search-placeholder'
						placeholder='Pesquisar'
						value={searchTerm}
						onChange={handleSearchChange}
						inputProps={{ 'aria-label': 'search' }}
					/>
				</div>
				<div className='user-area'>
					<IconButton color='inherit'>
						<FavoriteBorderIcon />
					</IconButton>
					<Badge badgeContent={0} color='secondary'>
						<ShoppingCartIcon />
					</Badge>
					<Avatar
						alt='User Name'
						src='https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1gqfbei6sq37q1n1vcp1dvejr910.png'
					/>
					<Typography variant='body2' className='username'>
						Username
					</Typography>
					<Button variant='outlined' className='viewprofileBtn'>
						View Profile
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
