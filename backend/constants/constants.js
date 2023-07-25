const OK_CODE = 200;
const CREATED_CODE = 201;
const BAD_REQUEST_ERROR_CODE = 400;
const UNAUTHORIZE_ERROR_CODE = 401;
const NOT_FOUND_ERROR_CODE = 404;
const INTERNAL_SERVER_ERROR_CODE = 500;

const REG_EXP = /https?:\/\/(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/;
const SECRET_KEY = 'secret-key';
const allowedCors = [
  'http://api.mesto-andriyanova.nomoredomains.xyz',
  'https://api.mesto-andriyanova.nomoredomains.xyz',
  'http://mesto-andriyanova.nomoredomains.xyz',
  'https://mesto-andriyanova.nomoredomains.xyz',
  'http://localhost:3000',
];
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  INTERNAL_SERVER_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  BAD_REQUEST_ERROR_CODE,
  CREATED_CODE,
  REG_EXP,
  UNAUTHORIZE_ERROR_CODE,
  OK_CODE,
  SECRET_KEY,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
