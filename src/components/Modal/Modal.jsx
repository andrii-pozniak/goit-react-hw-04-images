import { Component } from "react";
import s from "components/Modal/Modal.module.css";

export default class Modal extends Component {
 
  componentDidMount () {
    console.log(`Modal componentDidMount`)
    window.addEventListener('keydown', evt => {
      console.log(evt.code)
      if(evt.code === 'Escape') {
        
        this.props.onClickModal()
      }
    })
  }
  
  handleCloseModal = evt => {
    if(evt.currentTarget === evt.target) {
     
      this.props.onClickModal()
    }
  }

  render() {
   
    return (<div className={ s.Overlay } onClick={this.handleCloseModal}>
  <div className={s.Modal}  >
  {this.props.children}
  </div>
</div>)


  }
  
}


