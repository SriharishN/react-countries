import './App.css';
import SearchBox from './components/SearchBox';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CountryDetail from './components/CountryDetail'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h2>Search the Countries</h2>
      <Router>
      <Switch>
        <Route exact path="/" component={SearchBox}></Route>
        <Route exact path="/country/:id" component={CountryDetail}></Route>
      </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
