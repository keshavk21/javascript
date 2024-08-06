//  innediate invoked function expression 
//  IIFE
(function chai(){
    // named iife
    console.log(`DB connected`)
})();

( (name) => {
    // unnamed iife
    console.log(`DB connected TWO ${name}`)
})('hitesh')

