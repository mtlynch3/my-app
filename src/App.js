import './App.css';

function App() {
  const name = 'Melissa Lynch';
  const element1 = <h1>Hello, {name}</h1>;

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element2 = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  return (
    <div className="App">
      {element1}
    </div>
  );
}

export default App;
