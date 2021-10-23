import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
