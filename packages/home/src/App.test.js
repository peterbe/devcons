import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import { Home, About, SignIn, PageNotFound } from './Components';

it('renders home App without crashing', () => {
  shallow(<App />);
});

it('renders Home by default', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
  expect(wrapper.find(PageNotFound)).toHaveLength(0);
});

it('renders PageNotFound if no match', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/psjkfpajksfposdjkf']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(0);
  expect(wrapper.find(PageNotFound)).toHaveLength(1);
});

// XXX This fails!
// Nasty webpack error.
// it('renders Normandy home app', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/normandy']}>
//       <App />
//     </MemoryRouter>
//   );
//   // expect(wrapper.find(Home)).toHaveLength(1);
//   // expect(wrapper.find(PageNotFound)).toHaveLength(0);
// });
