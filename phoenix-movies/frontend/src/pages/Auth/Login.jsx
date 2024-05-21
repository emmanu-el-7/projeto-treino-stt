import './Auth.css';

import { NavLink } from 'react-router-dom';
import Message from '../../components/Message';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../slices/authSlice';

const Login = () => {
	const [customer, setcustomer] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();

	const { loading, error } = useSelector((state) => state.auth);

	const handleChange = (e) => {
		setcustomer({
			...customer,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(customer);

		dispatch(login(customer));
	};

	useEffect(() => {
		dispatch(reset());
	}, [dispatch]);

	return (
		<div id='login'>
			<h2>InstaUFSC</h2>
			<p className='subtitle'>Faça o login para ver as novidades.</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='E-mail'
					name='email'
					onChange={handleChange}
					value={customer.email}
				/>
				<input
					type='password'
					placeholder='Senha'
					name='password'
					onChange={handleChange}
					value={customer.password}
				/>
				{!loading && <input type='submit' value='Entrar' />}
				{loading && <input type='submit' value='Aguarde...' disabled />}
				{error && <Message msg={error} type='error' />}
				<p>
					Não possui cadastro? <NavLink to='/register'>Clique aqui</NavLink>
				</p>
			</form>
		</div>
	);
};

export default Login;
