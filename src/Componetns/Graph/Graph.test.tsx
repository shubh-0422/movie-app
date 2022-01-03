import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Graph from "./Graph";

configure({adapter : new Adapter() });

describe("Graph Component", ()=> {
    it("should render without crash", () => {
        const Component = <Graph />;
        const wrapper = mount(Component);
        expect(wrapper).toBeTruthy();
      });

      it('should render correctly with no props', () => {
        const wrapper = shallow(<Graph />);
        expect(wrapper).toMatchSnapshot();
      });
})