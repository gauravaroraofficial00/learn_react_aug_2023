import classes from './Card.module.css';
const Card = (props )=>{
return <div  className={classes.customBorder}>{props.children}</div>;
}

export default Card;