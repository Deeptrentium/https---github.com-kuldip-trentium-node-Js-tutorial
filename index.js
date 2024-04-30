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


// const path = require('path')

// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__filename))

// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename)) //true

// console.log(path.isAbsolute('./data.json'))//false ./ is relative


// console.log(path.join('path1','path2',"index2"))

// console.log(path.join('/path1','path2',"index2"))

// console.log(path.join('/path1','///path2',"index2"))

// console.log(path.join('/path1','///path2',"../index2"))
// console.log(path.join(__dirname,"index.js"))


// console.log(path.resolve('folder1','folder2')) //->is not starts with / then return the dirnme 

// console.log(path.resolve('/folder1','folder2'))

// console.log(path.resolve('/folder1','//folder2')) //->resolve with consider with root 

// require('./callback')

//for a non blocking execution 
// const eventEmitter = require('events')

// const emitter = new eventEmitter()

// emitter.on('btn-clicked',(name)=>{
//   console.log('button clicked by',name)
// })

// emitter.on('btn-clicked',()=>{
//   console.log('further will going in api')
// })
// console.log('hello ') //non blocking execution
// emitter.emit('btn-clicked','kuldip')

// const PizzaShop = require('./eventsmodule')
// const Drink = require('./extraeventsmodule')

// const pizzaShop = new PizzaShop()
// const drink = new Drink()
// pizzaShop.on('order',(size , toppings)=>{
//   console.log('order placed with' , size , toppings )
//   drink.complymentoryDrink(size)
// })
// pizzaShop.order('large' , 'panner')
// pizzaShop.displayCurrentOrder()

// const buffer = new Buffer.from('Kuldip')
// buffer.write('pandyajikaladka') // ->return only buffer from length data 
// console.log(buffer.toString())
// console.log(buffer.toJSON())
// console.log(buffer)

// const {error} = require('console')
// const fs = require('fs')

// const fsPromise = require('fs/promises')

// console.log(fs.readFileSync('./fs.txt','utf-8')) //->for read file synchronously

// console.log(fs.readFile('./fs.txt','utf-8',(error,data)=>{
//   if(error)
//   {
//     console.log(error)
//   }
//   else{
//     console.log(data)
//   }
// })) //->read file async


// console.log(fs.writeFileSync('new.txt','hello in new file'))

// console.log(fs.writeFile('./new.txt' , 'hello in existing file',{flag:'a'},(error)=>{
//   console.log(error)
// })) //enter data in file 

// //fs promises module
// fsPromise.readFile('./new.tsx','utf-8').then(data=>console.log(data)).catch(error=>console.log(error))

const fs = require('fs')
const zlip = require('zlib')

const gzip  = zlip.createGzip()


const readableStream = fs.createReadStream('./fs.txt',{
  encoding:'utf-8',
  highWaterMark:3
})


const writableStream = fs.createWriteStream('./fs2.txt')
readableStream.pipe(writableStream)
readableStream.pipe(gzip).pipe(fs.WriteStream('fs2.txt.gz'))

// readableStream.on('data',(chunk)=>{
//   console.log(chunk)
//   writableStream.write(chunk)
// })