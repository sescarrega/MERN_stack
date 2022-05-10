import PersonCard from "./componets/PersonCard";

function App(){
  return(
    <div>
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="black" />
      <PersonCard firstName="Patrick" lastName="Star" age={45} hairColor="bald" />
      <PersonCard firstName="Charlie" lastName="Brown" age={6} hairColor="bald" />
    </div>
  )
}

export default App;
