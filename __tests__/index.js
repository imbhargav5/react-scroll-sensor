import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ScrollIndicator from "../lib";

configure({ adapter: new Adapter() });

const mountScrollIndicator = renderFn => {
  const defaultRender = () => {
    return <p>Hello</p>;
  };
  const render = renderFn || defaultRender;
  return mount(<ScrollIndicator>{render}</ScrollIndicator>);
};

describe("react-scroll-sensor", () => {
  it("exports a React component", () => {
    expect(typeof ScrollIndicator).toBe("function");
  });
  it("creates an instance of Image when mounted", () => {
    const wrapper = mountScrollIndicator();
    const instance = wrapper.instance();
    expect(typeof instance.state).toBe("object");
  });
});
