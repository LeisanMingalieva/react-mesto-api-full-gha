const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../helpers/errors/Unauthorized');
const NotFoundError = require('../helpers/errors/NotFoundError');
// const { SECRET_KEY } = require('../constants/constants');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError('Ошибка авторизации'));
    return;
  }
  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(token, process.env.NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new NotFoundError('Ошибка авторизации'));
    return;
  }
  req.user = payload;
  next();
};

module.exports = { auth };
