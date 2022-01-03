// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

configure({adapter : new Adapter() });

describe("App Component", ()=> {
    // it("should render without crash", () => {
    //     const Component = <App />;
    //     const wrapper = mount(Component);
    //     expect(wrapper).toBeTruthy();
    //   });

      it("Find container class name", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".container").exists()).toBeTruthy();
      });

      it('should render correctly with no props', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
      });
})