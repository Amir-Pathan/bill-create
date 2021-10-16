import React,{useCallback} from 'react'
import './App.css';
import Routing from './component/routing'

function App() {

  useCallback(()=>{
    const details={}
    localStorage.setItem('shopDetails',JSON.stringify(details))
  })

  return (
    <div>
      
      <Routing/>
    </div>
  );
}

export default App;
