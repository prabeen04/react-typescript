import * as React from 'react';
import Counter from './Component/Counter/Counter';
import Form from './Component/Form/Form';
import './App.css';

interface IAppProps { }
interface IAppState { }

export const Style = React.createContext('')

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <Style.Provider value='none'>
        <div className="App">
          <Counter />
          <Form />
        </div>
      </Style.Provider>
    );
  }
}

export default App;
