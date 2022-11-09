import PropTypes from 'prop-types';
import s from "components/Button/Button.module.css";

export const Button = ({onClick}) => {
return <button onClick = {() => onClick()} className={s.Button} type='button'>Load more</button>
};
Button.prototype = {
    onClick: PropTypes.func.isRequired,
}