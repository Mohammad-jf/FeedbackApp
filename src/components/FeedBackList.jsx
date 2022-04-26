import React from 'react'
import FeedBackItem from './FeedBackItem';
import { FcStart } from './../../node_modules/react-icons/fc/index.esm';





const FeedBackList = ({feedBacks,deleteHandler}) => {
    if(!feedBacks || feedBacks.length ===0){
        return <p>there is no feedbaack</p>
    }
  return (
      <div className='feedback-list'>
        {feedBacks.map((item)=>
            <FeedBackItem 
            deleteHandler={deleteHandler}
            key={item.id}
            item={item}
          
            />)}
        </div>
  )
  
}

export default FeedBackList;