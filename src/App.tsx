import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Navbar from './Component/Navbar/Navbar';
import Landing from './Component/Landing/Landing';
import Todo from './Component/Todo/Todo';
import Counter from './Component/Counter/Counter'
import Fetch from './Component/Fetch/Fetch';
import Movie from './Container/Movie/Movie';
import Graphql from './Container/Graphql/Graphql';

import './App.css';
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

interface IAppProps { }
interface IAppState { }

export const Style = React.createContext('')

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Style.Provider value='none'>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/todo' component={Todo} />
                <Route exact path='/counter' component={Counter} />
                <Route exact path='/fetch' component={Fetch} />
                <Route exact path='/Movie' component={Movie} />
                <Route exact path='/graphql' component={Graphql} />
              </Switch>
            </div>
          </Style.Provider>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
