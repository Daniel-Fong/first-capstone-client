import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page-div'>
                <header>
                    <h1>Snapshot</h1>
                    <p>Keep track of score and state of your favorite games</p>
                    <Link to='/login'>
                        <button className='sign-in-button'>Sign In</button>
                    </Link>
                    <Link to='/register'>
                        <button className='sign-up-button'>Sign Up</button>
                    </Link>
                </header>
                <section className='about'>
                    <h2>About</h2>
                    <p>Instructions</p>
                    <div className='image-placeholder'><p>Image Placeholder</p></div>
                    <p>Some text about games and the app and how you like games and how the app is perfect for you because of that wow what a great fit</p>
                </section>
            </div>
        )
    }
}

export default LandingPage;