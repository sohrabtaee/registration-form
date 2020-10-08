export const renderFeedback = (feedback) => {
  Object.keys(feedback).forEach((key) => {
    document.getElementById(key).setAttribute('valid', feedback[key])
  })
}

export const renderSubmit = (enabled) => {
  const submit = document.getElementById('submit')
  if (enabled) {
    submit.removeAttribute('disabled')
  } else {
    submit.setAttribute('disabled', true)
  }
}
