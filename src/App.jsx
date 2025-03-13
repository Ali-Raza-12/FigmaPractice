import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Brands from "./pages/Brands";

function App() {
  return (
    <Router>
      <div className="w-full h-auto p-[12px] flex gap-2">

        <Sidebar />

        <div className="flex-1 bg-[#1F2121] rounded-[16px]">
          <Routes>
            <Route path="/" element={<Brands />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
