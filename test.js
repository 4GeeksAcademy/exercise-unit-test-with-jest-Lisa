// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

//import the function from app.js
const{fromEuroToDollar} = require('./app.js');
test('One euro should be 1.2 dollars',function(){
    // use the function like its suppoed to be used

   let dollars = fromEuroToDollar(3.5);

    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)

    
})

//import the function from app.js
const{fromDollarToYen} = require('./app.js');
test('One dollar should be 0.0072 yen',function(){
    // use the function like its suppoed to be used

   let yens = fromDollarToYen(1);

    // this is the comparison for the unit test
     expect(fromDollarToYen(1)).toBe(139.45); 

    
})

//import the function from app.js
const{fromYenToPound} = require('./app.js');
test('One yen should be 0.0057 dollars',function(){
    // use the function like its suppoed to be used

   let englands = fromYenToPound(1);

    // this is the comparison for the unit test
     expect(fromYenToPound(1)).toBe(0.0057); 

    
})
