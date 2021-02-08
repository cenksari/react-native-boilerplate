import axios from 'axios';
import base64 from 'react-native-base64';
import { auth, apiURLs } from '../config/Config';

const createAuth = base64.encode(`${auth.username}:${auth.password}`);

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

/**
 * Get json value from server.
 *
 * @param {object} parameters - Request parameters
 */
const getResponse = async (parameters) => {
  let errorData = {};
  let successData = {};

  // If parameters is null
  if (parameters === null || parameters === undefined || !parameters.method) {
    errorData = {
      status: 0,
      title: 'Parameters or method not found.',
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

  headers = {
    ...headers,
    Authorization: `Basic ${createAuth}`,
    'Accept-Language': parameters.language,
  };

  // Made request
  try {
    let response = {};

    if (parameters.method === 'GET') {
      response = await axios.get(buildedUrl, { headers });
    } else {
      response = await axios.post(buildedUrl, parameters.data, { headers });
    }

    // Success request
    if (response.status === 200) {
      successData = {
        status: response.status,
        data: response.data,
      };

      return successData;
    } else {
      // Request failed
      errorData = {
        status: response.status,
        title: response.data.title || response.statusText,
      };

      return errorData;
    }
  } catch (error) {
    // The request was made and the server responded with a status code
    if (error.response) {
      if (error.response.status === 404) {
        errorData = {
          status: error.response.status,
          title: error.response.data.title || error.response.data || 'Resource not found!',
        };

        return errorData;
      } else {
        errorData = {
          status: error.response.status,
          title: error.response.data.title || error.response.data,
        };

        return errorData;
      }
    } else if (error.request) {
      // The request was made but no response was received
      errorData = {
        status: 0,
        title: `No response received. Maybe DNS not resolved or server not found. ${parameters.url})`,
      };

      return errorData;
    } else {
      // Something happened in setting up the request that triggered an Error
      errorData = {
        status: 0,
        title: error.message,
      };

      return errorData;
    }
  }
};

const Request = {
  getResponse,
};

export default Request;
