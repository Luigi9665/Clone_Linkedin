import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyHome from "./Pages/MyHome";
import RowCol1 from "./components/RowCol1";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <RowCol1 />
      <Routes>
        <Route path="/" element={<MyHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
