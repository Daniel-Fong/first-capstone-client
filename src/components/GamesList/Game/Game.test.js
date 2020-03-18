import Game from './Game'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Game />', () => {
    it ('renders a game without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <Router>
        <Game key={1} game={{name: 'catan', id: 1}} userId={1}/>
        </Router>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})