import React from 'react';
import {Searchbar} from "components/Searchbar/Searchbar"
import {ImageGallery} from "components/ImageGallery/ImageGallery"
import { Modal } from './Modal/Modal';
// console.log(Modal)
export class App extends React.Component{
  state = {
    images:[],
    query: "",
    // page: 1,
    showModal: false,
  }
  componentDidUpdate(){
  }
  handleQuery = (value) =>{
    this.setState({query: value})
  }
  onImageClick = (image) =>{
    this.setState({images: image, showModal:true})
  }
  onCloseModal =() =>{
    this.setState({showModal: false})
  }
  render() {
    console.log(this.state)
    return (
      <>
      <Searchbar onSubmit={this.handleQuery}/>
      <ImageGallery query={this.state.query} onImage={this.onImageClick}/>
      {this.state.showModal && <Modal image={this.state.images} onCloseModal={this.onCloseModal}/>}

      
      </>
    );
  }
}
