import * as React from 'react';
import Counter from './Component/Counter/Counter';
import Tabs from './Component/Tabs/Tabs'
import './App.css';

interface IAppProps { }
interface IAppState { }

export const Style = React.createContext('')

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <Style.Provider value='none'>
        <div className="App">
          <Tabs />
        </div>
      </Style.Provider>
    );
  }
}

export default App;
