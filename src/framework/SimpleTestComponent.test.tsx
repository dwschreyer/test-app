import React from 'react';
import ReactDOM from "react-dom";
import SimpleTestComponent from "./SimpleTestComponent";

it('Generic Test Component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SimpleTestComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });