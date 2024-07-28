
import { useState, useEffect } from 'react';
import addInfo from './addForm.module.css';
import AlbumContent from './albumContent';

function AddForm() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [pic, setPic] = useState(false);
  const [album, setAlbum] = useState(() => {
    const savedAlbum = localStorage.getItem('album');
    return savedAlbum ? JSON.parse(savedAlbum) : [];
  });
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyIndex, setModifyIndex] = useState(null);

  useEffect(() => {
    getUsersDetail();
  }, []);

  const getUsersDetail = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      setAlbum(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem('album', JSON.stringify(album));
  }, [album]);

  const clear = () => {
    setFormData({ title: "", body: "" });
    setIsModifyMode(false);
    setModifyIndex(null);
  };

  const add = async (e) => {
    e.preventDefault();
    if (formData.title && formData.body) {
      if (isModifyMode && modifyIndex !== null) {
        const updatedAlbum = [...album];
        const modifiedAlbum = { ...updatedAlbum[modifyIndex], title: formData.title, body: formData.body };
        updatedAlbum[modifyIndex] = modifiedAlbum;
        setAlbum(updatedAlbum);

        // Dummy PUT request
        try {
          await fetch(`https://jsonplaceholder.typicode.com/albums/${modifiedAlbum.id}`, {
            method: 'PUT',
            body: JSON.stringify(modifiedAlbum),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          });
        } catch (error) {
          console.error('Error updating album:', error);
        }

        setIsModifyMode(false);
        setModifyIndex(null);
      } else {
        // Dummy POST request
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify({ title: formData.title, body: formData.body }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          });
          const newAlbum = await response.json();
          setAlbum((prevAlbum) => [{ id: newAlbum.id || prevAlbum.length, title: formData.title, body: formData.body }, ...prevAlbum]);
        } catch (error) {
          console.error('Error adding album:', error);
        }
      }
      setPic(true);
      clear();
    }
  };

  const handleModify = (index) => {
    setFormData({ title: album[index].title, body: album[index].body });
    setIsModifyMode(true);
    setModifyIndex(index);
    setPic(false);
  };

  return (
    pic ? (
      <AlbumContent album={album} set={setAlbum} handleModify={handleModify} />
    ) : (
    
      <div className={addInfo.form}>
        
        <form>
          <h3>{isModifyMode ? "Modify Album" : "Create an album"}</h3>
          <input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className={addInfo.input}
            placeholder="Enter Title"
            required
          />
          <input
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            className={addInfo.input}
            placeholder="Enter Body"
            required
          />
          <div>
            <button type="button" className={`${addInfo.button} ${addInfo.clear}`} onClick={clear}>Clear</button>
            <button type="submit" className={`${addInfo.button} ${addInfo.add}`} onClick={add}>{isModifyMode ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    )
  );
}

export default AddForm;
