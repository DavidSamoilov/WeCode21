
function List(props) {

    const listItems = () => props.hobbies.map(hobby => <li>{hobby}</li>)
    // [<li>Hamburgers</li>,<li>Tennis</li>...]

    // console.log(props.title, props.hobbies, props.name, props.onHobbySelected);
    return <div className="container-fluid">
        <h3>{props.title}</h3>
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">{props.name} Hobbies List</li>
            {
                // listItems()
                
                //'key' is for react alone! It's not a DOM thing.
                //React needs to diffrentiate betweeen each generated element
                //This is because React uses Virtual DOM!!
                //React build exact DOM-like tree, called V-DOM
                //So she can manipulate it more effectively
                props.hobbies && props.hobbies.length 
                    ?
                    props.hobbies.map((hobby, index) => <li 
                        key={index}
                        className="list-group-item"
                        onClick={() => props.onHobbySelected(props.name, hobby)}
                        >{hobby}</li>
                    )
                    :
                    <li>No Hobbies, you boring man</li>
            }
        </ul>
    </div>
}

export default List;