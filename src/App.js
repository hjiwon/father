import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/pages/Main";
import WayCome from "./components/pages/WayCome";
import Hello from "./components/pages/Hello";
import Info from "./components/pages/Info";
import Photozone from "./components/pages/Photozone";
import Notion from "./components/pages/Notion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/come" element={<WayCome />} />
        <Route path="/company" element={<Hello />} />
        <Route path="/info" element={<Info />} />
        <Route path="/photozone" element={<Photozone />} />
        <Route path="/notion" element={<Notion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
