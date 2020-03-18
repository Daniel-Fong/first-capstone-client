import PlayerOption from './PlayerOption'
import React from 'react';
import ReactDOM from 'react-dom';

describe('<PlayerOption />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayerOption player={{id:1, name:'daniel'}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})