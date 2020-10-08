const LENGTH = 8

export const length = (value) => {
  return value.length >= LENGTH
}

export const lowercase = (value) => {
  return value.toUpperCase() != value
}

export const uppercase = (value) => {
  return value.toLowerCase() != value
}

export const number = (value) => {
  return /\d/.test(value)
}

export const special = (value) => {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)
}
