
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Planet from './components/Planet';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Planet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
