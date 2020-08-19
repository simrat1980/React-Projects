import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import Items from './Items';
import Cart from './Cart';

function App() {
  const[activeTab, setActiveTab]=useState('item');
   const onTabChange=(tab)=>
  {
    console.log(tab);
  }
  return (
    <div className="App">
        <Nav onTabChange={onTabChange}></Nav>
        <main className="App-content">
          <Items></Items>
          <Cart></Cart>

        </main>
    </div>
  );
}

export default App;
