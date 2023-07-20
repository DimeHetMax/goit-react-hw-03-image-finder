import React from "react";
import css from "./Modal.module.css"

export class Modal extends React.Component{
    render(){
       const {image, onCloseModal} = this.props
        return(

            <div className={css.overlay} onClick={onCloseModal}>
                <div className={css.modal}>
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        )
    }
}