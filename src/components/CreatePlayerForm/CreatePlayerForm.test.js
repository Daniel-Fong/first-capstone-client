import CreatePlayerForm from './CreatePlayerForm'
import React from 'react';
import ReactDOM from 'react-dom';

describe('<CreatePlayerForm />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreatePlayerForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})