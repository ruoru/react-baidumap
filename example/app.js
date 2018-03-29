import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';

import Location from './views/Location';

render(
    <Location />,
    document.getElementById('root'),
);