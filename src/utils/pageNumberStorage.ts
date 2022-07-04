export const getPageNumber = (name: string) => {
  return ( sessionStorage.getItem(name) );
}

export const setPageNumber = (name: string  ,page: string) => {
  sessionStorage.setItem(name, page);
}