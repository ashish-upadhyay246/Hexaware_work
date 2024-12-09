import './App.css';
import { useState } from 'react';
import { MyContext } from './MyContext';
import Show from './Show';

function App() {
  let [id, setId] = useState(1000)
  let [name, setName] = useState("Ashish")

  return (
    <div>
      <h1> I am the App component. </h1>
      <MyContext.Provider value={{ id, name }}>
        <Show />
      </MyContext.Provider>
    </div>
  );
}
export default App;