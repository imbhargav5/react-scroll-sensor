// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import throttle from "throttleit";

export default class ScrollSensor extends React.Component {
  static defaultProps = {
    throttleDelay: 300
  };
  static propTypes = {
    throttleDelay: PropTypes.number,
    children: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      scrollX: 0,
      scrollY: 0
    };
    this.handleScroll =
      this.props.throttleDelay > 100
        ? throttle(
            this.updateScrollPosition.bind(this),
            this.props.throttleDelay
          )
        : this.updateScrollPosition.bind(this);
  }
  updateScrollPosition = e => {
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
