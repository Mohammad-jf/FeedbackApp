import React from 'react'




const Header = ({text,bgColor,textColor}) => {
const headerStyle = {
    backgroundcolor:bgColor,
    color:textColor

}

  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}


Header.defaultProps = {
    text:'FeedBack App',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}


export default Header