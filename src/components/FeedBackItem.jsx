import styled from 'styled-components';
import Card from '../shared/Card';



const FeedBackItem = ({text,rating}) => {

  return (
    <Card>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
    </Card>
  )
}



export default FeedBackItem