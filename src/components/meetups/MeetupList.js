import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  console.log("🚀 ~ file: MeetupList.js:4 ~ MeetupList ~ props:", props)
  return (
    <div>
      {props.meetup.map((meetup) => {
        return <><MeetupItem key={meetup.id} meetup={meetup} /> <br /><br /></>;
      })}
    </div>
  );
};

export default MeetupList;
