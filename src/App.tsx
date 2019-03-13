import * as React from 'react';
import Counter from './Component/Counter/Counter';
import Form from './Component/Form/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter title='Welcome to Typescript' />
        <Form />
      </div>
    );
  }
}

export default App;
