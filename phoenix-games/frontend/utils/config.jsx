export const api = 'http://localhost:3001/api';

export const requestConfig = (method, data, token = null, product = null) => {
	let config;

	if (product) {
		config = {
			method,
			body: data,
			headers: {},
		};
	} else if (method === 'DELETE' || data === null) {
		config = {
			method,
			headers: {},
		};
	} else {
		config = {
			method,
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/JSON',
			},
		};
	}

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
};
