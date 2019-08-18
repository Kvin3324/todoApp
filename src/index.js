import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class MyTodo extends React.Component {

  render() {
    return (
      <div className="my-todo-list">
        <Header />
        <Tasks />
        <Footer />
      </div>
    );
}
}

ReactDOM.render(
  <MyTodo />,
  document.getElementById('root')
);

