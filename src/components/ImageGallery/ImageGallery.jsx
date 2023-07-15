import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import {fetchImg} from "components/API"
import css from "./ImageGallery.module.css"

export class ImageGallery extends React.Component{
    state ={
        images:[],
        isLoading: false,
        error: null, 
        page: 1
    }
    handleButtonLoadMore =(e)=>{
        console.log("Hello")
      }
    componentDidUpdate(prevProp, prevState ){
        if(prevProp.query !== this.props.query){
            console.log("pprevProp.query !== this.props.querye, They are not the same!!!")
            console.log("prevProp.query:", prevProp.query)
            console.log("this.props.query:", this.props.query)
            console.log("second param of componentDidUpdate prevState",prevState)

            this.setState({isLoading:true, images:[]})
            fetchImg(this.props.query, this.state.page)
            .then(response =>{
                // console.log("response:",response.request)
                if(response.request.status === 200){
                    return response
                }
                return Promise.reject(
                    new Error(`Add another word, not: ${this.props.query}`)
                )
            })
            .then(({data}) => this.setState({images: data.hits}))
            .catch(error => this.setState({error}))
            .finally(()=> this.setState({isLoading:false}))
        }

    }
    render(){
        const {images,error, isLoading} = this.state
        const {onButtonClick} = this.props
        console.log(images)
        // console.log("this state in ImageGallery component",this.state)

        return(
            <>
            <ul className={css.gallery}>
                {error &&  <p >You see the {error.message}</p>}
                {isLoading && <Loader/>}
                {/* {images.length === 0 && this.props.query!== "" && error=== null&& isLoading!==true &&<p>{`There is no pics with word:${this.props.query}`}</p>} */}
                {images.map(({id,webformatURL,largeImageURL,tags})=>{
                    return(
                    <ImageGalleryItem id={id} url={webformatURL} alt={tags}/>
                    )
                })}
            </ul>
            {images.length !==0 && <Button onButtonClick={this.handleButtonLoadMore}/>}
            </>
        )
    }
}