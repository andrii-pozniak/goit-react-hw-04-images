import { Component } from "react";
import s from "components/Modal/Modal.module.css";

export default class Modal extends Component {
 
  
  handleCloseModal = evt => {
    if(evt.currentTarget === evt.target) {
      console.log(evt.currentTarget)
      console.log(evt.target)

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


