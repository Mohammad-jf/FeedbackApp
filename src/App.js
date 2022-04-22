//components
import Header from "./components/Header";
import FeedBackList from './components/FeedBackList';

//hooks
import { useState } from "react";


//data
import { feedBackData } from './data/feedbackData';



function App() {
  //app level state
  const [feedBacks,setFeedBacks] = useState(feedBackData);


  return (
    <>
      <Header/>
        <div className="container">
            <FeedBackList feedBacks={feedBacks}/>
        </div>
    </>
  )
}

export default App;
 