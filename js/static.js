const user = { id: 1, name: "Aya", email: "aya@example.com" };

const posts = [
  { id: 1, userId: 1, title: "Aya’s first post" },
  { id: 2, userId: 1, title: "Learning OOP in JS" },
  { id: 3, userId: 2, title: "Ahmed’s post" }
]

// 2- create class for PostManager that has (user allPosts) and properties (user, allPost and posts for this user)
// - make loadPosts method that log the number of posts related to this user
// - make display user info method that display in log (username and email)
// - make display post titles method that display post id and post titles for posts related to user,
// make check if posts related to user are not empty
// - make method that get user_post by id, and return null if not exist
// Task: separate User and posts by make each one in single class and link to then, prevent reaching from user_posts or user property
