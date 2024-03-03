  
  export const validateUser = (data) => {
    let errors = {};
    if (/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
      errors.email = "Enter a valid email - example@mail.com"
    }
    if (!/(?=.*[a-z])/.test(errors.password)) {
      errors.password = "Requires a lower case letter"
    } else if (!/(?=.*[A-Z])/.test(errors.password)) {
      errors.password = "Requires an upper case letter"
    } else if (errors.password.length < 6 || errors.password.length > 10) {
      errors.password = "Requires between 6 and 10 characters"
    }
    return errors
  };
  
  export const validateRegister = (data) => {
    let errors = {}
  
    if (!/(?=.*[a-z])/.test(data.password)) {
      errors.password = "Requires a lower case letter"
    } else if (!/(?=.*[A-Z])/.test(data.password)) {
      errors.password = "Requires an upper case letter"
    } else if (data.password.length < 6 || data.password.length > 10) {
      errors.password = "Requires between 6 and 10 characters"
    } 
    if( data.password !== data.passwordConfirmation) {
      errors.passwordConfirmation = "Passwords don't match"
    }
    if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
      errors.email = "Enter a valid email - example@mail.com"
    }
     return errors
  };
  
  export const validateLogin = (data) => {
    let errors = {};
  
    if( data.password !== data.passwordConfirmation) {
      errors.passwordConfirmation = "Passwords don't match"
    }
    if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
      errors.email = "Enter a valid email - example@mail.com"
    }
     return errors
  };