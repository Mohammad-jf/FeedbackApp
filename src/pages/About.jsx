import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <Card>
        <div className="about">
            <h1>about this project</h1>
            <p>this is a React app to leave a feedback for a product or service</p>
            <p>version:1.0.0</p>
            <p>
                <Link to='/'>back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About