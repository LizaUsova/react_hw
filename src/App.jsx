import Alert from './components/Alert'

function App() {
  return (
      <div className="App">
        <Alert text='This is a primary alert—check it out!' type='primary'/>
        <Alert text='This is a primary alert—check it out!' type='secondary'/>
        <Alert text='This is a primary alert—check it out!' type='success'/>
      </div>
  );
}

export default App;