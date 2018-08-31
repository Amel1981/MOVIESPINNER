import React, { Component } from "react";
const HOC = props => WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return this.props.loading ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...props} />
      );
    }
  }
};
export default HOC;