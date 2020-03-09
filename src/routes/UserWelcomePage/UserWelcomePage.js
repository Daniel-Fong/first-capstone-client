import React from 'react'

class UserWelcomePage extends React.Component {
    render() {
        return (
            <div class='user-welcome-div'>
                <header>
                    <ul class='navbar'>
                        <li>Home</li>
                        <li>My Games</li>
                        <li>Create New Game</li>
                    </ul>
                    <h2>Welcome User</h2>
                </header>
                <main>
                    <button>Start a New Game</button>
                    <h3>My Saved Games</h3>
                    <label>Sort By</label>
                    <select>
                        <option>Date Old to New</option>
                        <option>Date New to Old</option>
                    </select>
                    <label>Search</label>
                    <input />
                    <ul>
                        <li>Game Save Name
                            <div class='image-placeholder-2'><p>Image Placeholder</p></div>
                        </li>
                        <li>Game Save Name
                            <div class='image-placeholder-2'><p>Image Placeholder</p></div>
                        </li>
                        <li>Game Save Name
                            <div class='image-placeholder-2'><p>Image Placeholder</p></div>
                        </li>
                        <li>Game Save Name
                            <div class='image-placeholder-2'><p>Image Placeholder</p></div>
                        </li>
                    </ul>
                </main>
            </div>
        )
    }
}

export default UserWelcomePage;