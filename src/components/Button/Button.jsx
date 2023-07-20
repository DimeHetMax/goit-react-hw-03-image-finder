import React from "react";
import css from "./Button.module.css"
export class Button extends React.Component{
    
    render(){
        const {onButtonClick} = this.props
       return(
        <button className={css.button} onClick={onButtonClick}>Load more</button>
       )
    }
}