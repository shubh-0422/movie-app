import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from "./Header";

configure({adapter : new Adapter() });

describe("Header Component", ()=> {
    
    it("should render without crash", () => {
        const wrapper = mount(<Header />);
        expect(wrapper).toBeTruthy();
      });

      it("Find .header class name", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".header").exists()).toBeTruthy();
      });
})