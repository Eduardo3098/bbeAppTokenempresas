const STRING_NORMALIZED_FORM_DECOMPOSED = 'NFD';
const STRING_EMPTY = '';

const REGEX_STRING_START = '^';
const REGEX_STRING_END = '$';
const REGEX_NON_DIGIT = /\D/g;
const REGEX_SPACES = /\s/g;
const REGEX_SPECIAL_CHAR = /[^\d\s\w]/g;
const REGEX_UNICODE_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;

const isValid = (value) => value !== null && value !== undefined;

const areValid = (...values) => values.every(isValid);

const isEmpty = (value) => !isValid(value) || !value.length;

const isEmptyString = (value) =>
  !isValid(value) || typeof value !== 'string' || !value.trim().length;

const enforceNumericString = (value) =>
  isEmptyString(value)
    ? undefined
    : value.replace(REGEX_NON_DIGIT, STRING_EMPTY);

const enforceNoSpacesString = (value) =>
  isEmptyString(value) ? undefined : value.replace(REGEX_SPACES, STRING_EMPTY);

const enforceNoSpecialCharsString = (value) =>
  isEmptyString(value)
    ? undefined
    : value.replace(REGEX_SPECIAL_CHAR, STRING_EMPTY);

const isFunction = (value) => isValid(value) && typeof value === 'function';

const isString = (value) => isValid(value) && typeof value === 'string';

const isObject = (value) => isValid(value) && typeof value === 'object';

const isEmptyObject = (value) =>
  Object.entries(value).length === 0 && value.constructor === Object;

const isArray = (value) => isObject(value) && Array.isArray(value);

const normalizeString = (string) =>
  isEmptyString(string)
    ? string
    : string
        .normalize(STRING_NORMALIZED_FORM_DECOMPOSED)
        .replace(REGEX_UNICODE_DIACRITICAL_MARKS, STRING_EMPTY);

const normalizeRegex = (regexString) => {
  if (isEmptyString(regexString)) {
    return null;
  }

  let safeRegex = regexString.trim();
  if (!safeRegex.startsWith(REGEX_STRING_START)) {
    safeRegex = `${REGEX_STRING_START}${safeRegex}`;
  }
  if (!safeRegex.endsWith(REGEX_STRING_END)) {
    safeRegex = `${safeRegex}${REGEX_STRING_END}`;
  }

  return safeRegex;
};

const noop = () => null;

const getAccountText = (account) => {
  if (isValid(account)) {
    return isEmptyString(account.alias) ? account.maskAccount : account.alias;
  }
  return STRING_EMPTY;
};

export {
  isValid,
  areValid,
  isEmpty,
  isEmptyString,
  isString,
  isObject,
  isEmptyObject,
  isArray,
  isFunction,
  enforceNoSpacesString,
  enforceNumericString,
  enforceNoSpecialCharsString,
  normalizeString,
  normalizeRegex,
  noop,
  getAccountText,
};
