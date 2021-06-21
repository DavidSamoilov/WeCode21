import User from './User';

const admin = {
    username: 'Kobi',
    email: 'kobi@js.com'
}

function App() {
    const rememberMe = (username, shouldRemember) => alert(`${username} - You want me to${shouldRemember? '': ' not'} remember you`);

    const login = (username, email) => {
        if(username === admin.username && email === admin.email){
            alert(`Ahalan ${username}`);
        }else{
            alert('Who r u?!')
        }
    }

    return <div className="container-fluid">
            <User onRememberMe={rememberMe} onSubmit={login} />
        </div>
}

export default App;