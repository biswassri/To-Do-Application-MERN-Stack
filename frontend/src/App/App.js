
import './App.scss';
import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TodosList from './todo-container/list-todo/ListTodo';
import CreateTodo from './todo-container/create-todo/CreateTodo';
import EditTodo from './todo-container/edit-todo/EditTodo';
import ViewTodo from './todo-container/view-todo/ViewTodo';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Link to="/" className="App-link">

          <span className="header-span">
            <h1>To-Do Application</h1>
          </span>
        </Link>

        <div className="Options">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="navbar-nav mr-auto">

                <Link to="/" className="nav-link">To-Do Items<br>
                </br></Link>
  
                <Link to="/create" className="nav-link">Create Task</Link>

              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
          <Route path='/view/:id' component={ViewTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
