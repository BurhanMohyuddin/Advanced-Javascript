//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (a , b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
         //Answer is :13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//Answer is : 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

        //Answer is :17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

            //Answer is : 16

//What are the two elements of a pure function?

    //DETERMINISTIC : Always produces the same result on the basis of gaive same input.
    //No Side Effect : Doesn't depend on any other data or state during the execution of program. It depends on its input.