import React from 'react'
import ReactDOM from 'react-dom';
import UserWelcomePage from './UserWelcomePage'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<UserWelcomePage />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <Router>
            <UserWelcomePage match={{params: {gameid: 1}}}/>
        </Router>    
            , div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ('renders the ui as expected', () => {
        const mockUserWelcomePage= renderer
            .create(
            <Router>
                <UserWelcomePage match={{params: {gameid: 1}}}/>
            </Router>)
            .toJSON();
        expect(mockUserWelcomePage).toMatchSnapshot();
    })
})