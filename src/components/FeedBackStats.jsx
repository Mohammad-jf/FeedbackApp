import React from 'react'

const FeedBackStats = ({feedBacks}) => {
//calculating rating average
let average = feedBacks.reduce((acc,cur)=>{
    return acc + cur.rating 
},0) / feedBacks.length;

//ronud the average number
average = average.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className='feedback-stats'>
        <h4>{feedBacks.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedBackStats