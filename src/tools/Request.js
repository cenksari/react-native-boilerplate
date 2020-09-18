import axios from 'axios';
import base64 from 'react-native-base64';
import { auth, apiURLs } from '../config/Config';

const createAuth = base64.encode(`${auth.username}:${auth.password}`);

/**
 * Get json value from server.
 *
 * @param {object} parameters - Request parameters
 */
const getJson = async (parameters) => {
  let errorData = {};
  let successData = {};

  // If parameters is null
  if (parameters === null || parameters === undefined) {
    errorData = {
      status: 0,
      title: 'Parameters not found.',
    };

    return errorData;
  }

  // Build url
  const baseURL = getBaseURL(parameters.apiType);

  const buildedUrl = `${baseURL}/${parameters.url}`;

  // Build headers for axios from parameters
  let headers = {};

  if (parameters.headers) {
    parameters.headers.map((header) => {
      headers[Object.keys(header)[0]] = Object.values(header)[0];
    });
  }

  headers = { ...headers, Authorization: `Basic ${createAuth}`, Language: 'en-GB' };

  // Made request
  try {
    const response = await axios.get(buildedUrl, { headers });

    // Success request
    if (response.status === 200) {
      successData = {
        status: response.status,
        data: response.data,
      };
    }
    // Request failed
    else {
      errorData = {
        status: response.status,
        title: response.data.title || response.statusText,
      };
    }
  } catch (error) {
    // The request was made and the server responded with a status code
    if (error.response) {
      errorData = {
        status: error.response.status,
        title: error.response.data.title || error.response.data,
      };
    }
    // The request was made but no response was received
    else if (error.request) {
      errorData = {
        status: 0,
        title: `No response received. Maybe DNS not resolved or server not found. ${parameters.url})`,
      };
    }
    // Something happened in setting up the request that triggered an Error
    else {
      errorData = {
        status: 0,
        title: error.message,
      };
    }
  }

  return errorData ? errorData : successData;
};

/**
 * Post json value to server.
 *
 * @param {object} parameters - Request parameters
 */
const postJson = async (parameters) => {
  let errorData = {};
  let successData = {};

  // If parameters is null
  if (parameters === null || parameters === undefined) {
    errorData = {
      status: 0,
      title: 'Parameters not found.',
    };

    return errorData;
  }

  // Build url
  const baseURL = getBaseURL(parameters.apiType);

  const buildedUrl = `${baseURL}/${parameters.url}`;

  // Build headers for axios from parameters
  let headers = {};

  if (parameters.headers) {
    parameters.headers.map((header) => {
      headers[Object.keys(header)[0]] = Object.values(header)[0];
    });
  }

  headers = { ...headers, Authorization: `Basic ${createAuth}`, Language: 'en-GB' };

  // Made request
  try {
    const response = await axios.post(buildedUrl, parameters.data, { headers });

    // Success request
    if (response.status === 200) {
      successData = {
        status: response.status,
        data: response.data,
      };
    }
    // Request failed
    else {
      errorData = {
        status: response.status,
        title: response.data.title || response.statusText,
      };
    }
  } catch (error) {
    // The request was made and the server responded with a status code
    if (error.response) {
      errorData = {
        status: error.response.status,
        title: error.response.data.title || error.response.data,
      };
    }
    // The request was made but no response was received
    else if (error.request) {
      errorData = {
        status: 0,
        title: `No response received. Maybe DNS not resolved or server not found. ${parameters.url})`,
      };
    }
    // Something happened in setting up the request that triggered an Error
    else {
      errorData = {
        status: 0,
        title: error.message,
      };
    }

    return errorData ? errorData : successData;
  }
};

/**
 * Build base URL from parameter type.
 *
 * @param {string} apiType - Api type
 */
const getBaseURL = (apiType) => {
  if (apiType) {
    return apiURLs[apiType];
  } else {
    return null;
  }
};

const Request = {
  getJson,
  postJson,
};

export default Request;
