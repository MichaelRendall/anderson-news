import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>HEADER</header>
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
