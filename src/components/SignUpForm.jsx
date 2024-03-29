import { useState } from "react";



const SignUpForm = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const URL = 'https://fsa-jwt-practice.herokuapp.com/signup';

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const json = await response.json();
      const token = json.token;
      console.log(token);
      setToken(token)
    }
    catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h1>sign up</h1>
      {error ? (<h2>{error}</h2>) : null}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input type="text" name="username" value={username} onChange={(event) => {
          setUsername(event.target.value);
        }} />
        <br />
        <label htmlFor="password">password</label>
        <input type="text" name="password" value={password} onChange={(event) => {
          setPassword(event.target.value);
        }} />
        <br />
        <button>submit</button>

      </form>

    </>
  )


}

export default SignUpForm;