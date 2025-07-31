// 2- create class for PostManager that has (user allPosts) and properties (user, allPost and posts for this user)
// - make loadPosts method that log the number of posts related to this user
// - make display user info method that display in log (username and email)
// - make display post titles method that display post id and post titles for posts related to user,
// make check if posts related to user are not empty
// - make method that get user_post by id, and return null if not exist
// Task: separate User and posts by make each one in single class and link to then, prevent reaching from user_posts or user property

class PostManager {
  constructor (user, allPosts) {
    this.user = user
    this.allPosts = allPosts
    this.posts = []
  }

  loadPosts () {
    this.posts = this.allPosts.filter(post => post.userId === this.user.id)
    console.log(
      `Loaded ${this.posts.length} posts belongs to user number ${this.user.id} name: ${this.user.name}`
    )
  }

  displayUserInfo () {
    console.log(`user ${this.user.name} - ${this.user.email}`)
  }

  displayPostsTitleByUser () {
    if (this.posts.length === 0) {
      console.log(`no posts related to this user`)
    } else {
      console.log(`Posts belongs to ${this.user.name}`)
      this.posts.forEach(post => {
        console.log(`Post ${post.id} - ${post.title}`)
      })
    }
  }

  getPostById (id) {
    const post = this.allPosts.find(post => {
      return post.id === id
    })
    if (post) {
      return post
    } else {
      return null
    }
  }
}

export default PostManager
