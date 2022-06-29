import axios, { AxiosResponse } from 'axios'
import API_URL from './api'
import { removeToken } from './tokenStorage';

axios.interceptors.request.use(
	config => config,
	e => Promise.reject(e),
);
axios.interceptors.response.use(
	response => response,
	e => {
		if (typeof e?.toJSON === 'function') {
			const error = e?.toJSON();
			if (error?.status === 401) {
				removeToken();
				window.location.href = '/';
			}
			if (error?.message === 'Network Error') {
				console.log("Enternet yo'q")
			}
			if (process.env.NODE_ENV === 'development') {
				console.log(error);
			}
		}
		return Promise.reject(e);
	},
);

interface IArgs {
	data: any
}
interface PostArgs {
  phone: string,
  password: string,
  confirm_password?: string
}
interface IdArgs {
  id: string
}

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: API_URL,
  headers: token ? { Authorization: `Bearer ${token}`,  } : {},
	timeout: 15000
});

const responseBody = (response: AxiosResponse) => response.data;


 const Axios = {
  get : (url: string) => instance.get<IArgs>(url).then(responseBody),
  post : (url: string, body: PostArgs) => instance.post<PostArgs>(url, body).then(responseBody),
  delete : (url : string) => instance.delete<IArgs>(url).then(responseBody)
}

export default Axios