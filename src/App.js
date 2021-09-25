import "./App.css";
import data from "./data.js";
import UserCardList from "./components/UserCardList";

function App() {
  return (
    <div className="App">
      <UserCardList users={data} />
    </div>
  );
}

export default App;
