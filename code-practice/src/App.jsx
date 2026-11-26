import User from "./User"

let name="sonu";
let age=31;


function App()
{
  return(
    <>
    <h1>My first app in react</h1>
    <User name={name} age={age}/>
    </>
  )
}

export default App