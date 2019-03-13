import * as React from 'react';
import Counter from './Component/Counter/Counter';
import Form from './Component/Form/Form';
import './App.css';

interface IAppProps { }
interface IAppState { }

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <div className="App">
        <Counter title='Welcome to Typescript' />
        <hr />
        <Form />
      </div>
    );
  }
}

export default App;
