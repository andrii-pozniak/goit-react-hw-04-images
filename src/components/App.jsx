import { Component } from 'react';
import  ImageGallery  from "./ImageGallery/ImageGallery";
// import {  ImageGalleryItem} from "./ImageGalleryItem/ImageGalleryItem";
import SearchBar  from "components/SearchBar/SearchBar";
// import { Loader } from "./Loader/Loader";
// import { Button } from "./Button/Button";
// import { Modal } from "./Modal/Modal";

export class App extends Component {
 
  state = {
    imageName: '',
   
  }
  handleFormSubmit = imageName => {
    this.setState({imageName})
  }
 

  render() {
    return (
      <>
      <SearchBar onSubmit={this.handleFormSubmit} />
       <ImageGallery imageName={this.state.imageName}/> 
      {/* <ImageGalleryItem />
      <Loader/>
      <Button/>
      <Modal/> */} 
      </>
      

    );
  }
  
};
