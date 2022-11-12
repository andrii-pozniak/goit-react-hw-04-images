import { RotatingLines } from  'react-loader-spinner'


export const Loader = ({isLoader}) => {
    console.log('isLoader', {isLoader})
    return <div > <RotatingLines         
    margin-right="auto"
    margin-left="auto"
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={isLoader}
   /></div>
}
