import style from '../style/Modal2.module.scss'

function Modal2({isOpen, setIsOpen, children}){
    if (!isOpen) return null;



        return (
            <>
             <div className={style.modall} onClick={() => setIsOpen(false)}></div>
                 <div className={style.modalContainer}>
                 <button onClick={() => setIsOpen(false)}>Close</button>
                 {children}
      </div>
            </>
        )
    }



export default Modal2