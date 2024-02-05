
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Routes/Landing";
import Rescure from "./Routes/Rescure";
import Hospitals from "./Routes/Hospitals";
import PredictResult from "./Routes/PredictResult";
import FirstAids from "./Routes/FirstAids";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="Rescure" element={<Rescure/>}/>
        <Route path="Hospitals" element={<Hospitals/>}/>
        <Route path="/PredictResult/:snakeId" element={<PredictResult />} />
        <Route path="FirstAids" element={<FirstAids/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
