import Slider from "./components/Slider";
import firstImage from "./images/first.jpeg"
import secondImage from "./images/second.jpeg"
import thirdImage from "./images/third.jpeg"

const images = [firstImage, secondImage, thirdImage, firstImage];
function App() {

  return (
      <div className="ms-5">
          <Slider images={images} />
      </div>
  );
}

export default App;