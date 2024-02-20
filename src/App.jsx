import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Nav from './components/Nav1';
import ShowHide from './components/ShowHide';
import vehicles from './data/vehicles';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const vehiclesList = vehicles.map(v =>{
    return <Card2 key={uuidv4()} name={v.name} description={v.description}/>;
  });
  
  return (
    <div className='App'>
        <Nav data={vehicles}/>
        <h1>Soy una App</h1>
        <ShowHide/>
        <div className='Container'>
          <Card1 name='name' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia'/>
          {vehiclesList}
        </div>
      </div>
    
  )
}

export default App
