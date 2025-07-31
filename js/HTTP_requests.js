 async function fetchUserAndPosts () {
  try {
    const userRequest = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
    const userData = await userRequest.json()

    const firstUser = userData[0]
    const { id, name, email } = firstUser
    console.log(`id - ${id} - User: ${name} - Email: ${email}`)

    const postsRequest = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    )
    const postsData = await postsRequest.json()
    console.log('##########POSTS##########')
    postsData.forEach(singlePost => {
      const { id, title } = singlePost
      console.log(`Post number: ${id} | ${title}`)
    })
  } catch (error) {
    console.log('Something went wrong')
  }
}

export default fetchUserAndPosts