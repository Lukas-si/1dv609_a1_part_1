import { SSNHelper } from '../src/correct/SSNHelper'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';



describe('SSNHelpe Tests', () => {
    const exactlyDays = 31
    test('Should be inValid beacuse not <= ', () => {
        const helper = () => new SSNHelper(exactlyDays)
        expect(helper).toBe(true)
    })

 
    //Add your tests here
});