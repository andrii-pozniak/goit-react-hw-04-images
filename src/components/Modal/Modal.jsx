// import { useState } from "react";
import s from "components/Modal/Modal.module.css";

export default function Modal ({onClickModal, children}) {
 
  function escapeButton() {
    console.log(`Modal componentDidMount`)
    window.addEventListener('keydown', evt => {
      console.log(evt.code)
      if(evt.code === 'Escape') {
        
        onClickModal()
      }
    })
  } 
  escapeButton()
 const handleCloseModal = evt => {
    if(evt.currentTarget === evt.target) {
     
      onClickModal()
    }
  }

  
   
    return (<div className={ s.Overlay } onClick={handleCloseModal}>
  <div className={s.Modal}  >
  {children}
  </div>
</div>)


  
  
}


