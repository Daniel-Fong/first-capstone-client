import Player from './Player'
import React from 'react';
import ReactDOM from 'react-dom';

describe('<Player />', () => {
    it ('renders without crashing when render=true', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player player={{id: 1, notes: 'its a player'}} render={true}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ('renders without crashing when render=false', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player player={{id: 1, notes: 'its a player'}} render={false}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})