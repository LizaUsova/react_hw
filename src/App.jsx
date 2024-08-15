import Card from './components/Card/Card'

function App() {
  return (
      <div className="App">
          <Card>
              <Card.Body>
                  <Card.Title title="I'm a title"></Card.Title>
                  <Card.Text text={"I'm a text"}></Card.Text>
              </Card.Body>
          </Card>
      </div>
  );
}

export default App;