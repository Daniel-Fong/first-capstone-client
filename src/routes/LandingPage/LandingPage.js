import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page-div'>
                <header className='landing-header'>
                    <h1>Snapshot</h1>
                    <p>Keep track of score and state of your favorite games</p>
                    <Link to='/login'>
                        <button className='sign-in-button'>Sign In</button>
                    </Link>
                    {/* <Link to='/register'>
                        <button className='sign-up-button'>Sign Up</button>
                    </Link> */}
                </header>
                <section className='about'>
                    <h2>What is Snapshot?</h2>
                    <p className='left-align'>Snapshot is an application that is all about helping users keep score of their board games, card games and more.</p>
                    <h3>Not enough time to finish your game?</h3>
                    <p>Pick up where you left off. Games can be saved with scores and notes for each player.</p>
                </section>
                    <ul className='instructions-ul'>
                        <h2>Instructions</h2>
                        <li>
                            <h3>Login</h3>
                            <p>For this demo version of the app you are provided the following user:</p>
                            <section className='sample-user-section' >
                                <p>Name: alfonso</p>
                                <p>Password: pw</p>
                            </section>
                            <p>If you would like another user to experiment with, you may also use:</p>
                            <section className='sample-user-section' >
                                <p>Name: daniel</p>
                                <p>Password: password</p>
                            </section>
                        </li>
                        <li >
                            <h3>User Welcome Page</h3>
                            <p className='left-align'>Once logged in as a user, you'll be taken to your (or Alfonso's) welcome page. Here you can view your players list and game list.</p>
                            <p className='left-align'>From the games list and the players list respectively users can add and delete players and games.</p>
                        </li>
                        <li >
                            <h3>Game Page</h3>
                            <p className='left-align'>Clicking on any of the games in the game list will navigate you to that games page.</p>
                            <p className='left-align'>Here you can add players to the game, and add scores and notes to each player to help keep track of the game's progress!</p>
                            <p className='left-align'>If you finish playing the game or decide to take a break, your game will automatically be saved. The next time you log into your game you will be able to pick up right where you left off!</p>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default LandingPage;