import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const testHeader = 'This is a test header';
const testCards = 
[{ id: 'a', title: 'First card', content: 'lorem ipsum' },
{ id: 'b', title: 'Second card', content: 'lorem ipsum' }];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header={testHeader} cards={testCards}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List header={testHeader} cards={testCards} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

