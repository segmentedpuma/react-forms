import { useState } from "react";

const Authenticate = ({ token }) => {
  const URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userName, setUserName] = useState(null);

  const handleClick = async (event) => {
  try{
    const response = await fetch(URL,{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
      });
      const json = await response.json();
      console.log(json);
      console.log(json.data);
      console.log(json.data.username);
      
      setSuccessMessage(json.message);
      setUserName(json.data.username);
      
    
      
  }
  catch(error){
    setError(error.message);
  }
  }

  return (

    <>
      <h1>Authenticate</h1>
      {error ? <h2>{error}</h2> : null}
      {successMessage ? <p>{successMessage}</p> : null}
      {userName ? <p>User name: {userName}</p> : null}

      <button onClick={handleClick}>Authenticate Token</button>
    </>
  )
}

export default Authenticate;