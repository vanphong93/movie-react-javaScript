import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Layout from "./HOC/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Layout Component={LoginPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
