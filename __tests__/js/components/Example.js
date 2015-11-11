//jest.dontMock('../../../src/js/components/Example');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Example from '../../../src/js/components/Example';

describe('Example', () => {

  it('is rendered', () => {

    let component = TestUtils.renderIntoDocument(<Example />);
    let node = ReactDOM.findDOMNode(component);

    expect(TestUtils.isCompositeComponent(component)).toBe(true);
    expect(TestUtils.isDOMComponent(node)).toBe(true);

  });

});
