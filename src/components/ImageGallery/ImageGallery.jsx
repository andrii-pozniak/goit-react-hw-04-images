import { Component } from "react";
import axios from "axios";

import  s  from "components/ImageGallery/ImageGallery.module.css";

const BASE_URL = `https://pixabay.com/api/`

export default class ImageGallery extends Component {
    state = {
        images: null,
        isLoading: false
    }
    
    async componentDidUpdate (prevPops, prevState) {
        
       
        if(prevPops.imageName !== this.props.imageName) {
            this.setState({isLoading: true})
            const response = await axios.get(`${BASE_URL}?key=30111501-80dfaf6bf0e872b32b653e61a&q=${this.props.imageName}&image_type=photo`);
        this.setState({images: response.data.hits, isLoading: false, });
        }
        
      }

    render() {
        const {isLoading} = this.state;
        return ( <><div>{isLoading && <p>Loading...</p> }</div>
        <ul className={s.ImageGallery}>
        <li></li>
       </ul></>)
        
    }

};