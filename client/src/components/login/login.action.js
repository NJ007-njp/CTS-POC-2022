

export function initiateSignUp(details) {
    return {
      type: 'SIGNUP_USER',
      details
    }
}

export function initiateLogin(cred) {
    return {
      type: 'VALIDATE_USER',
      cred
    }
}

export function successLogin(details) {
return {
    type: 'LOGIN_SUCCESS',
    details
}
}

