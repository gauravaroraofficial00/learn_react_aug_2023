import Card from '../ui/Card';
import classes from './MeetupForm.module.css'
import { useRef } from 'react';
const MeetupForm = ()=>{


    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

   



    const formHandler = (event)=>{
        event.preventDefault();
        const data ={
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value
        }
        console.log("🚀 ~ file: MeetupForm.js:18 ~ MeetupForm ~ data:", data)
        

        

    }


    return (<Card>
        <form className={classes.form} onSubmit={formHandler}>
            <div className={classes.control}>
                <label htmlFor="title">title</label>
                <input type="text"  id="title" name="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">image</label>
                <input type="text"  id="image" name="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">address</label>
                <input type="text"  id="address" name="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">description</label>
                <input type="text"  id="description" name="description" ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}>
               <button>Add meetup</button>
            </div>

        </form>
        </Card>)
}

export default MeetupForm;