import React from "react";
import "./navigation-bar.css";
import Button from "../button/button";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const user = this.props.user;
    return (
      <div className="navigation-bar">
        <p className="title">{this.props.title}</p>
        {
          user
          ? <div className="user">
            <p className="user-name">{user.name}</p>
            <div className="user-avatar-space">
              <img src={user.url} alt={user.name} className="user-avatar" />
            </div>
          </div>
          :
          <Button title="Log In" onClick={() => undefined} />
        }
      </div>
    );
  }
}

export default NavigationBar;