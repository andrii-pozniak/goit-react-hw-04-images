import { Component } from 'react';
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import {  ImageGalleryItem} from "./ImageGalleryItem/ImageGalleryItem";
import SearchBar  from "components/SearchBar/SearchBar";
// import { Loader } from "./Loader/Loader";
// import { Button } from "./Button/Button";
// import { Modal } from "./Modal/Modal";

export class App extends Component {
  q = 'flowers'
  state = {
    imageName: '',
   photo: [],
  //  q: 'flowers',
   page: 1,
  }
  handleFormSubmit = imageName => {
    this.setState({imageName})
  }
 

  render() {
    return (
      <>
      <SearchBar onSubmit={this.handleFormSubmit} />
      {/* <ImageGallery/>
      <ImageGalleryItem/>
      <Loader/>
      <Button/>
      <Modal/> */}
      </>
      

    );
  }
  
};
