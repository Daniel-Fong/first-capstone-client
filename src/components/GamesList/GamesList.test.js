import GamesList from './GamesList'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<GamesList />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <Router>
            <GamesList games={[{id: 1, name: 'catan'}]} userId={1} />
        </Router>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})