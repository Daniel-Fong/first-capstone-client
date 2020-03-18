import LoginForm from './LoginForm'
import React from 'react';
import ReactDOM from 'react-dom';

describe('<LoginForm />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoginForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})