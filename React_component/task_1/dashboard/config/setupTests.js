// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('');
global.window = dom.window;
global.document = dom.window.document;
global.alert = jest.fn();

configure({ adapter: new Adapter() });