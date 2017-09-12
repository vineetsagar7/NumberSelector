import React from 'react';
import ReactDOM from 'react-dom';
import '../public/button.css';
import ToggleButtonGroup from './ToggleButtonGroup';

ReactDOM.render(
    <ToggleButtonGroup startYear={1926} endYear={2016} fieldName={document.getElementById('txtYear')}/>,
    document.getElementById('root')
);

