const jwt = require('jsonwebtoken');
// const { SECRET_KEY } = require('../constants/constants');

const getJwtToken = (id) => jwt.sign({ id }, process.env.NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });

module.exports = { getJwtToken };
