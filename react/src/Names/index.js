import {useState} from 'react';
import UserNames from './UserNames';

function App() {
    const [lastName, setLastName] = useState('');

    const onNewName = value => {
        setLastName(value);        
    }

  return (
      <>
        <div className="alert alert-success">
            Last Entered Name: {lastName}
        </div>
        <UserNames onNewName={onNewName} names={['Dor', 'Sari', 'Yakov', 'Getaneh', 'Moshe']} />
        <UserNames onNewName={onNewName} names={[]} />
    </>
  );

  //remove from the list
}

//input+button - search on youtube api
//input+button - for email to send newsletter

export default App;
