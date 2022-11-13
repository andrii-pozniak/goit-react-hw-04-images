import { Component } from 'react';
import {Loader} from "components/Loader/Loader";
import axios from "axios";
import  {ImageGallery}  from "./ImageGallery/ImageGallery";
import SearchBar  from "components/SearchBar/SearchBar";

import Modal from "components/Modal/Modal";

const BASE_URL = `https://pixabay.com/api/`
const KEY = '30111501-80dfaf6bf0e872b32b653e61a'

export class App extends Component {
 
  state = {
    sizeImage:null,
    showModal: false,
    imageName: '',
    isLoader: false,
    status: 'pending',
    page: 1,
    images: []
  }

  handleFormSubmit = (imageName, images) => {
    this.setState({imageName})
    this.setState({images})
    console.log('images', images)
    console.log('imageName', imageName)
  }
  async componentDidUpdate (prevPops, prevState) {
   
        if(prevState.page !== this.state.page || prevState.imageName !== this.state.imageName ) {
         
          this.setState({isLoader: true})
            this.setState({
                status: 'pending',
               })
        
            try {
                const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${this.state.imageName}&orientation=horizontal&page=${this.state.page}&per_page=12&image_type=photo`);
            this.setState({images: [...this.state.images, ...response.data.hits, ], 
                status: 'resolve',
                isLoader: false
             });
              
            } catch (error) {this.setState({error, status: 'rejected'})
             
            }finally {
                this.setState({isLoader: false})
            }
            
            }     
           
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
  loadMore = () => {
    this.setState(prevState => ({page: prevState.page+1}))
  }
  
  render() {
    const{showModal, largeImage, tags, isLoader, images} = this.state
    return (
      <>
       <SearchBar onSubmit={this.handleFormSubmit} />
       
       <ImageGallery images={images} loadMore={this.loadMore}
       modalImage={this.toggleModal} showLoading={this.showLoading}/> 
       {showModal &&  <Modal onClickModal={this.toggleModal}>
               <img src={largeImage} alt={tags} />
       </Modal>}
       {isLoader && <Loader />}
     
      </>
      
    );
  }
  
};
