export const api = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const requestConfig = (method, data, token = null) => {
	const config = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	};

	if (data) {
		config.body = JSON.stringify(data);
	}

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
};
