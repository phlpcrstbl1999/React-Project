// import logo from './logo.svg';
import './App.css';
import MessageProp from './components/MessageProp';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* With Children */}
      {/* <Profile firstName="Philip" lastName="Cristobal">
        <h3>This is a children.</h3>
      </Profile> */}

      {/* <Profile firstName="Philip" lastName="Cristobal"/> */}

      <MessageProp messageContent="This is a message prop" messageCode="10"/>
    </div>
  );
}

export default App;
