import './Card.css';

function Card(props){
    const classes='card '+props.className; // add all the classname with card
    return <div className={classes}>{props.children}</div> // props children is must used to wrap the content into card tag
}
export default Card;