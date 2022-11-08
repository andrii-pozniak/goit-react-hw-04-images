import s from "components/ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({images, onShowModal}) => {
    console.log('onShowModal', onShowModal)
    return images.map( ({id, webformatURL, largeImageURL, tags}) =>  (<li key={id} className={s.ImageGalleryItem}>
    <img onClick={() => onShowModal(largeImageURL, tags) } src={webformatURL} alt={tags} width='420px' height='250px'/>
  </li>) )
};