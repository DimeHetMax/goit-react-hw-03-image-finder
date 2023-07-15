import React from "react";

export class ImageGalleryItem extends React.Component{
    render(){
        const {id, url, alt} = this.props;
        return(
            <li className="gallery-item" key={id}>
                <img src={url} alt={alt} width={300}/>
            </li>
        )
    }
}