import React from "react";
import {fetchImg} from "components/API"
export class ImageGallery extends React.Component{
    state ={
        images:[],
    }
    componentDidUpdate(prevProp, prevState ){
        if(prevProp.query !== this.props.query){
            console.log("pprevProp.query !== this.props.querye, They are not the same!!!")
            console.log("prevProp.query:", prevProp.query)
            console.log("this.props.query:", this.props.query)
            fetchImg(this.props.query).then(({data}) => this.setState({images:data.hits}))
            
        }

    }
    render(){
        
        console.log("this state in ImageGallery component",this.state)

        return(
            <ul className="gallery">
                {this.state.images.map(({id,webformatURL,largeImageURL,tags})=>{
                    return(
                        <li key={id} className="gallery-item">
                        <img src={webformatURL} alt={tags} />
                    </li>
                    )
                })}
            </ul>
        )
    }
}