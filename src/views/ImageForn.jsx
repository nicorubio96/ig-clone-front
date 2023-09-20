import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {createPost, updatePost} from '../store/postReducer'
export const ImageForm = () => {
    const dispatch = useDispatch()
    const [avatar, setAvatar]= useState(null)
    const [comment,setComment]=useState('')

    const handlePhotoChange=(e)=>{
        const selectedPhoto= e.target.files[0]
        setAvatar(selectedPhoto)



    }

    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };
  

  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
   /*    const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('comment', comment);
      formData.append('UserId', 1); // Cambia el valor según tu necesidad
      dispatch(createPost(formData)) */

      dispatch(updatePost(8,comment))

  
     
    }
  

  return (
    <div>
      <h2>Subir Foto y Comentario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Seleccionar Foto:</label>
          <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <div>
          <label htmlFor="comment">Comentario:</label>
          <textarea id="comment" value={comment} onChange={handleCommentChange} />
        </div>
        <div>
          <button type="submit">Subir</button>
        </div>
      </form>
    </div>
  )
}
