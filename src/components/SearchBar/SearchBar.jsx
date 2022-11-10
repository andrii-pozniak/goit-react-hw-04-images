import { Component } from 'react';
import s from "components/SearchBar/SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

export default class SearchBar extends Component {

    state = {
        imageName: '',
        
        page: 1,
    }

    handleNameChange = event => {
    this.setState({imageName: event.currentTarget.value.toLowerCase()});
        
    };

    handleSubmit = event => {

        event.preventDefault();

        if(this.state.imageName.trim() === '') {
            alert('do not name image');
            return;
        }

        this.props.onSubmit(this.state.imageName);
        this.setState({imageName: '',  page: 1,});
    }

    render()

    {return (<header className={ s.SearchBar }>
<form onSubmit={this.handleSubmit} className={s.SearchForm}>
  

  <input
    className={s.SearchForm_input}
    type="text"
   
    placeholder="Search images and photos"
    value={this.state.imageName}
    onChange={this.handleNameChange}
  />
  <button type="submit" className={s.SearchForm_button}>
  <IoIosSearch/>
   
  </button>
</form>
</header>
)}
};