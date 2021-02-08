/**
 * Evaluate alpha value.
 *
 * @param {string} value - String value
 */
const isAlpha = (value) => {
  const regex = /^[a-z]*$/;

  return regex.test(value);
};

/**
 * Evaluate numeric value.
 *
 * @param {string} value - String value
 */
const isNumeric = (value) => {
  const regex = /^[0-9]*$/;

  return regex.test(value);
};

/**
 * Evaluate alpha numeric value.
 *
 * @param {string} value - String value
 */
const isAlphaNumeric = (value) => {
  const regex = /^[a-zA-Z0-9]*$/;

  return regex.test(value);
};

/**
 * Evaluate email value.
 *
 * @param {string} value - String value
 */
const isEmailAddress = (value) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(value);
};

/**
 * Shuffle array.
 *
 * @param {array} value - array to be shuffled.
 */
const shuffleArray = (array) => {
  const newArr = array.slice();

  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }

  return newArr;
};

/**
 * Check value is not null, undefined or empty string.
 *
 * @param {object} value - Object value
 */
const isNullOrUndefined = (variable) => {
  if (variable === null || variable === undefined || variable === '') {
    return true;
  }

  return false;
};

/**
 * Convert api date to human readable format.
 *
 * @param {date} date - Data value
 */
const humanReadableDate = (date) => {
  const myDate = new Date(date);

  return `${myDate.getFullYear()}/${myDate.getMonth() + 1}/${myDate.getDate()}`;
};

/**
 * Convert milliseconds to human readable format.
 *
 * @param {integer} value - Integer value
 */
const humanReadableDuration = (milliseconds) => {
  let seconds = (milliseconds / 1000).toFixed(0);
  let minutes = Math.floor(seconds / 60);
  let hours = '';

  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    hours = hours >= 10 ? hours : `0${hours}`;

    minutes -= hours * 60;
    minutes = minutes >= 10 ? minutes : `0${minutes}`;
  }

  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : `0${seconds}`;

  minutes = minutes >= 10 ? minutes : `0${minutes}`;

  if (hours !== '') {
    return `${hours}:${minutes}:${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

const Functions = {
  isAlpha,
  isNumeric,
  shuffleArray,
  isAlphaNumeric,
  isEmailAddress,
  isNullOrUndefined,
  humanReadableDate,
  humanReadableDuration,
};

export default Functions;
