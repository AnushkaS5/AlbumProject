import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import AlbumCard from './albumCard';
// import AddForm from './Components/AlbumCard/addForm';
import AddForm from './addForm';
import { useState } from 'react';
import album from './albumNav.module.css';
import AlbumContent from './albumContent';
function AlbumNav({albumAdded}) {
    const[addPhoto,setaddPhoto]=useState(false);
    const[showCancel,setshowCancel]=useState(false);
    const[showbelow,setshowbelow]=useState(false);
    const add=()=>{
        setaddPhoto(true);
        setshowCancel(true);
        setshowbelow(true);
    }
    const cancel=()=>{
      setaddPhoto(false);
      setshowCancel(false);
      setshowbelow(false);
  }

  return (
    
    addPhoto  ?
   (

   <> 
    <AddForm />
  
         <div className={album.nav}>
         <h3 className={album.albumheading}>Your Albums</h3>
         <button className={album.albumbutton} onClick={cancel}>{showCancel?"Cancel":"Add Album"}</button>
         
        </div>
    
    
    
   </>
     
    
    ) :(albumAdded?(
      <>
    
      <div className={album.nav}>
      <h3 className={album.albumheading}>Your Albums</h3>
      <button className={album.albumbutton} onClick={add}>{showCancel?"Cancel":"Add Album"}</button>
     </div>
      </>
    ):(!addPhoto &&(
      <>
      <div className={album.nav}>
      <h3 className={album.albumheading}>Your Albums</h3>
      <button className={album.albumbutton} onClick={add}>{showCancel?"Cancel":"Add Album"}</button>
     </div>
      </>)
    )
     
        
    )
  
 
  );
}
export default AlbumNav;
