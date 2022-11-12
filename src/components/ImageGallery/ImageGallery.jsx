import { Component } from "react";
import axios from "axios";
import {  ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import  s  from "components/ImageGallery/ImageGallery.module.css";

const BASE_URL = `https://pixabay.com/api/`
const KEY = '30111501-80dfaf6bf0e872b32b653e61a'

export default class ImageGallery extends Component {
    state = {    
        page: 1,
        images: [],
        isLoader: false,
        showModal: false,
        error: null,
        status: 'idle',
      
    }
     
    onShowModal = () => {
        this.props.modalImage(this.state.showModal);
     
    }
   
 async componentDidUpdate (prevPops, prevState) {
    if(prevState.isLoader !== this.state.isLoader){
        console.log('prevState.isLoader', prevState.isLoader)
        console.log('this.state.isLoader', this.state.isLoader)
        this.setState({isLoader: true})
    }
        
        if(prevState.page !== this.state.page || prevPops.imageName !== this.props.imageName ) {
            this.setState({
                status: 'pending',
               })
        
            try {
                const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${this.props.imageName}&orientation=horizontal&page=${this.state.page}&per_page=12&image_type=photo`);
            this.setState({images: [...response.data.hits, ...this.state.images,], 
                status: 'resolve',
                isLoader: false
             });
               console.log(this.state.images)
               console.log(response.data.hits)
        
               
            } catch (error) {this.setState({error, status: 'rejected'})
            this.props.modalImage()
              
            }finally {
                this.setState({isLoader: false})
            }
            this.props.showLoading(this.state.isLoader)
                
            }     
           
        }
      
    loadMore = () => {
        this.setState ( prevState => ({
          page: prevState.page +1,
          
        }))
        
      }
     
    render() {
        const { status, images} = this.state;
        const {modalImage} = this.props

       

        if(status === 'resolve'){
           
            return  <div >
                 <ul className={s.ImageGallery}>  
                 {images.map(({id, webformatURL, largeImageURL, tags}) => (
                     <ImageGalleryItem 
                     key={id} 
                     webformatURL={webformatURL}
                     largeImageURL={largeImageURL}
                     tags={tags}
                     onShowModal={modalImage}/>
                 ))} 
                
                <div className={s.LoadMore} >
                  {!(images.length < 12) && <Button onClick={this.loadMore} /> }   </div>
                </ul>
                
            </div>
          
        }
     
    }

};