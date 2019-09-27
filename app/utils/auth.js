import { MARKETING_URL } from './environment';

export function setToken(token) {
  return localStorage.setItem('token', token);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function headers() {
  return {
    headers: {
      Authorization: getToken(),
    },
  };
}

export function isUnauthorized(error) {
  if (error && error.response && error.response.status === 401) {
    return true;
  }

  return false;
}

export function signOut() {
  // clean local storage
  localStorage.removeItem('token');
  localStorage.removeItem('last_action_at');

  // redirect to marketing pages
  window.location = MARKETING_URL;
}

