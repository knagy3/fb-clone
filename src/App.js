import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messanger from './Messanger';

function App() {
  
  const [{user}, dispatch] = useStateValue();
  
  return (
    // BEM naming convention
    <div className="app">
      {!user ?(
        <Login />
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/messanger">
                <Messanger />
              </Route>
              {/*"/" is the default rout it 
              must be the last one!"*/}
              <Route path="/">
                <Header />
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </Route>
            </Switch>
          </Router>
        </>
      )}
      
    </div>
  );
}

export default App;
