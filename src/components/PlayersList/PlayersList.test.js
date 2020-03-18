import PlayersList from './PlayersList'
import React from 'react';
import ReactDOM from 'react-dom';

describe('<PlayersList />', () => {
    it ('renders without crashing when render=true', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayersList players={[{id: 1, name: 'testName'}]} render={true}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ('renders without crashing when render=false', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayersList players={[{id: 1, name: 'testName'}]} render={false}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})