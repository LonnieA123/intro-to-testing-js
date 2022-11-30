// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello',
    function () {
        it('should return a string when called', function () {
            expect(typeof helloWorld()).toBe('string')
        });
        it("sayHello('Jane')should return 'Hello Jane' ", function () {
            expect(sayHello('Jane')).toBe('Hello Jane')
        });
        it("sayHello('Alex')should return 'Hello Alex' ", function () {
            expect(sayHello('Alex')).toBe('Hello Alex')
        });
        it("sayHello('Pat')should return 'Hello Pat' ", function () {
            expect(sayHello('Pat')).toBe('Hello Pat')
        });
        it('by default it should display "Hello World ', function () {
            expect(sayHello()).toBe("Hello, World")
        });
        it('if entered true display "Hello World" ', function () {
            expect(sayHello(true)).toBe("Hello, World")
        });
        it('if entered "null" display "Hello World" ', function () {
            expect(sayHello(null)).toBe("Hello, World")
        });
        //
        //
        // it('if entered a number in a string display "Hello World" ', function () {
        //     expect(sayHello(null)).toBe("Hello, World")
        // });
    })

describe('isFive', function () {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what input', function () {
       expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when 5 is passed', function () {
       expect(isFive(5)).toBe(true)
    });
    it('should return true when "5" is passed', function () {
        expect(isFive("5")).toBe(true)
    });

});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean', function() {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return true when given 2', function() {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when given -4', function() {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when given 3', function() {
        expect(isEven(3)).toBe(false)
    });
    it('should return true when given 8', function() {
        expect(isEven(8)).toBe(true)
    });
    it('should return false when given Infinity', function() {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when given banana', function() {
        expect(isEven('banana')).toBe(false)
    });
    it('should return false when given a boolean', function() {
        expect(typeof isEven == Boolean).toBe(false)
    });
    // it('should return false when not given a argument', function() {
    //     expect (isEven("")).toBe(false)
    // });
})






// returns false when called without an argument like isEven()













//
// describe('addOne', function (){
//     it('should be a defined function', function(){
//         expect(typeof addOne).toBe('function');
//     });
//     it('should return a number when called', function(){
//         expect(typeof addOne()).toBe('number')
//     });
//     it('should return the number + 1 ', function(){
//         expect(addOne()).toBe(addOne)
//     });
// });