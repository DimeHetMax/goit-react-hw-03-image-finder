import React from 'react';
import {Searchbar} from "components/Searchbar/Searchbar"
import {ImageGallery} from "components/ImageGallery/ImageGallery"

export class App extends React.Component{
  state = {
    images:[],
    query: "",
    page: 1,
    isLoading: false,
    
  }
  componentDidUpdate(){

  }
  handleQuery =(value)=>{
    console.log(value)
    this.setState({query: value})
  }
  render() {
    console.log(this.state)
    return (
      <>
      <Searchbar onSubmit={this.handleQuery}/>
      <ImageGallery query={this.state.query} />
      {/* <div>
        {this.state.isLoading && (<h1>Loading content...</h1>)}
        {this.state.images.length>0 && (<p>We have array with images</p>)}
      </div> */}
      </>
    );
  }
}
