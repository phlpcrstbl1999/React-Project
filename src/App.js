// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* With Children */}
      {/* <Profile firstName="Philip" lastName="Cristobal">
        <h3>This is a children.</h3>
      </Profile> */}

      <Profile firstName="Philip" lastName="Cristobal"/>
    </div>
  );
}

export default App;
