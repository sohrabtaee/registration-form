import * as validations from '../../scripts/validations'

describe('validations', () => {
  it('should not accept passwords that are less than 8 character long', () => {
    expect(validations.validateLength('test')).toBe(false)
    expect(validations.validateLength('long enough test')).toBe(true)
  })

  it('should not accept passwords without a lowercase character', () => {
    expect(validations.validateLowercase('TEST')).toBe(false)
    expect(validations.validateLowercase('Test')).toBe(true)
  })

  it('should not accept passwords without a uppercase character', () => {
    expect(validations.validateUppercase('test')).toBe(false)
    expect(validations.validateUppercase('Test')).toBe(true)
  })

  it('should not accept passwords without a number', () => {
    expect(validations.validateNumber('test')).toBe(false)
    expect(validations.validateNumber('test 1')).toBe(true)
  })

  it('should not accept passwords without a special character', () => {
    expect(validations.validateSpecial('test')).toBe(false)
    expect(validations.validateSpecial('@test')).toBe(true)
  })

  it('should accept passwords that meet all the criteria', () => {
    let feedback
    feedback = validations.validatePassword('test')
    expect(validations.isSubmittable(feedback)).toBe(false)

    feedback = validations.validatePassword('long test')
    expect(validations.isSubmittable(feedback)).toBe(false)

    feedback = validations.validatePassword('long test with Uppercase')
    expect(validations.isSubmittable(feedback)).toBe(false)

    feedback = validations.validatePassword(
      'long test with Uppercase and Numbers 1234'
    )
    expect(validations.isSubmittable(feedback)).toBe(false)

    feedback = validations.validatePassword(
      'long test with Uppercase and Numbers 1234 and special characters @@'
    )
    expect(validations.isSubmittable(feedback)).toBe(true)
  })
})
