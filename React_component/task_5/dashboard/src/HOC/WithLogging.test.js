import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging component tests', () => {
    test('console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        const WrappedComponent = WithLogging(() => <p />);

        const wrapper = mount(<WrappedComponent />);

        expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is mounted');

        wrapper.unmount();

        expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is going to unmount');

        consoleLogSpy.mockRestore();
    });

    test('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. Component Login is mounted and Component Login is going to unmount should be sent to the console', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        const WrappedLogin = WithLogging(Login);

        const wrapper = mount(<WrappedLogin />);

        expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');

        wrapper.unmount();

        expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');

        consoleLogSpy.mockRestore();
    });
});
