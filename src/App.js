import "./App.css";
import Filters from "./components/Filters/Filters";
import ListJobs from "./pages/ListJobs/ListJobs";

function App() {
  return (
    <div className="App">
      <h1>Weekday Frontend Task</h1>
      <Filters />
      <ListJobs />
    </div>
  );
}

export default App;
