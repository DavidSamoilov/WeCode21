
function User(props) {
    let username = '';
    let email = '';
  return (
    <div>
      <div className="form-group">
        <label htmlFor="usernameInput">Username</label>
        <input
          type="text"
          className="form-control"
          id="usernameInput"
          aria-describedby="emailHelp"
          onChange={e => username = e.target.value}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="emailInput">Email</label>
        <input type="email" className="form-control" id="emailInput"
          onChange={e => email = e.target.value}
        />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" 
            onClick={e => props.onRememberMe(username, e.target.checked)} />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember Me
        </label>
      </div>
      <button type="submit" className="btn btn-primary"
        onClick={() => props.onSubmit(username, email)}
      >
        Submit
      </button>
    </div>
  );
}

export default User;
