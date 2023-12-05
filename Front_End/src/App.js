
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Routes/Landing";
import Rescure from "./Routes/Rescure";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="Rescure" element={<Rescure/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
