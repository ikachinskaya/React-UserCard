import "./App.css";
import data from "./data.js";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <UserCard users={data} />
    </div>
  );
}

export default App;
