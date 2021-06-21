import {useState} from 'react';

function UserInput(props) {
  //input+button - add new name
  //validate user has entered a value
  //   show message if not
  //send the value to parent

  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

    const validateInput = e => {
        const value = e.target.value;

        if(!value) {
            //show error message
            setIsError(true);
        }else {
            // clear error message
            setIsError(false);
            setInputValue(value);
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        if(!isError) {
            props.onValue(inputValue);
        }
    }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="inputValue">{props.title}</label>
        <input 
            id="inputValue" 
            type="text" 
            className="form-control" 
            onBlur={validateInput}
            defaultValue={inputValue}
        />
        {isError && <small className="form-text text-danger">
          Please enter {props.title}
        </small>}
      </div>
      <button type="submit" disabled={isError} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default UserInput;