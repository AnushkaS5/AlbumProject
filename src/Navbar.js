
import { useState } from 'react';
import './App.css';
import AlbumCard from './albumCard';
import AddForm from './addForm';
import navEle from './navbar.module.css'
import AlbumContent from './albumContent';
function Navbar() {
  const [main,setMain]=useState(false);
  const handlemain=()=>{
    alert("pressed");
    setMain(true);
  }
  return (
    
      <header className={navEle.nav}>
      
      <img src="https://cdn-icons-png.flaticon.com/128/1375/1375106.png" className={navEle.navimg}/>
       <h3 className={navEle.navheading}>ALBUMS</h3>
</header>
     
     
    
  );
}

export default Navbar;
