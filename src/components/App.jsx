import { useState, useEffect } from 'react';
import {Loader} from "components/Loader/Loader";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import  {ImageGallery}  from "./ImageGallery/ImageGallery";
import SearchBar  from "components/SearchBar/SearchBar";

import Modal from "components/Modal/Modal";

const BASE_URL = `https://pixabay.com/api/`
const KEY = '30111501-80dfaf6bf0e872b32b653e61a'

export default function App () {
 
    const [showModal, setShowModal] = useState(false);
    const [imageName, setImageName] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const [status, setStatus] = useState('idle');
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [largeImage, setLargeImage] = useState('');
    const [name, setName] = useState('')


  const handleFormSubmit = (imageName) => {
    setImageName(imageName)
    setImages([])
    console.log('status', status)
   
  }
  
  useEffect (() => {
   
    async function fetchImage() {
      try {
        if(imageName === '' ){
          return;
        }
        setIsLoader (true)
          
          const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${imageName}&orientation=horizontal&page=${page}&per_page=12&image_type=photo`);
        setImages( prevState => [...prevState, ...response.data.hits, ]);
        
        setStatus('resolve');
        setIsLoader (false)
        
     
     } catch(error) {
      setStatus('rejected');
      
      
    } finally {
      setIsLoader(false)
     
    }
    }
   
        fetchImage() 
  }, [ imageName, page] )

  const toggleModal = (largeImageURL, tags) => {
    
      setShowModal(!showModal);
      setLargeImage(largeImageURL);
      setName(tags);
    }
   
  const showLoading = isLoader => {
    setIsLoader(isLoader)
    
  }
  const loadMore = () => {
    setPage( page+1)
  }
  
    return (
      <>
       <SearchBar onSubmit={handleFormSubmit} />
       
       <ImageGallery images={images} loadMore={loadMore}
       modalImage={toggleModal} showLoading={showLoading}/> 
       {showModal &&  <Modal onClickModal={toggleModal}>
               <img src={largeImage} alt={name} />
       </Modal>}
       {isLoader && <Loader />}
     
       <ToastContainer/>
      </>
      
    );
 
};
