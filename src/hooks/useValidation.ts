const useRegisterValidation = (phone: string, password1: string, password2: string) => {
  if (!phone && !password1) {
    return false
  }
  if (phone.length !== 9) {
    return false
  }
  if ( password1.length < 8 ) {
    return false
  }
  if ( password1 !== password2 ) {
    return false
  }
  return true
}

export default useRegisterValidation