import { Component } from "react";
import axios from "axios";

import  s  from "components/ImageGallery/ImageGallery.module.css";

const BASE_URL = `https://pixabay.com/api/`

export default class ImageGallery extends Component {
    
    async componentDidMount () {
        // const option = {
        //   key: `30111501-80dfaf6bf0e872b32b653e61a`,
              
        //   image_type: `photo`,
        //   orientation: `horizontal`,
        //   safesearch: true
        //  }
        const response = await axios.get(`${BASE_URL}?key=30111501-80dfaf6bf0e872b32b653e61a&q=${this.q}&image_type=photo`);
        this.setState({photo: response.data.hits});
        // fetch(`${BASE_URL}?key=30111501-80dfaf6bf0e872b32b653e61a&q=flowers&image_type=photo`)
        // .then(res => res.json()).then(photo => this.setState({photo: photo.data.hits}));
        
      }

    render() {
        return <ul className={s.ImageGallery}>
        <li></li>
       </ul>
    }

};