/**
 Please preview the following references before doing the excercise below:
 http://es6.ruanyifeng.com/#docs/iterator
 http://es6.ruanyifeng.com/#docs/generator
 http://es6.ruanyifeng.com/#docs/generator-async
 http://es6.ruanyifeng.com/#docs/async
 http://es6.ruanyifeng.com/#docs/decorator
 http://es6.ruanyifeng.com/#docs/style

 */

//#1 Please list all native JavaScript objects which have already been deployed the iterator interface? E.g. Map.

//#2 Given an array-like object. Please deploy an iterator interface on it so that it can be looped by for...of.

let obj = {
    0: '1',
    1: '2',
    2: '3',
    length: 3
};
for (let item of obj) {
    console.log(item); // '1', '2', '3'
}
//Write your code below:



//#3 Please list all situations/occasions would automatically invoking iterator interface. E.g. for...of




//#4 Given an string 'Nokia', please come up with a solution to meet the requirement below:
const str = 'Nokia';
[...str] // ['N', 'o', 'k', 'i', 'a']
//The output will be changed into
    [...str] // ['Nokia', 'Shanghai', 'Bell']
//Write your code below:



//#5 Given generator functions below, write down the result for each value of next invocation
function* inner() {
    yield 'shanghai bell';
}

function* outer1() {
    yield 'nokia';
    yield inner();
    yield 'hangzhou';
}

var gen = outer1()
gen.next().value // your answer for the value:
gen.next().value // your answer for the value:
gen.next().value // your answer for the value:


//#6 Given generator functions below, write down the result which is returned from next invocation.
function *foo() {
    yield 2;
    yield 3;
    return "foo";
}

function *bar() {
    yield 1;
    var v = yield *foo();
    console.log( "v: " + v );
    yield 4;
}

var it = bar();

it.next()
// your answer：
it.next()
// your answer：
it.next()
// your answer：
it.next();
// your answer：
it.next()
// your answer：



//#7 What is decorator. Why decorator cannot decorate a function?



//#8 Write a decorate called mixin which can accept a list of object and mixin all function properties(not all properties) of objects to the class which is being decorated.
// For example:
const Bar = {
    bar() { console.log('bar') }
};


@mixin(Bar)
class DecoratedClass {
    //...
}

let obj = new DecoratedClass();
obj.bar() // 'bar'



//#9 Implement a generator of prime numbers by using Generator function.
//The generator could be like this:
var generator1 = primeGen();
var generator2 = primeGen();
console.log(generator1.next()); // 2
console.log(generator1.next()); // 3
console.log(generator1.next()); // 5
…
console.log(generator2.next()); // 2
…


//#10 Assume there is a public API/URL e.g. http://www.public.url/ would return a JSON data looking like:
{
    "next": 'http://www.public.url/?page=2',
    "previous": "http://www.public.url/?page=1",
    "result": {
    //there will be a lot of properties/datas
}
}

//the data returned from http://www.public.url/?page=2 would look like:
{
    "next": 'http://www.public.url/?page=3',
    "previous": "http://www.public.url/?page=2",
    "result": {
    //there will be a lot of properties/datas
}
}

//That is said, the returned JSON data contains the next URL which can continue to get more data until the next returning null.
//Please make a implementation by using async function to fetch all datas util the next returned is null.
//TIPS: please use async to make your implementation simple.
//TIPS: If you want to try your implementation, you use this public API: http://swapi.co/api/people/ if it can be accessed from our office. Let me know if you have any question about it.
//TIPS: you can use any XMLHttpRequest wrapper, e.g. xhr to simplify the ajax request.





