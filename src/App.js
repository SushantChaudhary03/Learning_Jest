import React from 'react';
import './App.css';
import Image from './Components/Image/Image';
import User from './Components/TestReactClassComponent/User';
import UserEvent from './Components/User_Event/UserEvent';

function App() {
  return (
    <div>
      App
      <Image />
      <User />
      <UserEvent email="sushant@gmail.com" />
    </div>
  );
}

export default App;
