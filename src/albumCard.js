

import Navbar from './Navbar';
import AlbumNav from './albumNav';
import AlbumContent from './albumContent';
import { useState,useEffect } from 'react';

import abs from './albumCard.module.css'
function AlbumCard() {
  
 


  return (
    
      <header className={abs.card}>
       <AlbumNav /> 
       
      
      </header>
    
  );
}

export default AlbumCard;
