import * as React from 'react';
import Tabs from './Component/Tabs/Tabs';
import Navbar from './Component/Navbar/Navbar'
import Todo from './Component/Todo/Todo'
import Counter from './Component/Counter/Counter'
import { Switch, Route } from "react-router-dom";
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
            <Route exact path='/' component={Counter} />
            <Route exact path='/todo' component={Todo} />
            <Route exact path='/counter' component={Counter} />
          </Switch>
          {/* <Tabs /> */}
        </div>
      </Style.Provider>
    );
  }
}

export default App;
