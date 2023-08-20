import Card from '../ui/Card';

const MeetupItem = (props)=>{
    return (<Card>
        <img src={props.meetup.image} height='250' width='250' alt={props.meetup.title} /> 
        <div>
            <h2>{props.meetup.title}</h2>
            <ul>
                <li>{props.meetup.description}</li>
                <li>{props.meetup.address}</li>
            </ul>
        </div>
        </Card>)

}

export default MeetupItem;