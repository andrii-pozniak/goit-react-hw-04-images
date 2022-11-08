import { Component } from "react";
import axios from "axios";
import {  ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import  s  from "components/ImageGallery/ImageGallery.module.css";
import { RotatingLines } from  'react-loader-spinner'


const BASE_URL = `https://pixabay.com/api/`
const KEY = '30111501-80dfaf6bf0e872b32b653e61a'

export default class ImageGallery extends Component {
    state = {    
        page: 1,
        images: [],
        isLoading: false,
        showModal: false,
        error: null,
        status: 'idle',
    }
    onShowModal = () => {
        this.props.modalImage(this.state.showModal);
        

        console.log(this.props.modalImage())
    }
   
    loadMore = () => {
        this.setState ( prevState => ({
          page: prevState.page +1,
        }))
      }
     
    async componentDidUpdate (prevPops, prevState) {
      
        if(prevState.page !== this.state.page || prevPops.imageName !== this.props.imageName) {
            this.setState({status: 'pending'})

            try {
                const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${this.props.imageName}&orientation=horizontal&page=${this.state.page}&image_type=photo`);
                this.setState({images: response.data.hits, status: 'resolve' });
             
            } catch (error) {this.setState({error, status: 'rejected'})
            this.props.modalImage()
         
            }       
        }
    }

    render() {
        const { status, error,images} = this.state;
        const {modalImage} = this.props

        if(status ===  'pending' ) {
            return <div> <RotatingLines
          
            margin-right="auto"
            margin-left="auto"
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          /></div>
        }

        if(status === 'rejected'){
            return <h1>{error.massage}</h1>
        }

        if(status === 'resolve'){
           
            return  <ul className={s.ImageGallery}>        
                <ImageGalleryItem images={images} onShowModal={modalImage}/> 
                <div className={s.LoadMore}><Button onClick={this.loadMore}/></div>
             </ul>
            
          
           
           
        }

        
    }

};