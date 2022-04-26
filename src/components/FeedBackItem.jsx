import styled from 'styled-components';
import Card from '../shared/Card';
import {FaTimes} from 'react-icons/fa'



const FeedBackItem = ({item,deleteHandler}) => {  
 


  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>deleteHandler(item.id)} className="close">
          <FaTimes color='red'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}



export default FeedBackItem