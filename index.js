import * as validations from './scripts/validations'
import { renderFeedback, renderSubmit } from './scripts/render'

document.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password')

  const feedback = {
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    special: false,
  }

  let submitEnabled = false

  renderFeedback(feedback)

  password.addEventListener('input', () => {
    feedback.length = validations.length(password.value)
    feedback.lowercase = validations.lowercase(password.value)
    feedback.uppercase = validations.uppercase(password.value)
    feedback.number = validations.number(password.value)
    feedback.special = validations.special(password.value)

    renderFeedback(feedback)

    submitEnabled = Object.keys(feedback).every((key) => feedback[key])
    renderSubmit(submitEnabled)
  })
})
