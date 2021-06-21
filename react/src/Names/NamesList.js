function NamesList(props) {
  return (
    <ul className="list-group">
      <li className="list-group-item active" aria-current="true">
        Names
      </li>
      {props.names.map((name, index) => (
        <li key={index} className="list-group-item">
          {name}
        </li>
      ))}
    </ul>
  );
}

export default NamesList;
