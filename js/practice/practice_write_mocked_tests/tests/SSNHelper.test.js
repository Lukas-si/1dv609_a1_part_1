import { SSNHelper } from '../src/correct/SSNHelper'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperWrongLength";


describe('SSNHelpe Tests', () => {

test('Should be valid if <= 31', () => {
    const helper = new SSNHelper()
    const result = helper.isValidDay('31')

    expect(result).toBe(true)
})

test('Should be valid if == 11', () => {
    const helper = new SSNHelper()
    const result = helper.isCorrectLength('12345678765434567')

    expect(result).toBe(false)
})

test('Should be valid if correct format with - ', () => {
    const helper = new SSNHelper()
    const result = helper.isCorrectFormat('0111080594')

    expect(result).toBe(false)
})

test('Should fail beacuse of length', () => {
    const helper = new SSNHelper()
    const result = helper.isCorrectLength('1234567891011')

    expect(result).toBe(false)
})

});