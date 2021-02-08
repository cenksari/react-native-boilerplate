import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Get data from database.
 *
 * @param {string} key - Storage key
 */
const getData = async (key) => {
  try {
    const item = await AsyncStorage.getItem(key);

    return item !== null ? JSON.parse(item) : null;
  } catch (error) {
    return null;
  }
};

/**
 * Set data to database.
 *
 * @param {string} key - Storage key
 * @param {object} value - Storage value
 */
const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));

    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Remove data from database.
 *
 * @param {string} key - Storage key
 */
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);

    return true;
  } catch (error) {
    return false;
  }
};

const Database = {
  getData,
  setData,
  removeData,
};

export default Database;
