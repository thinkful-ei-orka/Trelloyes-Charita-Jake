import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';

const testTitle = "Test Title";
const testContent = "This is test content";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title={testTitle} content={testContent} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card title={testTitle} content={testContent} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

