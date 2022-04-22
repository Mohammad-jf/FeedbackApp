import React from 'react'
import FeedBackItem from './FeedBackItem';





const FeedBackList = ({feedBacks}) => {
    if(!feedBacks || feedBacks.length ===0){
        return <p>there is no feedbaack</p>
    }
  return (
      <div className='feedback-list'>
        {feedBacks.map((feedBack)=>
            <FeedBackItem 
            key={feedBack.id}
            rating={feedBack.rating}
            text={feedBack.text} 
            />)}
        </div>
  )
  
}

export default FeedBackList;