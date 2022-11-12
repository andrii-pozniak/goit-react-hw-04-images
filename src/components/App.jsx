import { Component } from 'react';
import {Loader} from "components/Loader/Loader";

import  ImageGallery  from "./ImageGallery/ImageGallery";
import SearchBar  from "components/SearchBar/SearchBar";

import Modal from "components/Modal/Modal";


export class App extends Component {
 
  state = {
    sizeImage:null,
    showModal: false,
    imageName: '',
    isLoader: false,
    
   
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
  showLoading = isLoader => {
    this.setState({isLoader})
    console.log('isLoader', this.setState({isLoader}) )
  }
  
  render() {
    const{showModal, imageName, largeImage, tags, isLoader } = this.state
    
    return (
      <>
       <SearchBar onSubmit={this.handleFormSubmit} />
       
       <ImageGallery imageName={imageName} 
       modalImage={this.toggleModal} showLoading={this.showLoading}/> 
       {showModal &&  <Modal onClickModal={this.toggleModal}>
               <img src={largeImage} alt={tags} />
       </Modal>}
       {isLoader && <Loader  isLoader={isLoader}/>}
     
      </>
      
    );
  }
  
};
