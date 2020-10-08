const LENGTH = 8

export const INITIAL_FEEDBACK = {
  length: false,
  lowercase: false,
  uppercase: false,
  number: false,
  special: false,
}

export const validateLength = (value) => {
  return value.length >= LENGTH
}

export const validateLowercase = (value) => {
  return value.toUpperCase() != value
}

export const validateUppercase = (value) => {
  return value.toLowerCase() != value
}

export const validateNumber = (value) => {
  return /\d/.test(value)
}

export const validateSpecial = (value) => {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)
}

export const validatePassword = (password) => {
  const feedback = INITIAL_FEEDBACK

  feedback.length = validateLength(password)
  feedback.lowercase = validateLowercase(password)
  feedback.uppercase = validateUppercase(password)
  feedback.number = validateNumber(password)
  feedback.special = validateSpecial(password)

  return feedback
}

export const isSubmittable = (feedback) => {
  return Object.keys(feedback).every((key) => feedback[key])
}
