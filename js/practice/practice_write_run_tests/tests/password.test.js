
// Select one of the Password versions to test

import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {

  test('getPasswordHash ShouldReturnHashedValueForValidPassword', () => {

    const validPassword = 'abcdefghijkl1m'
       // >=12 chars and contains number
    const sut = new Password(validPassword)

    // expected hash using same algorithm
    let expectedHash = 7
    for (let i = 0; i < validPassword.length; i++) {
      expectedHash = expectedHash * 31 + validPassword.charCodeAt(i)
    }

    expect(sut.getPasswordHash()).toBe(expectedHash)
  })

});