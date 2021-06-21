const users = [
    {name: 'Lala', username: 'lala@wawa.com', password: '12abc3'},
    {name: 'Wawa', username: 'wawa@lala.com', password: '12uu22'},
]

function login(username, password) {
    return users.
        find(user => user.username === username && user.password === password)
    // for(const user of users) {
    //     if(user.username === username && user.password === password){
    //         return true;
    //     }
    // }
    // return false;
}

function getNames() {
    return ['Dor', 'Sari', 'Yakov', 'Getaneh', 'Moshe'];
}

export {
    getNames,
    login
}