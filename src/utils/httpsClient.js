import axios, { delete as del, get, patch, post, put } from 'axios';
import { API_URL } from './api'

axios.interceptors.request.use(
	config => config,
	e => Promise.reject(e),
);
axios.interceptors.response.use(
	response => response,
	e => {
		if (typeof e?.toJSON === 'function') {
			const error = e?.toJSON();
			// if (error?.status === 401) {
			// 	removeToken();
			// 	window.location.href = '/';
			// }
			if (error?.message === 'Network Error') {
				console.log("enternet yo'q")
			}
			if (process.env.NODE_ENV === 'development') {
				console.log(error);
			}
		}
		return Promise.reject(e);
	},
);

const Axios = () => {
	const token = localStorage.getItem('token');
	const defaultOptions = {
		baseURL: API_URL,
		headers: token ? { Authorization: `Bearer ${token}` } : {},
		// params: { language: localStorage.getItem('i18nextLng') || 'uz', }
	};

	return {
		get: (url, options = {}) => get(url, { ...defaultOptions, ...options }),
		post: (url, data, options = {}) =>
			post(url, data, { ...defaultOptions, ...options }),
		put: (url, data, options = {}) =>
			put(url, data, { ...defaultOptions, ...options }),
		patch: (url, data, options = {}) =>
			patch(url, data, { ...defaultOptions, ...options }),
		delete: (url, options = {}) => del(url, { ...defaultOptions, ...options }),
	};
};
export default Axios;