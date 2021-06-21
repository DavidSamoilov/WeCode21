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

getGithubRepos('https://api.github.com/repositories')
.then(response => extractResponse(response))
.then(repos => processRepos(repos))
.then(result => console.log(result));