import CreateGameForm from './CreateGameForm'
import React from 'react';
import ReactDOM from 'react-dom';

describe('<CreateGameForm />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreateGameForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})