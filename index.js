function sayHello() {
    console.log("Hello!");
}

function receivesAFunction(sayHello) {
    sayHello();
}

/*const returnsANamedFunction = function namedFunction() {
    return sayHello;
}*/

function returnsANamedFunction() {
    return function hello(name) {
        return (`Hello ${name}`);
    }
}

function returnsAnAnonymousFunction() {
    return function (name) {
        return (`Hello ${name}`);
    }
}