

export const createPostAsync = async (formData) => {
    try {
        const response = await fetch('http://localhost:4000/post/create', {
          method: 'POST',
    
          body: formData,
        });

        console.log(response)
  
        if (response.ok) {
          const data = await response.json();
          return data
        
        } else {
          console.error('Error al subir la foto y el comentario');
        }
      } catch (err) {
        console.error('Error de red:', err);
      }
};

export const updatePostAsync = async(id,comment)=>{
    try{
       const response =  await fetch(`http://localhost:4000/post/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                comment:comment
            })
        })

        const data = await response.json()
        console.log(data)
        return data

    }catch(err){
        console.log(err)
    }
}




