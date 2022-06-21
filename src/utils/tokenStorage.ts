const TOKEN_KEY: string = 'token'

export const getStorage = (local: boolean) => {
    return local ? localStorage:sessionStorage;
}
export const getToken = () => {
    return ( localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) );
}
export const setToken = (token: string, local: boolean = true) => {
    const storage = getStorage(local);
    storage.setItem(TOKEN_KEY, token);
}
export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
}
export const isSetToken = () => {
	return ( localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) ) ? true : false;
}