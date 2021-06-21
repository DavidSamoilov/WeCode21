import Login from './Login';
import {login} from '../DAL/api';
import { useState } from 'react';


function App() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const onLogin = (username, password) =>  {
        const userData = login(username, password);

        if(userData){
            setUser(userData);
        } else {
            setError('We dont know you')
        }
    }

    return (
        <>
        {!user && <Login onLogin={onLogin} errorMsg={error} />}
        {user && <h1>Welcome {user.name}</h1>}
        </>
    )
}

export default App;