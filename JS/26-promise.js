const fetch = require('node-fetch');

console.log('Start');

setTimeout(() => {
    console.log('Timed out');
}, 2000);

console.log('End');

//This function returns a Promise object
const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json());
}

// //Solution 1
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
   // console.table(users, ['id', 'name', 'username', 'email', 'phone', 'website']);
    getPosts()
    .then(posts => {
        // foreach -> users
        //   filter posts by userId -> usersPosts
        //   log user.name, user.company.name, usersPosts
    })
})

//Solution 2
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    //foreach -> users
    //  getPosts(userId) -> usersPosts
    //  log user.name, user.company.name, usersPosts

})
