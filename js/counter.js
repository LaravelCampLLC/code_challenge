// function createCounter() {

// }

const createCounter = () => {
  let counter = 0

  const counterObject = {
    getCounter () {
      return `your counter is ${counter}`
    },
    increaseCounter () {
      counter++
    },
    decreaseCounter () {
      counter--
    },
    resetCounter () {
      console.log('Resetting the counter...')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter = 0;
            console.log("counter is reset!")
            resolve()
        }, 3000);
      })
    }
  }

  return counterObject
}

export default createCounter
