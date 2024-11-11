
// import { useState } from 'react';
// import each from './eachpic.module.css';
// import content from './albumContent.module.css';
// import AlbumNav from './albumNav';
// import AlbumCard from './albumCard';

// function AlbumContent({ album, set, handleModify }) {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [albumid, setAlbumid] = useState(-1);
//   const [showNav, setShowNav] = useState(false);
  
//   const handleAlbumClick = (albumName, albumId) => {
//     setAlbumid(albumId);
//     setSelectedAlbum(albumName);
//   };
  
 

//   const deleteUser = async (itemId) => {
//     try {
//       console.log(`Deleting item with ID: ${itemId}`);
//       await fetch(`https://jsonplaceholder.typicode.com/albums/${itemId}`, {
//         method: 'DELETE',
//       });
//       const updatedAlbum = album.filter((a) => a.id !== itemId);
//       console.log('Updated album:', updatedAlbum);
//       set(updatedAlbum);
//     } catch (error) {
//       console.log('Error deleting item:', error);
//     }
//   };

//   const handleBackClick = () => {
//     setShowNav(true);
//   };

//   return (
//     <>
//       {showNav ? (
//         <AlbumCard />
//       ) : (
//         <>
//           <img
//             className={content.back}
//             onClick={handleBackClick}
//             src="https://cdn-icons-png.flaticon.com/128/8022/8022662.png"
//             alt="Back"
//           />
//           <header className={content.card1}>
//             {album.map((a, index) => (
//               <div key={index} className={each.album}>
//                 <h3>{a.title}</h3>
//                 <h4>{a.body}</h4>
                
//                 <button onClick={() => deleteUser(a.id)} className={content.del}>
//                   <img src="https://cdn-icons-png.flaticon.com/128/16534/16534027.png" alt="Delete" />
//                 </button>
//                 <button onClick={() => handleModify(index)} className={content.mod}>
//                   <img src="https://cdn-icons-png.flaticon.com/128/14810/14810238.png" alt="Modify" />
//                 </button>
//               </div>
//             ))}
//           </header>
//         </>
//       )}
//     </>
//   );
// }

// export default AlbumContent;
import { useState } from 'react';
import each from './eachpic.module.css';
import content from './albumContent.module.css';
import AlbumNav from './albumNav';
import AlbumCard from './albumCard';

function AlbumContent({ album, set, handleModify }) {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumid, setAlbumid] = useState(-1);
  const [showNav, setShowNav] = useState(false);
  
  const handleAlbumClick = (albumName, albumId) => {
    setAlbumid(albumId);
    setSelectedAlbum(albumName);
  };
  
  const deleteUser = async (itemId) => {
    try {
      console.log(`Deleting item with ID: ${itemId}`);
      await fetch(`https://jsonplaceholder.typicode.com/albums/${itemId}`, {
        method: 'DELETE',
      });
      const updatedAlbum = album.filter((a) => a.id !== itemId);
      console.log('Updated album:', updatedAlbum);
      set(updatedAlbum);
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  const handleBackClick = () => {
    setShowNav(true);
  };

  return (
    <>
      {showNav ? (
        <AlbumCard />
      ) : (
        <>
          <img
            className={content.back}
            onClick={handleBackClick}
            src="https://cdn-icons-png.flaticon.com/128/8022/8022662.png"
            alt="Back"
          />
          <header className={content.card1}>
            {album.map((a, index) => (
              <div key={index} className={each.album}>
                <h3>{a.title}</h3>
                <h4>{a.body}</h4>
                <div className={each.buttonContainer}>
                  <span className={each.buttonText}>Delete</span>
                  <button onClick={() => deleteUser(a.id)} className={content.del}>
                    <img src="https://cdn-icons-png.flaticon.com/128/16534/16534027.png" alt="Delete" />
                  </button>
                  <span className={each.buttonText}>Modify</span>
                  <button onClick={() => handleModify(index)} className={content.mod}>
                    <img src="https://cdn-icons-png.flaticon.com/128/14810/14810238.png" alt="Modify" />
                  </button>
                </div>
              </div>
            ))}
          </header>
        </>
      )}
    </>
  );
}

export default AlbumContent;
