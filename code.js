// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input === 'string'){
    return 'Hello ' + input } else {
        return 'Hello, World'
    }

    // if(input === 'Alex'){
    //     return 'Hello Alex'
    // } else if (input === 'Jane'){
    //     return 'Hello Jane'
    // } else if (input === 'Pat'){
    //     return 'Hello Pat'
    // }
}

function isFive(input){
return input == 5
}

function isEven(input){
return input % 2 === 0
}

function add(input1,input2) {
        return input1 + input2
}


let vowels = ['a','e','i','o','u']

function isVowel(input) {
    if (input == vowels){
        return true;
    } else if (typeof input === 'number'){
        return false;
    }
        }