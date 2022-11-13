import {  ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import  s  from "components/ImageGallery/ImageGallery.module.css";

export const  ImageGallery = ({images, loadMore, modalImage}) => {

        return  <div >
                 <ul className={s.ImageGallery}>  
                 {images.map(({id, webformatURL, largeImageURL, tags}) => (
                     <ImageGalleryItem 
                     key={id} 
                     webformatURL={webformatURL}
                     largeImageURL={largeImageURL}
                     tags={tags}
                     onShowModal={modalImage}
                   />
                 ))} 
                
                <div className={s.LoadMore} >
                  {!(images.length < 12) && <Button onClick={loadMore} /> }   </div>
                </ul>
                
            </div>

        
    }

