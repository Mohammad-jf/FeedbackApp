import React from 'react'
import Card from './../shared/Card';
import { useState } from 'react';
import Button from './../shared/Button';






const FeedBackForm = () => {
    //state
    const [text,setText] = useState('');
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

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us ?</h2>

            {/* reting select component */}

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