const greet = (name)=>{
  console.log('hello',name)
}

const greetThrewCallbacks = (fun) =>{
  const name = 'kuldip'
  fun(name)
}

greetThrewCallbacks(greet)