import BtnGroup from './components/BtnGroup'

function App() {
  return (
      <div>
        <BtnGroup buttonLeftText="left" buttonMiddleText="middle" buttonRightText="right" isActive={false}/>
      </div>
  );
}

export default App;