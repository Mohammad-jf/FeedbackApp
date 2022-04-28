import React from 'react'
import Card from './../shared/Card';
import Button from './../shared/Button';
import RatingSelect from './RatingSelect';
import { useState } from 'react';






const FeedBackForm = ({addFeedBack}) => {
    //state
    const [text,setText] = useState('');
    const [rating,setRating] = useState(10);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');
    const handleTextChange = (e)=>{
        setText(e.target.value);
        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('text must be at least 10 character')
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }   
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedBack = {
                text:text,
                rating : rating
            }

            addFeedBack(newFeedBack);
            setText('');
        }

    }



  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us ?</h2>

            <RatingSelect select={(rating)=>setRating(rating)}/>

            <div className="input-group" >
                <input onChange={handleTextChange} value={text} type="text" placeholder='write a view'/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>

    </Card>
  )
}

export default FeedBackForm