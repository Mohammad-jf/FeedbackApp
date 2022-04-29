import React from 'react'
import FeedBackItem from './FeedBackItem';
import { motion,AnimatePresence } from 'framer-motion';






const FeedBackList = ({feedBacks,deleteHandler}) => {
    if(!feedBacks || feedBacks.length ===0){
        return <p>there is no feedbaack</p>
    }

    return (
      <div className='feedback-list'>
        <AnimatePresence>
            {feedBacks.map((item)=>
            <motion.div 
            key={item.id}
            initial={{opacity:0,}}
            animate={{opacity:1,transition:{duration:1},}}
            exit={{opacity:0}}>

                  <FeedBackItem 
                    deleteHandler={deleteHandler}
                    key={item.id}
                    item={item}
                  />

            </motion.div>
            )}
        </AnimatePresence>
      </div>
  )
  
    

  // return (
  //     <div className='feedback-list'>
  //       {feedBacks.map((item)=>
  //           <FeedBackItem 
  //           deleteHandler={deleteHandler}
  //           key={item.id}
  //           item={item}
          
  //           />)}
  //       </div>
  // )
  
}

export default FeedBackList;