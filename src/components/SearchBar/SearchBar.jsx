import { Component } from 'react';
import s from "components/SearchBar/SearchBar.module.css";

export default class SearchBar extends Component {

    state = {
        imageName: ''
    }

    handleNameChange = event => {
    this.setState({imageName: event.currentTarget.value.toLowerCase()});
        console.log(event.currentTarget.value)
    };

    handleSubmit = event => {

        event.preventDefault();

        if(this.state.imageName.trim() === '') {
            alert('do not name image');
            return;
        }

        this.props.onSubmit(this.state.imageName);
        this.setState({imageName: ''});
    }

    render()

    {return (<header className={s.SearchBar}>
<form onSubmit={this.handleSubmit} className={s.SearchForm}>
  <button type="submit" className={s.SearchForm_button}>
    <span className={s.SearchForm_button_label}>Search</span>
  </button>

  <input
    className={s.SearchForm_input}
    type="text"
    // autocomplete="off"
    // autofocus
    placeholder="Search images and photos"
    value={this.state.imageName}
    onChange={this.handleNameChange}
  />
</form>
</header>
)}
};