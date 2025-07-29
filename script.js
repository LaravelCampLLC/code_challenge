// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/comments?postId=1
// make function that make HTTP request on post id using ajax and after getting post by post id,
//  and after that get the comments related to this post by post id and print them in console

/*
  1- step1: create function return promise inside it it make 
    http request using ajax and resolve the result in object
  2- step2: create function inside it it call the ajax operation and then print the post information 
    and then make request on comments and also ge its info
  3- exceute function that made in step3 and give it the post id
*/

function makeAJAXRequest (url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        const toObject = JSON.parse(this.responseText)
        resolve(toObject)
      } else {
        reject('Something Went Wrong')
      }
    }

    request.onerror = () => reject('CONNECTION ERROR | Something Went Wrong')

    request.send()
  })
}

function getPostAndComments (post_id) {
  makeAJAXRequest(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(post => {
      console.log('##########')
      console.log(`POST number ${post.id} - Title: ${post.title}`)
      const commentsByPosts = makeAJAXRequest(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      )
      return commentsByPosts
    })
    .then(comments => {
      console.log('COMMENTS')
      for (let i = 0; i < comments.length; i++) {
        // const comment = comments[i];
        const { id, name, email } = comments[i]
        console.log(`${id} - ${name} => ${email}`)
      }
    })
    .catch(error => console.log(error))
    .finally(() => console.log('PROCESS DONE'))
}

getPostAndComments(1)
// Print the result in dom
// handle if posts not exist by given id
