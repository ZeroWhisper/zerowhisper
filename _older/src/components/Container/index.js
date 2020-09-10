import React, { Component } from "react";

import { Content } from "./style";

class Dashboard extends Component {
  render = () => <Content>{this.props.children}</Content>;
}

export default Dashboard;
