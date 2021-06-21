import {useState} from 'react';
import NamesList from "./NamesList";
import UserInput from "./UserInput";

function UserNames(props) {
    const [names, setNames] = useState([...props.names]);
  //[5 names]
  //Show names

  const onNewName = (value) => {
    setNames([...names, value]);
      props.onNewName(value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <UserInput title="Name" onValue={onNewName} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NamesList names={names} />
        </div>
      </div>
    </div>
  );

  //remove from the list
}

//input+button - search on youtube api
//input+button - for email to send newsletter

export default UserNames;
