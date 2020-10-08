import {
  INITIAL_FEEDBACK,
  isSubmittable,
  validatePassword,
} from './scripts/validations'
import { renderFeedback, renderSubmit } from './scripts/render'

document.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password')

  renderFeedback(INITIAL_FEEDBACK)

  password.addEventListener('input', () => {
    const feedback = validatePassword(password.value)
    renderFeedback(feedback)

    const submitEnabled = isSubmittable(feedback)
    renderSubmit(submitEnabled)
  })
})
