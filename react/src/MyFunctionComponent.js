import React from "react";

function MyFunctionComponent(props) {
    console.log(props.x, props.name, props.age);
    // return React.createElement('div', null, [
    //     React.createElement('h1', null, 'Ahalan from Function Component!'),
    //     React.createElement('p', {style: {color: 'red'}}, 'Paragraph Text...'),
    //     React.createElement('button', {onClick: () => alert("What's up?")}, 'How R U?')
    // ]);
    //JSX syntax
    //Whenever you need JS things, you open {} and inside your code
    return <div>
        <h1>Ahalan {props.name} from Function Component!</h1>
        <p style={{color:props.color, backgroundColor: 'yellow'}}>Paragraph Text...</p>
        <button onClick={() => alert(`What's Up ${props.x}?`)}>
            How R U?
        </button>
    </div>
}

const MYPI = 3.1458999;

const myFunc = () => 42;

export {
    MYPI,
    myFunc
};

export default MyFunctionComponent;