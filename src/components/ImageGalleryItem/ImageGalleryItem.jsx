import PropTypes from 'prop-types';
import s from "components/ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({images, onShowModal}) => {
   
    return images.map( ({id, webformatURL, largeImageURL, tags}) =>  (<li key={id} className={s.ImageGalleryItem}>
    <img onClick={() => onShowModal(largeImageURL) } src={webformatURL} alt={tags} width='420px' height='250px'/>
  </li>) )
};
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),

   
}