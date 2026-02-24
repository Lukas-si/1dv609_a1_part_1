
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
 // import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
 // import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
 // import { Password } from '../src/BugNeverContainsNumbers'
 // import { Password } from '../src/BugToShortPassword'
 //import { Password } from '../src/BugVeryShort'
 // import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
 import { Password } from '../src/Correct'

describe('Password class, test suite', () => {

    const validPassword = 'abcdefghijkl1m' // Global variable 
    const notValidPassword = 'brap2'
    const noNumberPassword = 'dfghjghjjhgfdf2ghj'
    const toShortpassword = 'asdfrgtkyh1'
    const superShortPassword = 'asdfg5'

  test('getPasswordHash ShouldReturnHashedValueForValidPassword', () => {

    const sut = new Password(validPassword)
    let expectedHash = 7
    for (let i = 0; i < validPassword.length; i++) {
      expectedHash = expectedHash * 31 + validPassword.charCodeAt(i)
    }
    expect(sut.getPasswordHash()).toBe(expectedHash)
  })
  test('check if password are trimming ', () => {
    const testPassword = new Password(validPassword)
    const whiteSpacePassword = new Password(' abcdefghijkl1m ')

 expect(whiteSpacePassword.isPasswordSame(testPassword)).toBe(true)

  })

  test('Is password same ? ', () => {
    const testPassword = new Password(validPassword)
    const otherPassword = new Password('abcdefghijkl1m2')

    const areTheySame = testPassword.isPasswordSame(otherPassword)

    expect(areTheySame).toBe(false)
    
  })

  test('Should throw no number found', () => {
    const testPassword = () => new Password(validPassword)

    expect(testPassword).not.toThrow()
  })
  test('If password are too short', () => {
    const testPassword = () => new Password(notValidPassword)
    expect(testPassword).toThrow('Too short password')
  })

  test('if it contains number', () => {
    const testPassword = () => new Password(noNumberPassword)
    expect(testPassword).not.toThrow('No number found')
  })

  test('Should be too short', () => {
    const testPassword = () => new Password(toShortpassword)
    expect(testPassword).toThrow('Too short password')
  })

  test('Should be super short', () => {
    const testPassword = () => new Password(superShortPassword)
    expect(testPassword).toThrow('Too short password')
  })

  test('Should be Wrong message', () => {
    const testPassword = () => new Password(superShortPassword)
    expect(testPassword).toThrow('Too short password')
  })

});