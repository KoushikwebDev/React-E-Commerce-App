import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import UserContext from "./Utils/UserContext";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Hello User ",
    };
  }
  render() {
    return (
      <div>
        <h1 className="text-3xl text-purple-800 font-medium">
          {this.state.title}
        </h1>

        <UserContext.Consumer>
          {({ userInfo }) => {
            console.log(userInfo);
            return (
              <h2 className="text-3xl font-bold">
                Name : {userInfo.user.name}, Skills : {userInfo.user.skills}
              </h2>
            );
          }}
        </UserContext.Consumer>

        <Outlet />
      </div>
    );
  }
}
