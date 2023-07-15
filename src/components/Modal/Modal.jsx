import React from "react";
import css from "./Modal.module.css"

export class Modal extends React.Component{
    render(){
        return(
            <div className={css.overlay}>
                <div className={css.modal}>
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
}