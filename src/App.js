import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import ColorsList from './ColorsList.js';
import ColorDetail from './ColorDetail.js';
import ColorAdd from './ColorAdd.js';
import './App.css';

function App(data = App.defaultProps) {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/colors/add">
          <ColorAdd />
        </Route>
        <Route exact path="/colors">
          <ColorsList data={data.colors}/>
        </Route>
        <Route exact path="/colors/:color">
          <ColorDetail data={data.colors}/>
        </Route>
        <Redirect to="/colors" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {colors:[
  "red",
  "blue",
  "green"
]};

export default App;
