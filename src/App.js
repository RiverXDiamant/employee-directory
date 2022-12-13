// route and components
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";

// css
import "./App.css";

export default function App() {
  // use route component to specify each route
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/employeepage/:directory" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}
