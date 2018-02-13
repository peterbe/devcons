import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For extra convenient assertions
// https://github.com/FormidableLabs/enzyme-matchers#assertions
import 'jest-enzyme';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.sessionStorage = sessionStorageMock;
