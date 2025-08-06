// createCounter , counter = 0 ; return object
// closure, module, Promise
import createCounter from './counter.js'

const myCounter = createCounter()

console.log(myCounter.getCounter()) // 0
myCounter.increaseCounter()
myCounter.increaseCounter()
myCounter.increaseCounter()
myCounter.increaseCounter()
myCounter.increaseCounter()
console.log(myCounter.getCounter()) //  5
myCounter.decreaseCounter()
myCounter.decreaseCounter()
myCounter.decreaseCounter()
console.log(myCounter.getCounter()) //  2
myCounter.resetCounter()
console.log(myCounter.getCounter()) //  2
myCounter.resetCounter().then(() => {
    console.log("After resetting !")
    console.log(myCounter.getCounter())
})

