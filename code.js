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
        return Number(input1) + Number(input2)

}


let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function isVowel(input) {
    if (typeof input === 'string'){
        return vowels.includes(input);
    } else{
        return false;
    }
        }

