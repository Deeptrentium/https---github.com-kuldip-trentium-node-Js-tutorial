//modules(reusable code)
/* 
  1)local modules
  2)buildIn by node Js 
  3)third-party(by the developers)

*/ 

// const add = require('./add');

// const sum1 = add(2,3)
// console.log(sum1)

// console.log('hello');


const newCache = require('./modulecache')

console.log(newCache.getName());

newCache.setName('bhargav');

console.log(newCache.getName())

const newSuperCache = require('./modulecache') //here if already imported then use the cache value

console.log(newSuperCache.getName()) 


//output ->kuldip , bhargav , bhargav