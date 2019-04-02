import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Landing from './Component/Landing/Landing';
import Todo from './Component/Todo/Todo'
import Counter from './Component/Counter/Counter'
import Fetch from './Component/Fetch/Fetch'
import Movie from './Container/Movie/Movie'
import './App.css';

interface IAppProps { }
interface IAppState { }

export const Style = React.createContext('')

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <Style.Provider value='none'>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/todo' component={Todo} />
            <Route exact path='/counter' component={Counter} />
            <Route exact path='/fetch' component={Fetch} />
            <Route exact path='/Movie' component={Movie} />
          </Switch>
        </div>
      </Style.Provider>
    );
  }
}

export default App;
