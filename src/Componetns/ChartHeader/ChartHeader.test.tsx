import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ChartHeader,{PerformanceHeader} from "./ChartHeader";

configure({adapter : new Adapter() });

describe("ChartHeader Component", ()=> {
    it("should render without crash", () => {
        const Component = <ChartHeader />;
        const wrapper = mount(Component);
        expect(wrapper).toBeTruthy();
      });

      it("Find container class name", () => {
        const wrapper = shallow(<ChartHeader />);
        expect(wrapper.find(".metrics-container").exists()).toBeTruthy();
      });

      it('should render correctly with no props', () => {
        const wrapper = shallow(<ChartHeader />);
        expect(wrapper).toMatchSnapshot();
      });
})

describe("PerformanceHeader Component", ()=> {
    it("should render without crash", () => {
        const Component = <PerformanceHeader value="" title='' changePercentage={0} />;
        const wrapper = mount(Component);
        expect(wrapper).toBeTruthy();
      });

      it("Find container class name", () => {
        const wrapper = shallow(<PerformanceHeader value="" title='' changePercentage={0} />);
        expect(wrapper.find(".container").exists()).toBeTruthy();
      });

      it('should render correctly with no props', () => {
        const wrapper = shallow(<PerformanceHeader value="" title='' changePercentage={0} />);
        expect(wrapper).toMatchSnapshot();
      });
})