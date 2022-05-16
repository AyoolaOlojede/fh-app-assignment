import 'react-native';
import React from 'react';
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react-native';
import FHButton from './FHButton';
import SvgMock from '__mocks__/svgMock';


afterEach(cleanup);
const plusIcon = <SvgMock/>;
const testId='Add Button';
describe('FHAddButton tests', () => { 
  const {getByTestId } = render(<FHButton title='Search' leftIcon={plusIcon} testID={testId} />);
  const btnAdd = getByTestId(testId);  
     it('should render FHAddButton successfully', () => {
        expect(btnAdd).toBeDefined();
     });

     it('should render FHAddButton correctly', () => {
      expect(btnAdd).toMatchSnapshot();
     });

     it('should render the correct title', () => {
      const {getByText } = render(<FHButton title='Search' leftIcon={plusIcon} testID={testId}/>);
      expect(getByText('Search')).toBeTruthy();
    });

     
     it('should fire the assigned event on press', async () => {
      const onPressMock = jest.fn();
      const eventData = {
        nativeEvent: {
          pageX: 20,
          pageY: 30,
        },
      };
      const {getByText } = render(<FHButton title='Search' 
      leftIcon={plusIcon} onPress={onPressMock} />);
      fireEvent.press(getByText('Search'), eventData);
      expect(onPressMock).toHaveBeenCalledWith(eventData);
    });
 })

