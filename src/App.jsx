import Collapse from './components/Collapse'

function App() {
  return (
      <div className="App">
        <Collapse text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras posuere quis turpis vel fermentum. Sed quis consectetur purus, in elementum ex.
        Quisque accumsan convallis elit, et placerat justo luctus blandit. Duis est mauris,
        pharetra ac luctus ac, dignissim a diam. Integer ut vestibulum nisl, non vehicula orci.
        Pellentesque porta nunc at facilisis tincidunt. Donec ac nibh sit amet lorem sagittis rutrum.
        Nam vitae orci maximus, egestas erat non, pulvinar urna." opened={true} />
      </div>
  );
}

export default App;