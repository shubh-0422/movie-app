import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MovieCard from "./MovieCard";

configure({adapter : new Adapter() });

describe("MovieCard Component", ()=> {
    it("should render without crash", () => {
        const wrapper = mount(<MovieCard />);
        expect(wrapper).toBeTruthy();
      });

      it("Find .cards class name", () => {
        const wrapper = shallow(<MovieCard />);
        expect(wrapper.find(".cards").exists()).toBeTruthy();
      });

})