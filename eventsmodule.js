const eventsEmitter = require('events')

class PizzaShop extends eventsEmitter {
  constructor(){
    super();
    this.orderCount = 0
  }
 
 order(size,toppings){
  this.emit('order' , size ,toppings)
  this.orderCount++
 }
 displayCurrentOrder (){
  console.log('currently cooking ' ,this.orderCount , 'order')
 }
}

module.exports = PizzaShop