// Import dependencies
import {useEffect} from 'react'
import './App.css';
import axios from 'axios';
import iphone from "./assets/img/iphone-x.png"

// Import redux component
import { Provider } from 'react-redux';
import store from './store';

// Import chat component
import Chat from './components/chat/Chat';

// Import action
import { createSession } from './actions/kwalys'


if (localStorage.session) {
  delete axios.defaults.headers.common.session;
  axios.defaults.headers.common.session = localStorage.session;
} else {
  delete axios.defaults.headers.common.session;
}


// Connect application to redux
const App = () => {

  useEffect(() => {
    // Check if there session
    if(!localStorage.session) {
      //Create
      store.dispatch(createSession())
      
    }
  })

  return (
    <Provider store={store} >
      <div className="App">
        <Chat /> 
      </div> 
    </Provider>
  );
}

export default App;
