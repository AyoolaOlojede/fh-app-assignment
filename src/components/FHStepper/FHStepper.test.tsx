import 'react-native';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import FHStepper from './FHStepper';
import SvgMock from '__mocks__/svgMock';


afterEach(cleanup);

const label='Step Counter';
const mockIcon = <SvgMock/>;
describe('FHStepper tests', () => { 
  const dummyCallbackFunction = jest.fn(() => null);
  const count =1
  const {getByA11yLabel } = render(<FHStepper onValueDecrease={dummyCallbackFunction} 
    onValueIncrease={dummyCallbackFunction} minValue={0} maxValue={3}
    incrementIcon={mockIcon} decrementIcon={mockIcon}
     counter={count} />);
  const stepCounter = getByA11yLabel(label);
    it('should render FHStepper successfully', () => {
        expect(stepCounter).toBeDefined();
     });
 })

