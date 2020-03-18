import Score from './Score'
import React from 'react';
import ReactDOM from 'react-dom';

describe('<Score />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Score score={{score: 5, note: 'blah'}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})