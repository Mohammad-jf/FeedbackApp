//components
import Header from "./components/Header";
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
//hooks
import { useState } from "react";
//data
import { feedBackData } from './data/feedbackData';




function App() {
  //app level state
  const [feedBacks,setFeedBacks] = useState(feedBackData);

  //feedback delete handler
  const deleteHandler = (id)=>{
    if(window.confirm('are you sure you want to delete??')){
      setFeedBacks(feedBacks.filter((item)=>item.id !== id));
    }
  }

  
  return (
    <>
      <Header/>
        <div className="container">

          <FeedBackForm/>
          <FeedBackStats feedBacks={feedBacks}/>
          <FeedBackList  feedBacks={feedBacks}  deleteHandler={deleteHandler}/>
          
          </div>  
    </>
  )
}

export default App;
 