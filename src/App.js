import logo from './logo.svg';
import './App.css';
import { Button, Text } from 'theme-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant='primary'>
          this is a demo button
        </Button>
        <br></br>
        <Text variant='highlight'>
          this is a sample hightlight
        </Text>
      </header>
    </div>
  );
}

export default App;
