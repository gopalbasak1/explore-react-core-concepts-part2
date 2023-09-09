import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './User';
import Friends from './Friends';


function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 =() =>{
    alert('button 2 clicked');
  }

  const addToFive =(num) =>{
    alert(num + 5);
  }
  
  return (
    <>
      <h3>React Core Concepts 2</h3>

     <Friends></Friends>
      <Users></Users>
      <Counter> </Counter>

      <Team> </Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click</button>
      <button onClick={() => {alert('third clicked')}}>Third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Fourth</button>
     
    </>
  )
}

export default App
