const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id) => {
	return jwt.sign({ id }, jwtSecret, { expiresIn: '7d' });
};

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const existingCustomer = await Customer.query().findOne({ email });

	if (existingCustomer) {
		res.status(422).json({ errors: ['Por favor, utilize outro e-mail.'] });
		return;
	}

	const salt = await bcrypt.genSalt();
	const passwordHash = await bcrypt.hash(password, salt);

	const newCustomer = await Customer.query().insert({
		name,
		email,
		password: passwordHash,
	});

	if (!newCustomer) {
		res
			.status(422)
			.json({ errors: ['Houve um erro, por favor tente mais tarde!'] });
		return;
	}

	res.status(201).json({
		id: newCustomer.id,
		token: generateToken(newCustomer.id),
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;

	const customer = await Customer.query().findOne({ email });

	if (!customer) {
		res.status(404).json({ errors: ['Usuário não encontrado'] });
		return;
	}

	if (!(await bcrypt.compare(password, customer.password))) {
		res.status(422).json({ errors: ['Senha incorreta'] });
		return;
	}

	res.status(200).json({
		id: customer.id,
		profileImage: customer.profileImage,
		token: generateToken(customer.id),
	});
};

const getCurrentCustomer = async (req, res) => {
	const customer = req.customer;
	res.status(200).json(customer);
};

const update = async (req, res) => {
	const { name, password } = req.body;
	let profileImage = null;

	if (req.file) {
		profileImage = req.file.filename;
	}

	const reqCustomer = req.customer;

	let updatedFields = { name };
	if (password) {
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);
		updatedFields.password = passwordHash;
	}
	if (profileImage) {
		updatedFields.profileImage = profileImage;
	}

	const customer = await Customer.query().patchAndFetchById(
		reqCustomer.id,
		updatedFields
	);

	if (!customer) {
		res.status(404).json({ errors: ['Usuário não encontrado'] });
		return;
	}

	res.status(200).json(customer);
};

const getCustomerById = async (req, res) => {
	const { id } = req.params;

	try {
		const customer = await Customer.query()
			.findById(id)
			.select('id', 'name', 'email', 'profileImage');

		if (!customer) {
			res.status(404).json({ errors: ['Usuário não encontrado'] });
			return;
		}

		res.status(200).json(customer);
	} catch (error) {
		res.status(500).json({ errors: ['Erro ao buscar usuário.'] });
	}
};

module.exports = {
	register,
	login,
	getCurrentCustomer,
	update,
	getCustomerById,
};
