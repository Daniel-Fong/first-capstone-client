import React from 'react'
import ReactDOM from 'react-dom';
import UserGamePage from './UserGamePage'
import renderer from 'react-test-renderer'

describe('<UserGamePage />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserGamePage match={{params: {gameid: 1}}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ('renders the ui as expected', () => {
        const mockUserGamePage= renderer
            .create(<UserGamePage match={{params: {gameid: 1}}}/>)
            .toJSON();
        expect(mockUserGamePage).toMatchSnapshot();
    })
})