let rootUrl;
let apiUrl;
let serverUrl;
let ENV;

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  ENV = 'DEVELOPMENT';
  rootUrl = 'http://localhost:8000';
  apiUrl = 'http://localhost:3000/api/v1';
  serverUrl = 'http://localhost:3000';
}
// } else if (hostname === 'PRODUCT HOSTNAME HERE') {
  // ENV = 'DEVELOPMENT';
  // rootUrl = 'http://localhost:8000';
  // apiUrl = 'http://localhost:3000/api/v1';
  // serverUrl = 'http://localhost:3000';
// } 

export const ENVIRONMENT = `${ENV}`;
export const ROOT_URL = `${rootUrl}`;
export const API_URL = `${apiUrl}`;
export const SERVER_URL = `${serverUrl}`;
