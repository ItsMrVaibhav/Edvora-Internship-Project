import React from "react";
import "./navigation-bar.css";
import Button from "../button/button";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropdown: false
    }
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
              <img src={user.url} alt={user.name} className="user-avatar" onClick={() => this.setState({toggleDropdown: !this.state.toggleDropdown})} />
            </div>
            {
              this.state.toggleDropdown
              ? <div className="dropdown-user-details">
                  <p className="dropdown-user-detail">{user.name}</p>
                </div>
              : undefined
            }
          </div>
          :
          <Button title="Log In" onClick={() => undefined} />
        }
      </div>
    );
  }
}

export default NavigationBar;