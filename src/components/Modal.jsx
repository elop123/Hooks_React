 import { useState } from "react";
 import style from '../style/Modal.module.scss'

 function Modal(){

    const[isOpen, setIsOpen] =useState(false);

    function openModal(){
       setIsOpen(true);
    };

    function closeModal(){
       setIsOpen(false);
    };

  return(
     <div>
     <button className={style.modalBtn} onClick={openModal}>Open Modal</button>

     {isOpen && (
                 <div className={style.modal} onClick={closeModal}>
                     <div className={style.modalContent} >
                         <span className={style.close} onClick={closeModal}>&times;</span>
                         <p>Some text in the Modal..</p>
                     </div>
                 </div>
             )}
            
     </div>
  )
 }

 export default Modal

