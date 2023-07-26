import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"

export class ImageGallery extends React.Component{
    getImage = (event)=>{
        // console.log(event.target.name)
        // console.log(event.target.alt)
        // console.log("in function getImage")
        this.props.onImage({src: event.target.name, alt: event.target.alt})
    }

    
    render(){
        const {images} = this.props
        console.log(images)
        return(
            <>
            <ul className={css.gallery} onClick={this.getImage}>
                {images.map(({id,webformatURL,largeImageURL,tags})=>{
                    return(
                    <ImageGalleryItem key={id} url={webformatURL} large={largeImageURL} alt={tags}/>
                    )
                })}

            </ul>
                
            </>
        )
    }
}