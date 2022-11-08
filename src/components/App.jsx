import { Component } from 'react';
import  ImageGallery  from "./ImageGallery/ImageGallery";
import SearchBar  from "components/SearchBar/SearchBar";
// import { Loader } from "./Loader/Loader";

import Modal from "components/Modal/Modal";


export class App extends Component {
 
  state = {
    sizeImage:null,
    showModal: false,
    imageName: '',
   
  }
  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

  toggleModal = (largeImageURL, tags) => {
    this.setState(({showModal, largeImage, name}) => ({
      showModal: !showModal,
      largeImage: largeImageURL,
      name: tags }))
  }

  render() {
    const{showModal, imageName, largeImage, tags} = this.state
    
    return (
      <>
       <SearchBar onSubmit={this.handleFormSubmit} />
       <ImageGallery imageName={imageName} modalImage={this.toggleModal}/> 
       {showModal &&  <Modal onClickModal={this.toggleModal}>
               <img src={largeImage} alt={tags} />
       </Modal>}
      
      {/* 
      <Loader/>
      
      <Modal/> */} 
      </>
      

    );
  }
  
};
