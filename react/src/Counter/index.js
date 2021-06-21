import React, { useState } from 'react';

//useState is a function.
//It gets the initial state
//It returns array of 2 cells:
//The first is the data itself
//The second is a function to update the data

function App() {

    const [counterObj, setCounter] = useState({
        counter: -10,
        isCounting: true,
        countStep: 2
    });
    
    const [countings, setCountings] = useState([]); 

    const pleaseCount = () => {
        console.log('counting');
        if(counterObj.isCounting) {
            counterObj.counter += counterObj.countStep;
            
            //Reference types should be copied to get a new reference!
            setCounter({
                ...counterObj
            });

            //Arrays are reference types - should be copied to get a new reference!
            setCountings([
                ...countings, 
                counterObj.counter
            ]);
        }
    }

    //React fragment (the <>...</>)
    //Instead of 1 root, like div, we can use fragment
    //Which means, no extra div tag
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>Counting {counterObj.counter}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={pleaseCount}>Count!</button>
                </div>
            </div>
            <div className="row">
                <div class="col">
                    <h4>Your countings</h4>
                    <ol>
                        {
                            countings.map((count, index) => <li key={index}>{count}</li>)
                        }
                    </ol>
                </div>
            </div>
        </div>
    </>
}

export default App;




