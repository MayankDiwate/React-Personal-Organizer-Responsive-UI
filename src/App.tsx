import { FaPlay } from "react-icons/fa";
import BodyContent from "./components/BodyContent";
import Header from "./components/Header";

function App() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Header />

      <div className="relative">
        <BodyContent />

        {/* person */}
        <div className="bg-white absolute pb-4 pr-4 -top-0.5 -left-0.5 rounded-br-3xl">
          <img
            src="src/assets/person.png"
            className="h-36 bg-primary rounded-2xl"
          />
        </div>

        {/* person top-right */}
        <div className="absolute bg-primary ml-3.5 top-0 left-36 z-50 rounded-tl-3xl">
          <div className="h-6 w-6"></div>
        </div>
        <div className="absolute bg-white top-0 ml-3.5 left-36">
          <div className="h-6 w-6"></div>
        </div>

        {/* person bottm-left */}
        <div className="absolute bg-primary mt-3.5 top-36 left-0 z-50 rounded-tl-3xl">
          <div className="h-6 w-6"></div>
        </div>
        <div className="absolute bg-white top-36 mt-3.5 left-0">
          <div className="h-6 w-6"></div>
        </div>

        {/* play icon */}
        <div className="bg-white absolute pb-3 pl-3 -top-0.5 -right-0.5 rounded-bl-3xl">
          <div className="bg-black w-12 h-12 flex items-center justify-center rounded-3xl">
            <FaPlay color="white" />
          </div>
        </div>

        {/* play icon top-left */}
        <div className="absolute bg-primary top-0 mr-0.5 right-14 z-50 rounded-tr-3xl">
          <div className="h-6 w-6"></div>
        </div>
        <div className="absolute bg-white top-0 mr-2.5 right-12">
          <div className="h-6 w-6"></div>
        </div>

        {/* play icon bottom-right */}
        <div className="absolute bg-primary mt-0.5 top-14 right-0 z-50 rounded-tr-3xl">
          <div className="h-6 w-6"></div>
        </div>
        <div className="absolute bg-white mt-0.5 top-14 right-0">
          <div className="h-6 w-6"></div>
        </div>

        {/* Downlaoad button */}
        <div className="bg-white absolute pt-3 pr-3 -bottom-0.5 -left-0.5 rounded-tr-3xl">
          <div className="bg-black w-40 text-white h-12 flex items-center justify-center rounded-3xl">
            <p>Download for free</p>
          </div>
        </div>

        {/* Download button botton-right */}
        <div className="absolute bg-primary bottom-0 ml-2.5 left-40 z-50 rounded-bl-3xl">
          <div className="h-6 w-6"></div>
        </div>
        <div className="absolute bg-white bottom-0 ml-2.5 left-40">
          <div className="h-6 w-6"></div>
        </div>

        {/* Download button top-left */}
        <div className="absolute bg-primary mb-0.5 bottom-14 left-0 z-50 rounded-bl-3xl">
          <div className="h-6 w-6"></div>
        </div>
        <div className="absolute bg-white mb-0.5 bottom-14 left-0">
          <div className="h-6 w-6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
