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
    })

















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