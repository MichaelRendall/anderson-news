import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            HOME
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
