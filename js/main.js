// 1 - make http request to get all users then get the first user and log its info (name, email)
// after that, find posts by his/her id and log its info
// Task: try make it without try-catch

// ENDPOINT: https://jsonplaceholder.typicode.com/users => users
// https://jsonplaceholder.typicode.com/posts => posts
// import fetchUserAndPosts from './HTTP_requests.js'

// fetchUserAndPosts()



// 2- create class for PostManager that has (user allPosts) and properties (user, allPost and posts for this user)
// - make loadPosts method that log the number of posts related to this user
// - make display user info method that display in log (username and email)
// - make display post titles method that display post id and post titles for posts related to user,
// make check if posts related to user are not empty
// - make method that get user_post by id, and return null if not exist
// Task: separate User and posts by make each one in single class and link to then, prevent reaching from user_posts or user property

// import {user, posts as allPosts} from './static.js'
// import PostManager from './post_manager.js'

// const manager1 = new PostManager(user, allPosts);
// manager1.loadPosts();
// console.log("#######")
// manager1.displayUserInfo()
// console.log("#######")
// manager1.displayPostsTitleByUser()
// console.log("#######")
// console.log(manager1.getPostById(1))
// console.log("#######")
// console.log(manager1.getPostById(10))