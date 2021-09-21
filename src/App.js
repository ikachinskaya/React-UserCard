import { Component } from "react/cjs/react.production.min";
import "./App.css";
import data from "./data.js";
import UserCard from "./components/UserCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: data,
    };
  }
  render() {
    return (
      <div className="App">
        <UserCard users={data} />
      </div>
    );
  }
}

export default App;
