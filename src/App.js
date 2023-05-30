import data from "./mock-data/data.json";
import {Users} from './components/users';

function App() {

  return (
    <div className="App">
      <h1>User Data</h1>
        <Users users={data.users} />
    </div>
  );
}

export default App;
