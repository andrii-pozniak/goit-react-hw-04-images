import { useState } from 'react';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import s from "components/SearchBar/SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({onSubmit}) {
  
      const [imageName, setImageName] = useState('');
      
    const handleNameChange = event => {
      setImageName( event.currentTarget.value.toLowerCase());
        
    };

    const handleSubmit = event => {
      
        event.preventDefault();
       
        if(imageName.trim() === '') {
          toast.error('do not name image',
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
            return;
        }
        
        setImageName( '')       
        onSubmit(imageName)
    }

  

    return (<header className={ s.SearchBar }>
<form onSubmit={handleSubmit} className={s.SearchForm}>
  
  <input
    className={s.SearchForm_input}
    type="text"
   
    placeholder="Search images and photos"
    value={imageName}
    onChange={handleNameChange}
  />
  <button type="submit" className={s.SearchForm_button}>
  <IoIosSearch/>
   
  </button>
</form>
</header>
)
};