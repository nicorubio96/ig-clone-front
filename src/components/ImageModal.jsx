import React from 'react'
import './modal.css'
export const ImageModal = () => {
  return (
    //esta e  invoca desde la imagenes del profile o cuando esten desde el inicio, para cuando haga click se muestyre este modal con imngae e info correspondiente
    <div className='container'>
         <div className="card mb-3 imagemodal"  >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    </div>
   
  )
}
