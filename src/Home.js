import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <center>
                <ul>
                    <h3>Welcome to Home Page</h3>
                    <Link to="/about"><h4>About</h4></Link>
                    <Link to="/headtail"><h4>HeadTail</h4></Link>
                </ul>
            </center>
        </div>
    )
    }

export default Home
