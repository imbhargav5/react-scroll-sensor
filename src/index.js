// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";

export default class ScrollSensor extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      scrollX: 0,
      scrollY: 0
    };
  }
  handleScroll = e => {
    if (e.isTrusted) {
      this.setState({
        scrollY: window.scrollY,
        scrollX: window.scrollX
      });
    }
  };
  componentDidMount() {
    this.setState({
      mounted: true,
      scrollY: window.scrollY,
      scrollX: window.scrollX
    });
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    if (typeof this.props.children !== "function") {
      throw new Error("Expected ScrollSensor child to be a function");
    }
    return this.props.children(
      this.state.scrollX,
      this.state.scrollY,
      this.state.mounted
    );
  }
}
