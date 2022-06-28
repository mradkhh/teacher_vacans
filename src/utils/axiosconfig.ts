import axios, { AxiosResponse } from 'axios'

interface IArgs {
  phone: string,
  password: string
}
interface PostArgs {
  phone: string,
  password: string,
  confirm_password: string
}
interface IdArgs {
  id: string
}

const instance = axios.create({
  baseURL: 'https://api.vacancy.exadot.io/api/v1/',
});

const responseBody = (response: AxiosResponse) => response.data;

const typeRequest = {
  get: (url: string) => instance.get<IArgs>(url).then(responseBody),
  post: (url:string, body: IArgs) => instance.post<IArgs>(url).then(responseBody),
  delete: (url:string) => instance.delete<IArgs>(url).then(responseBody)
}

 const Requests = {
  get : () : Promise<IArgs[]> => typeRequest.get('category/'),
  getId : (id : string) : Promise<IdArgs> => typeRequest.get(`/books/${id}`),
  post : (book : PostArgs) : Promise<PostArgs> => typeRequest.post(`register/`, book),
  delete : (id : string) : Promise<IdArgs> => typeRequest.delete(`/books/${id}`)
}

export default Requests