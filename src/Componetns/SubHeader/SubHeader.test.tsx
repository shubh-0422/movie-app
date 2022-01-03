import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SubHeader from "./SubHeader";

configure({adapter : new Adapter() });

describe("Sub Header Component", ()=> {
    it("should render without crash", () => {
        const wrapper = mount(<SubHeader name={""}/>);
        expect(wrapper).toBeTruthy();
      });

      it("Find .header class name", () => {
        const wrapper = shallow(<SubHeader  name={""} />);
        expect(wrapper.find(".header").exists()).toBeTruthy();
      });
})