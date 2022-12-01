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
return input % 2 == 0
}

function add(input1,input2){
    if(typeof input2 == 'number' && typeof input1 == 'number'){
    return input1 + input2 } else{
        parseInt(input1,input2)
    }
}


