import React from 'react';
import {Searchbar} from "components/Searchbar/Searchbar"
import {ImageGallery} from "components/ImageGallery/ImageGallery"

export class App extends React.Component{
  state = {
    images:[],
    query: "",
    page: 1,
  }
  componentDidUpdate(){

  }
  handleQuery =(value)=>{
    // console.log(value)
    this.setState({query: value})
  }
  render() {
    console.log(this.state)
    return (
      <>
      <Searchbar onSubmit={this.handleQuery}/>
      <ImageGallery query={this.state.query} />
      </>
    );
  }
}
