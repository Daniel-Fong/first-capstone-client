import React from 'react'
import ReactDOM from 'react-dom';
import ScoresList from './ScoresList'
import renderer from 'react-test-renderer'

describe('<ScoresList />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ScoresList />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ('renders the ui as expected', () => {
        const mockScoresList= renderer
            .create(<ScoresList />)
            .toJSON();
        expect(mockScoresList).toMatchSnapshot();
    })
})