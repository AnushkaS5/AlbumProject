import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// import AddForm from './Components/AlbumCard/addForm';
import AlbumNav from './albumNav';
import { useState } from 'react';
import AlbumCard from './albumCard';
import { db } from './firebaseinit';
function App() {
  const [addPhoto, setAddPhoto] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <AlbumCard  />
      
      </header>
    </div>
  );
}

export default App;
