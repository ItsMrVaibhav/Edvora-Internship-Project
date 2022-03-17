import './App.css';
import React from "react";
import { withRouter } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import Rides from './pages/rides/rides';
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Filter from './components/filter/filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      nearest: [],
      upcomingRides: [],
      pastRides: []
    }
    this.getUser = this.getUser.bind(this);
    this.getRides = this.getRides.bind(this);
    this.nearest = this.nearest.bind(this);
  }

  nearest(array, target) {
    if (array[array.length - 1] <= target) {
      return array.length - 1;
    }
    
    if (array[0] >= target) {
      return 0;
    }

    let left = 0, right = array.length - 1, index = -1;

    while (left <= right) {
      let middle = Math.floor((right + left ) / 2);

      if (array[middle] >= target) {
        index = middle;
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    if (index == 0) {
      return index;
    } else {
      return Math.abs(array[index - 1] - target) < Math.abs(array[index] - target)
      ? index - 1
      : index;
    }
  }

  getUser() {
    return fetch("https://assessment.api.vweb.app/user")
    .then(response => response.json());
  };

  getRides() {
    return fetch("https://assessment.api.vweb.app/rides")
    .then(response => response.json());
  };

  componentDidMount() {
    Promise.all([this.getUser(), this.getRides()]).then(([user, rides]) => {
      this.setState({
        user: user
      });
      const code = user.station_code;
      const currentDate = new Date();
      const upcomingRides = [], pastRides = [], nearest = [];
      console.log("Code:", code)

      for (let i = 0; i < rides.length; i++) {
        const array = rides[i].station_path;
        const index = this.nearest(array, code)
        const tempDate = new Date(rides[i].date);
        const distance = Math.abs(code - array[index]);
        nearest.push({...rides[i], distance, nearestIndex: index, nearestStation: array[index]});

        if (currentDate - tempDate <= 0) { // Future date
          upcomingRides.push({...rides[i], distance, nearestIndex: index, nearestStation: array[index]});
        } else {
          pastRides.push({...rides[i], distance, nearestIndex: index, nearestStation: array[index]});
        }
      }

      nearest.sort((a, b) => a.distance - b.distance); // Sorting based on the distance (ascending)
      upcomingRides.sort((a, b) => a.distance - b.distance); // Sorting based on the distance (ascending)
      pastRides.sort((a, b) => a.distance - b.distance); // Sorting based on the distance (ascending)

      this.setState({
        nearest,
        upcomingRides,
        pastRides
      });
    });
  }

  render() {
    const { location } = this.props;
    return (
      <>
        <NavigationBar title="Edvora" user={this.state.user} />
        <div className="container">
          <div className="panel">
            <div className="panel-links">
              <Link className={`panel-link ${location.pathname === "/" ? "panel-link-active" : ""}`} to="/">Nearest Rides</Link>
              <Link className={`panel-link ${location.pathname === "/upcoming-rides" ? "panel-link-active" : ""}`} to="/upcoming-rides">Upcoming Rides ({this.state.upcomingRides.length})</Link>
              <Link className={`panel-link ${location.pathname === "/past-rides" ? "panel-link-active" : ""}`} to="/past-rides">Past Rides ({this.state.pastRides.length})</Link>
            </div>
            <Filter />
          </div>
          <Switch>
            <Route exact path="/">
              <Rides rides={this.state.nearest} />
            </Route>
            <Route exact path="/upcoming-rides">
              <Rides rides={this.state.upcomingRides} />
            </Route>
            <Route exact path="/past-rides">
              <Rides rides={this.state.pastRides} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);