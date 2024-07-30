import React from "react";
import Card from './components/Card'

function App() {
    return (
        <div className="App">
            <Card  title='Hi' />
            <Card text='how are you?' />
            <Card title='Hi'
                  text='how are you?' />
        </div>
    );
}

export default App;