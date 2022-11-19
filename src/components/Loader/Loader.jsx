import { RotatingLines } from  'react-loader-spinner'
import s from "components/Loader/Loader.module.css";

export const Loader = (isLoader) => {
    return <div className={s.Loading}> <RotatingLines         
    margin-right="auto"
    margin-left="auto"
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={isLoader}
   /></div>
}
