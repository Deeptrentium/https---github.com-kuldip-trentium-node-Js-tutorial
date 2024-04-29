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


// const newCache = require('./modulecache')

// console.log(newCache.getName());

// newCache.setName('bhargav');

// console.log(newCache.getName())

// const newSuperCache = require('./modulecache') //here if already imported then use the cache value

// console.log(newSuperCache.getName()) 


//output ->kuldip , bhargav , bhargav


// const math = require('./export')

// console.log(math.add(2,3))

// const data = require('./data.json')
//while importing json file add extendtion json bcz the node first check file of data.js then find the data.json 
// console.log(data.name)


const path = require('path')

console.log(__dirname)
console.log(__filename)

console.log(path.basename(__filename))

console.log(path.extname(__filename))

console.log(path.parse(__filename))

console.log(path.format(path.parse(__filename)))

console.log(path.isAbsolute(__filename)) //true

console.log(path.isAbsolute('./data.json'))//false ./ is relative


console.log(path.join('path1','path2',"index2"))

console.log(path.join('/path1','path2',"index2"))

console.log(path.join('/path1','///path2',"index2"))

console.log(path.join('/path1','///path2',"../index2"))
console.log(path.join(__dirname,"index.js"))


console.log(path.resolve('folder1','folder2')) //->is not starts with / then return the dirnme 

console.log(path.resolve('/folder1','folder2'))

console.log(path.resolve('/folder1','//folder2')) //->resolve with consider with root 
