// 1- create a function that take user_id as a param and get all posts and filter it by user_id
// hint: use async/await try-catch and fetch api and also (filter and foreach)
// requirement: check if no post exist by user_id

// async function getPostsByUserId (user_id) {
//   try {
//     const request = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await request.json()

//     // const result = []
//     // for (let i = 0; i < data.length; i++) {
//     //     if (data[i].user_id === user_id){
//     //         result.push(data[i])
//     //     }
//     // }
//     let postsByUserId = data.filter(post => post.userId === user_id)

//     // for (let i = 0; i < postsByUserId.length; i++) {
//     //     const {userId, id, title} = postsByUserId[i]
//     //     console.log(`userId #${userId} - ${id} ${title}`)
//     // }

//     postsByUserId.forEach(post => {
//       const { userId, id, title } = post
//       console.log(`userId #${userId} - ${id} ${title}`)
//     })
//   } catch (error) {
//     console.log(`SOMETHING GOES WRONG ${error.message}`)
//   }
// }

// getPostsByUserId(12121)

// 2. Send JSON Data via Fetch POST Request
// • Use the fetch() API to send a POST request with JSON data
// to an API endpoint. Log the response or success message.
// create html form and make 2 input (name, email) and take those data using DOM

// async function makePOSTRequestToSendData () {
//   // https://jsonplaceholder.typicode.com/posts
//   const data = {
//     name: 'Ahmed',
//     email: 'a.sadek@gmail.com'
//   }

//   try {
//     const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })

//     const response = await request.json();
//     console.log(response)
//   } catch (error) {
//     console.log(`SOMETHING GOES WRONG ${error.message}`)
//   }
// }

// makePOSTRequestToSendData();