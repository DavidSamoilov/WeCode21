const fetch = require('node-fetch');
// 1
// Use git public api to fetch public repositories:
// https://api.github.com/repositories
// - Use fetch('url')
// - The returned promise encapsulates the json results
// - So you'll have to call result.json() in order to extract the json data
// - result.json() is also a Promise...
// 2
// extract
// full_name (show first name + last name)
// avatar_url
// git_url
// 3
// print the results

function getGithubRepos(url){
    return fetch(url);
}

function extractResponse(response) {
    return response.json();
}

function processRepos(repos) {
    return new Promise((resolve, reject) => {
        const result = repos.map(repo => ({
            fullName: repo.full_name,
            avatar: repo.owner.avatar_url,
            gitUrl: repo.url
        }));
        resolve(result);
    });
}


//async/await is es6 new keywords
//this new keywords are here to ease the promise chain pain
//This is called: 'syntactic sugar'
//Easier to code, more readable
//More examples for syntactic sugars:
//ternary if
//destructure
//arrow function
//spread
//class

const run = async () => {
    const response = await getGithubRepos('https://api.github.com/repositories');
    const repos = await extractResponse(response);
    const result = await processRepos(repos);
    console.log(result);
}

run();

// getGithubRepos('https://api.github.com/repositories')
// .then(response => extractResponse(response))
// .then(repos => processRepos(repos))
// .then(result => console.log(result));