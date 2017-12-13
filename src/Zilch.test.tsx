import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Zilch from './Zilch';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Zilch />, div);
});
