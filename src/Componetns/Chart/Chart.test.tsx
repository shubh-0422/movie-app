import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Chart from "./Chart";

configure({adapter : new Adapter() });

describe("Chart Component", ()=> {
    it("should render without crash", () => {
        const Component = <Chart />;
        const wrapper = mount(Component);
        expect(wrapper).toBeTruthy();
      });

      it("Find container class name", () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(".container").exists()).toBeTruthy();
      });

      it('should render correctly with no props', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper).toMatchSnapshot();
      });
})